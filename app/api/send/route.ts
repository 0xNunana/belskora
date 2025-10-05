// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { email, message, name, phone } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  console.log(email, message, name, phone);
  try {
    await resend.emails.send({
      from: "Belskóra Essentials<support@belskora.com>",
      to: "Belskoraessential@gmail.com",
      subject: "New Inquiry from Website",
      replyTo: email,
      html: `
        <h2>New Inquiry</h2>
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ""}
      
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
