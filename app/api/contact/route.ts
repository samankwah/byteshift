import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, phone, budget, message } = await request.json()

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "ByteShift Labs <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL ?? "",
    replyTo: email,
    subject: `New inquiry from ${name} — ByteShift Labs`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px 0;font-weight:bold">Name</td><td>${name}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Email</td><td>${email}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Phone</td><td>${phone}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Budget</td><td>${budget}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;vertical-align:top">Message</td><td>${message}</td></tr>
      </table>
    `,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
