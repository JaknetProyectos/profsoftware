// app/api/checkout/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { processOctanoPayment } from "@/lib/payment";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

type CartItem = {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  quantity: number;
  icon: string;
};

type CheckoutBody = {
  amount: number;
  orderId: string;
  subtotal: number;
  vat: number;
  total: number;
  items: CartItem[];
  cardData: {
    number: string;
    name: string;
    month: string;
    year: string;
    cvv: string;
  };
  customer: {
    name: string;
    lastname: string;
    email: string;
    telefono: string;
    direccion: string;
    cp: string;
    city: string;
    state: string;
    country: string;
  };
};

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMoney(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  }).format(value);
}

function businessEmailHtml(
  data: CheckoutBody,
  sale: any
) {
  const itemsHtml =
    data.items?.length > 0
      ? data.items
          .map(
            (item) => `
          <tr>
            <td style="padding:14px 0;border-bottom:1px solid #27272A;">
              <div style="font-size:15px;font-weight:700;color:#fff;">
                ${escapeHtml(item.name)}
              </div>

              <div style="font-size:13px;color:#A1A1AA;margin-top:4px;">
                Quantity: ${escapeHtml(
                  item.quantity
                )}
              </div>
            </td>

            <td style="padding:14px 0;border-bottom:1px solid #27272A;text-align:right;color:#fff;font-weight:600;">
              ${formatMoney(
                item.priceNumber * item.quantity
              )}
            </td>
          </tr>
        `
          )
          .join("")
      : `
        <tr>
          <td colspan="2" style="padding:12px 0;color:#9ca3af;">
            No items found.
          </td>
        </tr>
      `;

  return `
  <div style="background:#080810;padding:40px 16px;font-family:Inter,Arial,sans-serif;">
    <div style="max-width:720px;margin:0 auto;background:#111827;border:1px solid #27272A;border-radius:28px;overflow:hidden;">

      <div style="background:linear-gradient(135deg,#FF4FD8 0%,#7C3AED 100%);padding:42px 36px;">
        <div style="font-size:12px;letter-spacing:4px;text-transform:uppercase;color:#F5D0FE;">
          EVA-01 BUSINESS ALERT
        </div>

        <h1 style="margin:14px 0 0;font-size:38px;line-height:1;color:#fff;">
          New Checkout Confirmed
        </h1>

        <p style="margin:14px 0 0;color:#F3E8FF;font-size:15px;line-height:1.7;">
          A new order has been processed successfully.
        </p>
      </div>

      <div style="padding:36px;">

        <div style="background:#18181B;border:1px solid #27272A;border-radius:18px;padding:22px;margin-bottom:28px;">
          <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#C084FC;margin-bottom:12px;">
            Customer Information
          </div>

          <div style="font-size:18px;font-weight:700;color:#fff;">
            ${escapeHtml(
              data.customer.name
            )} ${escapeHtml(
    data.customer.lastname
  )}
          </div>

          <div style="margin-top:8px;color:#D4D4D8;">
            ${escapeHtml(
              data.customer.email
            )}
          </div>

          <div style="margin-top:6px;color:#D4D4D8;">
            ${escapeHtml(
              data.customer.telefono
            )}
          </div>

          <div style="margin-top:16px;color:#D4D4D8;line-height:1.7;">
            ${escapeHtml(
              data.customer.direccion
            )}<br/>
            ${escapeHtml(
              data.customer.city
            )}, ${escapeHtml(
    data.customer.state
  )}<br/>
            ${escapeHtml(
              data.customer.cp
            )} · ${escapeHtml(
    data.customer.country
  )}
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:28px;">

          <div style="background:#18181B;border:1px solid #27272A;border-radius:18px;padding:20px;">
            <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#A1A1AA;">
              Order ID
            </div>

            <div style="margin-top:10px;font-size:18px;font-weight:700;color:#fff;">
              ${escapeHtml(data.orderId)}
            </div>
          </div>

          <div style="background:#18181B;border:1px solid #27272A;border-radius:18px;padding:20px;">
            <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#A1A1AA;">
              Transaction Reference
            </div>

            <div style="margin-top:10px;font-size:16px;font-weight:700;color:#fff;">
              ${escapeHtml(
                sale?.reference ||
                  sale?.transactionId ||
                  data.orderId
              )}
            </div>
          </div>
        </div>

        <div style="background:#18181B;border:1px solid #27272A;border-radius:18px;padding:22px;margin-bottom:28px;">

          <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#C084FC;margin-bottom:18px;">
            Purchased Services
          </div>

          <table style="width:100%;border-collapse:collapse;">
            ${itemsHtml}
          </table>
        </div>

        <div style="background:#121826;border:1px solid rgba(192,132,252,.18);border-radius:18px;padding:24px;">

          <div style="display:flex;justify-content:space-between;color:#A1A1AA;margin-bottom:10px;">
            <span>Subtotal</span>
            <span>${formatMoney(
              data.subtotal
            )}</span>
          </div>

          <div style="display:flex;justify-content:space-between;color:#A1A1AA;margin-bottom:10px;">
            <span>VAT (16%)</span>
            <span>${formatMoney(
              data.vat
            )}</span>
          </div>

          <div style="display:flex;justify-content:space-between;padding-top:14px;border-top:1px solid #27272A;font-size:22px;font-weight:700;color:#fff;">
            <span>Total</span>
            <span>${formatMoney(
              data.total
            )}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
}

function clientEmailHtml(
  data: CheckoutBody,
  sale: any
) {
  const itemsHtml =
    data.items?.length > 0
      ? data.items
          .map(
            (item) => `
          <tr>
            <td style="padding:14px 0;border-bottom:1px solid #27272A;">
              <div style="font-size:15px;font-weight:700;color:#fff;">
                ${escapeHtml(item.name)}
              </div>

              <div style="font-size:13px;color:#A1A1AA;margin-top:4px;">
                Quantity: ${escapeHtml(
                  item.quantity
                )}
              </div>
            </td>

            <td style="padding:14px 0;border-bottom:1px solid #27272A;text-align:right;color:#fff;font-weight:600;">
              ${formatMoney(
                item.priceNumber * item.quantity
              )}
            </td>
          </tr>
        `
          )
          .join("")
      : `
        <tr>
          <td colspan="2" style="padding:12px 0;color:#9ca3af;">
            No items found.
          </td>
        </tr>
      `;

  return `
  <div style="background:#080810;padding:40px 16px;font-family:Inter,Arial,sans-serif;">
    <div style="max-width:720px;margin:0 auto;background:#111827;border:1px solid #27272A;border-radius:28px;overflow:hidden;">

      <div style="background:linear-gradient(135deg,#7C3AED 0%,#EC4899 100%);padding:42px 36px;">
        <div style="font-size:12px;letter-spacing:4px;text-transform:uppercase;color:#F5D0FE;">
          EVA-01 PAYMENT SYSTEM
        </div>

        <h1 style="margin:14px 0 0;font-size:38px;line-height:1;color:#fff;">
          Payment Receipt
        </h1>

        <p style="margin:14px 0 0;color:#F3E8FF;font-size:15px;line-height:1.7;">
          Your transaction has been processed successfully.
        </p>
      </div>

      <div style="padding:36px;">

        <div style="background:#18181B;border:1px solid #27272A;border-radius:18px;padding:22px;margin-bottom:28px;">
          <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#C084FC;margin-bottom:12px;">
            Customer Information
          </div>

          <div style="font-size:18px;font-weight:700;color:#fff;">
            ${escapeHtml(
              data.customer.name
            )} ${escapeHtml(
    data.customer.lastname
  )}
          </div>

          <div style="margin-top:8px;color:#D4D4D8;">
            ${escapeHtml(
              data.customer.email
            )}
          </div>

          <div style="margin-top:6px;color:#D4D4D8;">
            ${escapeHtml(
              data.customer.telefono
            )}
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:28px;">

          <div style="background:#18181B;border:1px solid #27272A;border-radius:18px;padding:20px;">
            <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#A1A1AA;">
              Order ID
            </div>

            <div style="margin-top:10px;font-size:18px;font-weight:700;color:#fff;">
              ${escapeHtml(data.orderId)}
            </div>
          </div>

          <div style="background:#18181B;border:1px solid #27272A;border-radius:18px;padding:20px;">
            <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#A1A1AA;">
              Transaction Reference
            </div>

            <div style="margin-top:10px;font-size:16px;font-weight:700;color:#fff;">
              ${escapeHtml(
                sale?.reference ||
                  sale?.transactionId ||
                  data.orderId
              )}
            </div>
          </div>
        </div>

        <div style="background:#18181B;border:1px solid #27272A;border-radius:18px;padding:22px;margin-bottom:28px;">

          <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#C084FC;margin-bottom:18px;">
            Purchased Services
          </div>

          <table style="width:100%;border-collapse:collapse;">
            ${itemsHtml}
          </table>
        </div>

        <div style="background:#121826;border:1px solid rgba(192,132,252,.18);border-radius:18px;padding:24px;">

          <div style="display:flex;justify-content:space-between;color:#A1A1AA;margin-bottom:10px;">
            <span>Subtotal</span>
            <span>${formatMoney(
              data.subtotal
            )}</span>
          </div>

          <div style="display:flex;justify-content:space-between;color:#A1A1AA;margin-bottom:10px;">
            <span>VAT (16%)</span>
            <span>${formatMoney(
              data.vat
            )}</span>
          </div>

          <div style="display:flex;justify-content:space-between;padding-top:14px;border-top:1px solid #27272A;font-size:22px;font-weight:700;color:#fff;">
            <span>Total Paid</span>
            <span>${formatMoney(
              data.total
            )}</span>
          </div>
        </div>

        <div style="margin-top:32px;text-align:center;">
          <p style="color:#71717A;font-size:13px;line-height:1.8;margin:0;">
            Thank you for trusting EVA-01.<br />
            Our team will contact you shortly to begin your project.
          </p>
        </div>
      </div>
    </div>
  </div>
`;
}

export async function POST(req: Request) {
  try {
    const body =
      (await req.json()) as CheckoutBody;

    const {
      amount,
      orderId,
      subtotal,
      vat,
      total,
      items,
      cardData,
      customer,
    } = body;

    if (
      !amount ||
      !orderId ||
      !cardData ||
      !customer
    ) {
      return NextResponse.json(
        {
          error:
            "Missing required checkout data",
        },
        { status: 400 }
      );
    }

    const sale =
      await processOctanoPayment({
        amount,
        orderId,
        cardData,
        customer,
      });

    const businessEmail =
      process.env.BUSINESS_EMAIL ||
      "soporte@sistemasavante.com";

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Eva-01 <soporte@sistemasavante.com>";

    const emailTasks =
      await Promise.allSettled([
        resend.emails.send({
          from: fromEmail,
          to: businessEmail,
          replyTo: customer.email,
          subject: `New sale confirmed - ${orderId}`,
          html: businessEmailHtml(
            {
              amount,
              orderId,
              subtotal,
              vat,
              total,
              items,
              cardData,
              customer,
            },
            sale
          ),
        }),

        resend.emails.send({
          from: fromEmail,
          to: customer.email,
          subject: `Payment confirmed - ${orderId}`,
          html: clientEmailHtml(
            {
              amount,
              orderId,
              subtotal,
              vat,
              total,
              items,
              cardData,
              customer,
            },
            sale
          ),
        }),
      ]);

    return NextResponse.json({
      success: true,
      sale,
      emails: {
        business:
          emailTasks[0].status ===
          "fulfilled"
            ? "sent"
            : "failed",

        customer:
          emailTasks[1].status ===
          "fulfilled"
            ? "sent"
            : "failed",
      },
    });
  } catch (error: any) {
    console.error(
      "Checkout API Error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Payment processing failed",
      },
      { status: 500 }
    );
  }
}