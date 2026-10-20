import { NextResponse } from "next/server";
import { SYSTEM_KNOWLEDGE, getAssistantKnowledgeResult } from "@/lib/assistantKnowledge";

export async function POST(request) {
  try {
    const body = await request.json();
    const { message = "", lang = "en" } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const geminiKey = process.env.GEMINI_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    // Default curated knowledge result with action pills
    const curated = getAssistantKnowledgeResult(message, lang);

    // Live Gemini call if API key provided
    if (geminiKey) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              system_instruction: {
                parts: [{ text: SYSTEM_KNOWLEDGE }]
              },
              contents: [
                {
                  role: "user",
                  parts: [{ text: `User language context: ${lang}. User question: ${message}` }]
                }
              ],
              generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 500
              }
            })
          }
        );

        if (response.ok) {
          const data = await response.json();
          const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (reply) {
            return NextResponse.json({
              reply,
              actions: curated.actions || [],
              source: "gemini"
            });
          }
        }
      } catch (err) {
        console.warn("Gemini API call failed, falling back to curated knowledge:", err);
      }
    }

    // Live OpenAI call if API key provided
    if (openaiKey) {
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiKey}`
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: SYSTEM_KNOWLEDGE },
              { role: "user", content: `Context language: ${lang}. Question: ${message}` }
            ],
            temperature: 0.3,
            max_tokens: 500
          })
        });

        if (response.ok) {
          const data = await response.json();
          const reply = data?.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({
              reply,
              actions: curated.actions || [],
              source: "openai"
            });
          }
        }
      } catch (err) {
        console.warn("OpenAI API call failed, falling back to curated knowledge:", err);
      }
    }

    // Seamless instant curated response with rich navigation actions
    return NextResponse.json({
      reply: curated.reply,
      actions: curated.actions || [],
      source: "curated"
    });
  } catch (error) {
    console.error("Assistant API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
