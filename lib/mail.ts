import { Resend } from "resend";
export const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendEmail(subject: string, html: string) {
  if (!process.env.RESEND_API_KEY) { console.log("[DEV] Email not sent (missing RESEND_API_KEY) ->", subject); return; }
  const to = "sgntransport94@gmail.com";
  await resend.emails.send({ from: "SGN Website <noreply@sgntransport.inc>", to, subject, html });
}
