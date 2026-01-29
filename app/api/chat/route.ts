import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages, person } = await req.json();

  const userMessage =
    messages
      ?.slice()
      .reverse()
      .find((m: any) => m.role === "user")
      ?.content
      ?.find((p: any) => p.type === "text")
      ?.text ?? "No user message";
  console.log("📨 User message:", userMessage);

  const response = await client.responses.create({
    prompt: {
      id: "pmpt_6979bf1eca908196b70a6531fe64475702485bcdec9d718c",
      version: "3",
      variables: {
        person: person,
      },
    },
    input: userMessage,
  });

  const assistantText = response.output_text ?? "";
  console.log("🤖 Assistant response:", assistantText);
  return new Response(
    JSON.stringify({ text: assistantText }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
