// app/api/notify-payment/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      reference,
      customer,
      cart_items,

      total,

      timestamp,
    } = body;

    const html = `
      <h2> New Order Received!</h2>
      <p><strong>Name:</strong> ${customer.name}</p>
      <p><strong>Email:</strong> ${customer.email}</p>
      <p><strong>Phone:</strong> ${customer.phone}</p>
      <p><strong>Reference:</strong> ${reference}</p>
    
      <p><strong>Net:</strong> ₵${total.toFixed(2)}</p>

      <p><strong>Date:</strong> ${new Date(timestamp).toLocaleString()}</p>
      <hr/>
      <p><strong>Address: ${customer.address}</strong></p>
      <hr/>
      <h3>🛒 Cart Items</h3>
      <ul>
        ${cart_items
          .map(
            (item: any) =>
              `<li>${item.name} — ₵${item.price} × ${item.quantity} = ₵${
                item.subtotal
              }</li>`
          )
          .join("")}
      </ul>
    `;

    await resend.emails.send({
      from: "Payments <payments@belskora.com>",
      to: "Belskoraessential@gmail.com", // your admin email
      subject: `Order Confirmed for ${customer.name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
