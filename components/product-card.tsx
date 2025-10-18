"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/data";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-card"
      whileHover={{ y: -5 }}
    >
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="aspect-square overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover w-full h-full"
              data-ai-hint={product.dataAiHint}
            />
          </motion.div>
        </div>
      </Link>
      <div className="p-4 border-t">
        <h3 className="font-headline text-lg font-semibold text-primary truncate">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold text-primary">
            &#8373;{product.price.toFixed(2)}
          </p>
          <Button
            size="sm"
            onClick={() => {
              addToCart({
                id: product.id as string,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1,
              });
              setAdded(true);
            }}
            disabled={added}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
