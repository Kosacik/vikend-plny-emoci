import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    await resend.emails.send({
      from: "Víkend plný emocí <infovpe@niknak.cz>",
      to: ["radim@niknak.cz"],
      subject: "Nový zájemce",
      html: `
        <h2>Nový zájemce</h2>

        <p><strong>Jméno:</strong> ${body.name}</p>

        <p><strong>Email:</strong> ${body.email}</p>

        <p><strong>Zpráva:</strong></p>

        <p>${body.message}</p>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}