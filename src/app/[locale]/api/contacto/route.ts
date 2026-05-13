// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nombre,
      email,
      mensaje,
      telefono,
    } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        {
          error:
            "Nombre, email y mensaje son obligatorios",
        },
        { status: 400 }
      );
    }

    /*
     * EMAIL TO BUSINESS
     */

    await resend.emails.send({
      from: "Eva-01 <soporte@sistemasavante.com>",
      to: "soporte@sistemasavante.com",
      subject: `Nuevo contacto de ${nombre}`,

      html: `
        <div style="
          background:#0B0B14;
          padding:40px;
          font-family:Arial,sans-serif;
          color:white;
        ">
          <div style="
            max-width:600px;
            margin:0 auto;
            background:#121222;
            border:1px solid #2A2A40;
            border-radius:24px;
            overflow:hidden;
          ">

            <div style="
              background:linear-gradient(135deg,#7C3AED,#FF4FD8);
              padding:32px;
            ">
              <p style="
                margin:0;
                color:#F5D0FE;
                letter-spacing:3px;
                font-size:12px;
              ">
                EVA-01 ALERT
              </p>

              <h1 style="
                margin:12px 0 0;
                font-size:32px;
                color:white;
              ">
                Nuevo mensaje recibido
              </h1>
            </div>

            <div style="padding:32px;">
              <div style="
                background:#1A1A2E;
                padding:24px;
                border-radius:18px;
                margin-bottom:24px;
              ">
                <p style="
                  margin:0 0 10px;
                  color:#C084FC;
                  font-size:12px;
                  letter-spacing:2px;
                ">
                  CLIENTE
                </p>

                <h2 style="
                  margin:0;
                  color:white;
                ">
                  ${nombre}
                </h2>
              </div>

              <p style="color:#A1A1AA;">
                <strong style="color:white;">Email:</strong>
                ${email}
              </p>

              ${
                telefono
                  ? `
                <p style="color:#A1A1AA;">
                  <strong style="color:white;">Teléfono:</strong>
                  ${telefono}
                </p>
              `
                  : ""
              }

              <div style="
                margin-top:24px;
                background:#18181B;
                border:1px solid #27272A;
                padding:20px;
                border-radius:16px;
              ">
                <p style="
                  color:#E4E4E7;
                  line-height:28px;
                  margin:0;
                ">
                  ${mensaje}
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    /*
     * EMAIL TO CLIENT
     */

    await resend.emails.send({
      from: "Eva-01 <soporte@sistemasavante.com>",
      to: email,
      subject: "We received your message",

      html: `
        <div style="
          background:#0B0B14;
          padding:40px;
          font-family:Arial,sans-serif;
          color:white;
        ">
          <div style="
            max-width:600px;
            margin:0 auto;
            background:#121222;
            border:1px solid #2A2A40;
            border-radius:24px;
            overflow:hidden;
          ">

            <div style="
              background:linear-gradient(135deg,#7C3AED,#C084FC);
              padding:40px;
              text-align:center;
            ">
              <p style="
                margin:0;
                color:#E9D5FF;
                letter-spacing:3px;
                font-size:12px;
              ">
                EVA-01 SYSTEM
              </p>

              <h1 style="
                margin:16px 0 0;
                font-size:36px;
                color:white;
              ">
                Contact Confirmed
              </h1>
            </div>

            <div style="padding:40px;">
              <p style="
                color:#E5E7EB;
                font-size:18px;
              ">
                Hi ${nombre},
              </p>

              <p style="
                color:#A1A1AA;
                line-height:28px;
                font-size:16px;
              ">
                We received your message successfully.
                Our team is reviewing your request and
                will contact you shortly.
              </p>

              <div style="
                margin-top:32px;
                background:#1A1A2E;
                border:1px solid rgba(192,132,252,0.2);
                border-radius:16px;
                padding:24px;
              ">
                <p style="
                  margin:0;
                  color:#C084FC;
                  font-size:12px;
                  letter-spacing:2px;
                ">
                  STATUS
                </p>

                <h2 style="
                  margin:12px 0 0;
                  color:white;
                ">
                  Pending Review
                </h2>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Error sending confirmation emails",
      },
      { status: 500 }
    );
  }
}