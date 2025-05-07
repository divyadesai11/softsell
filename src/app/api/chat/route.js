import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { message } = await req.json();

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-4" if you have access
      messages: [{ role: "user", content: message }],
    });

    const reply = chatCompletion.choices[0].message.content;

    return Response.json({ reply });
  } catch (err) {
    console.error("OpenAI error:", err);
    return Response.json({ reply: "Sorry, I'm having trouble right now." });
  }
}
