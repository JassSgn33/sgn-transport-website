import { sendEmail } from "@/lib/mail";
export async function POST(req: Request) {
  const data = await req.formData();
  const obj = Object.fromEntries(data.entries());
  const html = `<pre>${JSON.stringify(obj, null, 2)}<\/pre>`;
  await sendEmail("New Driver Application — SGN Website", html);
  return new Response(null, { status: 200 });
}
