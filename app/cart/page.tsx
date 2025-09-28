"use client";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import PaystackPop from "@paystack/inline-js";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const paystackFeeRate = parseFloat(
    process.env.NEXT_PUBLIC_PAYSTACK_FEE || "0.0195"
  );
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const grossAmount = total / (1 - paystackFeeRate);

  const handleCheckout = () => {
    if (!email || !phone || !name) {
      alert("Please complete your checkout details.");
      return;
    }
    try {
      setLoading(true);

      const paystack = new PaystackPop();

      paystack.newTransaction({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!, // safe to expose
        email: email, // ideally from logged-in user
        amount: Math.round(grossAmount * 100), // Paystack expects amount in kobo/pesewas
        metadata: {
          custom_fields: [
            {
              display_name: "Phone Number",
              variable_name: "phone",
              value: phone,
            },
            {
              display_name: "Email",
              variable_name: "email",
              value: email,
            },
            {
              display_name: "Name",
              variable_name: "name",
              value: name,
            },
          ],
        },

        onSuccess: async (transaction) => {
          console.log("Payment success:", transaction);

          // verify transaction on your backend
          const res = await fetch("/api/paystack/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ reference: transaction.reference }),
          });

          const data = await res.json();

          if (data.status === "success") {
            alert("Payment verified successfully!");
            clearCart();
          } else {
            alert("Payment verification failed.");
          }
        },
        onCancel: () => {
          alert("Payment was cancelled");
        },
      });
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred during checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link href="/shop" className="">
            <Button>Shop Now</Button>
          </Link>
        </>
      ) : (
        <div className=" grid md:grid-cols-3 gap-4">
          <ul className="p-4 col-span-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between py-2 border-b"
              >
                <div className="flex gap-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.quantity} × &#8373;{item.price}
                    </p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className="md:col-span-1 p-4 w-full border rounded space-y-4 h-fit">
            <div className="mt-6 space-y-4">
              <p className="text-xl font-bold">Checkout Details</p>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-2 border rounded"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div>
                <p className="text-xl font-bold">
                  Grand Total: &#8373;{grossAmount.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">
                  Item Total: &#8373;{total.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">
                  Txn Fees: &#8373;{(grossAmount - total).toFixed(2)} (approx)
                </p>
              </div>
              <Button onClick={handleCheckout} size="lg" className="font-bold">
                {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
