import { EmailTemplate } from "@/templates/contact.template";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Gabriele Napoli <info@gabrielenapoli.dev>",
      to: ["gabriele.nap@gmail.com"],
      subject: "Richiesta contatto",
      react: EmailTemplate({
        firstname: body.firstname,
        surname: body.surname,
        email: body.email,
        message: body.message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
