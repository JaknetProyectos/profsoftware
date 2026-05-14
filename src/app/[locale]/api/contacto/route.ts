// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatLabel(key: string) {
  const labels: Record<string, string> = {
    nombre: "Nombre",
    email: "Correo electrónico",
    mensaje: "Mensaje",
    telefono: "Teléfono",
    empresa: "Empresa",
    asunto: "Asunto",
    pais: "País",
    country: "País",
    ciudad: "Ciudad",
    city: "Ciudad",
    estado: "Estado",
    state: "Estado",
    direccion: "Dirección",
    address: "Dirección",
    cp: "Código postal",
    zip: "Código postal",
    website: "Sitio web",
  };

  return (
    labels[key] ||
    key
      .replace(/[_-]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

function buildFieldsHtml(body: Record<string, unknown>) {
  const entries = Object.entries(body).filter(
    ([, value]) =>
      value !== undefined &&
      value !== null &&
      String(value).trim() !== ""
  );

  if (!entries.length) {
    return `
      <p style="margin:0;color:#A1A1AA;">
        No hay datos adicionales para mostrar.
      </p>
    `;
  }

  return entries
    .map(
      ([key, value]) => `
        <div style="
          display:flex;
          justify-content:space-between;
          gap:16px;
          padding:12px 0;
          border-bottom:1px solid #27272A;
        ">
          <span style="color:#C084FC;font-size:13px;min-width:120px;">
            ${escapeHtml(formatLabel(key))}
          </span>
          <span style="
            color:#E4E4E7;
            font-size:13px;
            text-align:right;
            word-break:break-word;
          ">
            ${escapeHtml(value)}
          </span>
        </div>
      `
    )
    .join("");
}

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
      from: "Plataforma Tecnológica <gestion@plataformatecnologica.com>",
      to: "gestion@plataformatecnologica.com",
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
                ALERTA DE PLATAFORMA TECNOLÓGICA
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
                  ${escapeHtml(nombre)}
                </h2>
              </div>

              <div style="
                background:#18181B;
                border:1px solid #27272A;
                border-radius:16px;
                padding:20px;
                margin-bottom:24px;
              ">
                <div style="
                  font-size:12px;
                  letter-spacing:2px;
                  text-transform:uppercase;
                  color:#C084FC;
                  margin-bottom:16px;
                ">
                  Detalles del contacto
                </div>

                ${buildFieldsHtml(body)}
              </div>

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
                  white-space:pre-wrap;
                ">
                  ${escapeHtml(mensaje)}
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
      from: "Plataforma Tecnológica <gestion@plataformatecnologica.com>",
      to: email,
      subject: "Hemos recibido tu mensaje",

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
                SISTEMA DE PLATAFORMA TECNOLÓGICA
              </p>

              <h1 style="
                margin:16px 0 0;
                font-size:36px;
                color:white;
              ">
                Contacto confirmado
              </h1>
            </div>

            <div style="padding:40px;">
              <p style="
                color:#E5E7EB;
                font-size:18px;
              ">
                Hola ${escapeHtml(nombre)},
              </p>

              <p style="
                color:#A1A1AA;
                line-height:28px;
                font-size:16px;
              ">
                Hemos recibido tu mensaje correctamente.
                Estos son los datos que nos compartiste:
              </p>

              <div style="
                margin-top:24px;
                background:#18181B;
                border:1px solid #27272A;
                border-radius:16px;
                padding:20px;
              ">
                ${buildFieldsHtml(body)}
              </div>

              <div style="
                margin-top:24px;
                background:#18181B;
                border:1px solid #27272A;
                border-radius:16px;
                padding:20px;
              ">
                <p style="
                  margin:0 0 10px;
                  color:#C084FC;
                  font-size:12px;
                  letter-spacing:2px;
                  text-transform:uppercase;
                ">
                  Mensaje
                </p>

                <p style="
                  margin:0;
                  color:#E4E4E7;
                  line-height:28px;
                  font-size:16px;
                  white-space:pre-wrap;
                ">
                  ${escapeHtml(mensaje)}
                </p>
              </div>

              <p style="
                color:#A1A1AA;
                line-height:28px;
                font-size:16px;
                margin-top:24px;
              ">
                Nuestro equipo está revisando tu solicitud y
                se pondrá en contacto contigo en breve.
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
                  ESTADO
                </p>

                <h2 style="
                  margin:12px 0 0;
                  color:white;
                ">
                  Revisión pendiente
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
          "Error al enviar los correos de confirmación",
      },
      { status: 500 }
    );
  }
}