import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Víkend plný emocí <infovpe@niknak.cz>",

      to: "radim@niknak.cz",
      replyTo: email,
      subject: "🌊 Nový zájemce o Víkend plný emocí",


      html: `
        <h2>Nový zájemce</h2>

        <p><strong>Jméno</strong><br>${name}</p>

        <p><strong>E-mail</strong><br>${email}</p>

        <hr style="margin:32px 0;border:none;border-top:1px solid #ddd;">

        <p><strong>Co ho přitahuje</strong></p>

        <p style="white-space:pre-line">${message}</p>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return new Response(
      "Error",
      {
        status: 500,
      }
    );

  }
}