"use client";

import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/product-card";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCart } from "@/context/CartContext";
export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.slug === params.slug);
  const { addToCart } = useCart();
  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <MotionWrapper>
            <motion.div
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="object-cover w-full h-full"
                data-ai-hint={product.dataAiHint}
              />
            </motion.div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="flex flex-col h-full">
              <Badge variant="secondary" className="w-fit">
                {product.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mt-2">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-primary mt-4">
                &#8373;{product.price.toFixed(2)}
              </p>

              <Separator className="my-6" />

              {/* <p className="text-lg text-foreground/80 leading-relaxed">
                {product.description}
              </p> */}

              <Accordion
                type="single"
                collapsible
                className="w-full no-underline"
                defaultValue="ingredients"
              >
                <AccordionItem value="ingredients">
                  <AccordionTrigger>Ingredients</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {product.ingredients.map((ingredient: string) => (
                        <li
                          key={ingredient}
                          className="flex items-center text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 mr-2 text-primary/50" />
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Description */}
                <AccordionItem value="whats-in-it-for-you">
                  <AccordionTrigger className="no-underline">
                    What's In It For You
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
                      {product.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ritual">
                  <AccordionTrigger className="no-underline">
                    The Ritual
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
                      {product.longDescription}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Ingredients */}

                {/* Extra */}
                {product.extra && (
                  <AccordionItem value="extra">
                    <AccordionTrigger>What Not To Do</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        {product.extra}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                )}

                {product.nb && (
                  <AccordionItem value="nb">
                    <AccordionTrigger>Just So You Know</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        {product.nb}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>

              <div className="mt-auto pt-8">
                <Button
                  size="lg"
                  className="w-full font-bold"
                  onClick={() =>
                    addToCart({
                      id: product.id as string,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      quantity: 1,
                    })
                  }
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <MotionWrapper className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                You Might Also Like
              </h2>
            </MotionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <MotionWrapper key={relatedProduct.id} delay={index * 0.1}>
                  <ProductCard product={relatedProduct} />
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
