import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages, studentInfo, academicContext } = await req.json();
    const apiKey = process.env.GROQ_API_KEY || "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";

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GROQ_API_KEY in environment variables. Please add GROQ_API_KEY to your .env.local file." },
        { status: 500 }
      );
    }

    // Call the Groq API strictly following OpenAI's standard formatting
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { 
            role: "system", 
            content: `You are SphereAI, the official campus assistant for Manipal University Jaipur. You always introduce yourself as SphereAI when asked. You maintain a helpful, strictly professional, and concise tone appropriate for university students and faculty looking up academic rules, debug tips, or campus navigation. If someone asks for information outside of a university's scope, still assist them politely. When the user asks about attendance, timetable, assignments, deadlines, or marks, you should answer directly from the academic context below instead of giving generic advice.\n\nHere is the private Identity Context of the student you are currently talking to: ${studentInfo ? studentInfo : 'Anonymous Student'}\n\nHere is the live academic context you should use for answers: ${academicContext ? academicContext : 'No live academic context was provided.'}`
          },
          ...messages
        ]
      })
    });

    const data = await response.json();
    
    if (data.error) {
       return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("GROQ API Error:", error);
    return NextResponse.json({ error: "Failed to fetch response: " + error.message }, { status: 500 });
  }
}
