import { Resend } from "resend"
import { NextResponse } from "next/server"

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

const cell = (label: string, value: string) => `
  <tr>
    <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6b7280;white-space:nowrap;vertical-align:top;width:110px">${label}</td>
    <td style="padding:12px 16px;font-size:14px;color:#111827;border-left:1px solid #f3f4f6">${value}</td>
  </tr>`

function notificationHtml(name: string, email: string, phone: string, budget: string, message: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <!-- Header -->
        <tr>
          <td style="background:#1d4ed8;border-radius:12px 12px 0 0;padding:32px 40px">
            <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px">ByteShift Labs</p>
            <p style="margin:6px 0 0;font-size:13px;color:#bfdbfe">New contact form submission</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:32px 40px">
            <p style="margin:0 0 24px;font-size:16px;color:#111827">
              You have a new inquiry from <strong>${name}</strong>. Details below.
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f3f4f6;border-radius:8px;overflow:hidden">
              ${cell("Name", name)}
              ${cell("Email", `<a href="mailto:${email}" style="color:#1d4ed8;text-decoration:none">${email}</a>`)}
              ${cell("Phone", phone)}
              ${cell("Budget", budget)}
              ${cell("Message", message)}
            </table>
            <p style="margin:28px 0 0;font-size:13px;color:#6b7280">
              Reply directly to this email to respond to ${name}.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f3f4f6;border-radius:0 0 12px 12px;padding:20px 40px;text-align:center">
            <p style="margin:0;font-size:12px;color:#9ca3af">ByteShift Labs · Expert IT Consulting</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function autoReplyHtml(name: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <!-- Header -->
        <tr>
          <td style="background:#1d4ed8;border-radius:12px 12px 0 0;padding:32px 40px">
            <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px">ByteShift Labs</p>
            <p style="margin:6px 0 0;font-size:13px;color:#bfdbfe">Expert IT Consulting</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:40px">
            <p style="margin:0 0 16px;font-size:22px;font-weight:700;color:#111827">Thanks, ${name}.</p>
            <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#374151">
              We've received your message and a member of our team will be in touch within <strong>24 hours</strong>.
            </p>
            <p style="margin:0 0 32px;font-size:15px;line-height:1.7;color:#374151">
              In the meantime, feel free to explore our work and find out more about how we operate.
            </p>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-radius:8px;background:#1d4ed8">
                  <a href="https://byteshiftlabs.netlify.app/case-studies"
                     style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none">
                    View Our Case Studies →
                  </a>
                </td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #f3f4f6;margin:36px 0">
            <p style="margin:0;font-size:13px;color:#9ca3af">
              ByteShift Labs · Expert IT Consulting<br>
              You're receiving this because you contacted us via byteshiftlabs.netlify.app
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f3f4f6;border-radius:0 0 12px 12px;padding:20px 40px;text-align:center">
            <p style="margin:0;font-size:12px;color:#9ca3af">© 2025 ByteShift Labs. All rights reserved.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, phone, budget, message } = body

  // Server-side validation
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Name must be at least 2 characters." }, { status: 400 })
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 })
  }
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 })
  }

  const toEmail = process.env.CONTACT_TO_EMAIL
  if (!toEmail) {
    console.error("CONTACT_TO_EMAIL env var is not set")
    return NextResponse.json({ error: "Contact email not configured on server." }, { status: 500 })
  }

  const safeName    = escapeHtml(name.trim())
  const safeEmail   = escapeHtml(email.trim())
  const safePhone   = escapeHtml((phone ?? "").trim() || "—")
  const safeBudget  = escapeHtml((budget ?? "").trim() || "—")
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>")

  const resend    = new Resend(process.env.RESEND_API_KEY)
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "ByteShift Labs <onboarding@resend.dev>"

  // Notify the ByteShift team
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email.trim(),
    subject: `New inquiry from ${safeName} — ByteShift Labs`,
    html: notificationHtml(safeName, safeEmail, safePhone, safeBudget, safeMessage),
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Auto-reply to the submitter (best-effort — don't fail the request if this errors)
  await resend.emails.send({
    from: fromEmail,
    to: email.trim(),
    subject: "We received your message — ByteShift Labs",
    html: autoReplyHtml(safeName),
  }).catch((err) => console.error("Auto-reply failed:", err))

  return NextResponse.json({ success: true })
}
