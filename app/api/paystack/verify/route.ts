import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { reference } = await req.json();

  const res = await fetch(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    }
  );

  const data = await res.json();

  if (data.status && data.data.status === "success") {
    console.log("Payment verified successfully!");
    return NextResponse.json({ status: "success", data: data.data });
  }
  console.error("Payment verification failed:", data);
  return NextResponse.json({ status: "failed", data });
}
