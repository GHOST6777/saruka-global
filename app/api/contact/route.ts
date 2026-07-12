import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      country,
      email,
      phone,
      product,
      quantity,
      destinationPort,
      message,
    } = body;

    if (!name || !country || !email || !product || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;

    if (!contactEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "Contact email is not configured.",
        },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Saruka Global Website <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `New Export Enquiry — ${product}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; color: #1f2937;">
          <div style="background: #022c22; padding: 28px; border-radius: 16px 16px 0 0;">
            <h1 style="margin: 0; color: #d4af37; font-size: 26px;">
              New Export Enquiry
            </h1>
            <p style="margin: 8px 0 0; color: #ffffff;">
              Received through the Saruka Global website
            </p>
          </div>

          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 28px; border-radius: 0 0 16px 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tbody>
                ${row("Name", name)}
                ${row("Company", company || "Not provided")}
                ${row("Country", country)}
                ${row("Email", email)}
                ${row("Phone / WhatsApp", phone || "Not provided")}
                ${row("Product", product)}
                ${row("Required Quantity", quantity || "Not provided")}
                ${row(
                  "Destination Port",
                  destinationPort || "Not provided"
                )}
              </tbody>
            </table>

            <div style="margin-top: 24px;">
              <h3 style="margin-bottom: 8px; color: #022c22;">Message</h3>
              <div style="background: #faf8f2; padding: 16px; border-radius: 10px; line-height: 1.7;">
                ${escapeHtml(message)}
              </div>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message || "Email could not be sent.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 8px; border-bottom: 1px solid #eeeeee; font-weight: 700; color: #022c22; width: 38%;">
        ${escapeHtml(label)}
      </td>
      <td style="padding: 10px 8px; border-bottom: 1px solid #eeeeee;">
        ${escapeHtml(value)}
      </td>
    </tr>
  `;
}

function escapeHtml(value: string) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}