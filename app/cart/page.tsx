"use client";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
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
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-bold">
              Total: &#8373;{total.toFixed(2)}
            </p>
            <Button asChild>
              <Link href="/checkout">Checkout</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
