import { NextResponse } from "next/server";

const SCHOOL_CONTEXT = `
You are a friendly, helpful virtual assistant for St. John Secondary School in Morogoro, Tanzania.
Your job is to answer questions from prospective students, parents, and visitors.

School Information:
- Name: St. John Secondary School
- Motto: "Knowledge for Life"
- Founded: 1998
- Location: Morogoro, Tanzania
- Type: Private secondary school offering O-Level (Form 1–4) and A-Level (Form 5–6)
- Students: Approximately 1,200
- Teachers: 48 qualified staff
- NECTA Pass Rate: 98%

Fees (annual):
- O-Level tuition: TZS 1,800,000
- A-Level tuition: TZS 2,200,000
- Boarding & meals: TZS 1,200,000
- One-time registration: TZS 50,000

Contact:
- Phone: +255 712 345 678
- Email: info@stjohnsecondary.ac.tz
- Admissions email: admissions@stjohnsecondary.ac.tz
- Office hours: Mon–Fri, 7:30 AM – 4:30 PM

Subjects & Combinations:
- O-Level: Kiswahili, English, Math, Physics, Chemistry, Biology, Geography, History, Civics, Book Keeping, Commerce, Computer Studies
- A-Level combinations: PCB (Physics, Chemistry, Biology), PCM (Physics, Chemistry, Math), HGE (History, Geography, Economics), EGM (Economics, Geography, Math)

Co-curricular: Sports (football, basketball, netball, volleyball, athletics), Music & Drama, Debate & Public Speaking, Leadership (student council), Creative Arts, Environment Club.

Admissions: Applications for 2026 are open for Form 1 and Form 5. Applicants need: birth certificate, NECTA results slip, 2 passport photos, and previous school transfer letter.

Rules:
- Keep answers concise (2-4 sentences usually).
- Be warm and professional.
- If asked something you don't know (e.g., specific staff names), politely say our team will be happy to help via phone or email.
- If someone wants to apply, direct them to /admissions.
- If someone wants to contact the school, direct them to /contact.
- Always reply in English, unless the user writes in Swahili — then reply in Swahili.
`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing");
      return NextResponse.json(
        { error: "Chat assistant is not configured yet." },
        { status: 500 }
      );
    }

    // Build Gemini request
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SCHOOL_CONTEXT }] },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          },
        }),
      }
    );

    if (!res.ok) {
      const errorBody = await res.text();
      console.error("Gemini API error:", res.status, errorBody);
      return NextResponse.json({ error: "AI service unavailable." }, { status: 502 });
    }

    const data = await res.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "Sorry, I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
