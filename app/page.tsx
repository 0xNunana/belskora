import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[94vh] bg-secondary/50">
        <Image
          src="/hand.jpg"
          alt="Belsk&oacute;ra Essentials hero background"
          layout="fill"
          objectFit="cover"
          className=""
          data-ai-hint="abstract background"
        />
        <div className="container mx-auto h-full flex flex-col mt-10    items-center text-center relative z-10 px-4">
          <MotionWrapper>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-primary tracking-tight">
              Pure. Natural. Radiant.
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-foreground/80 font-medium">
              Discover the essence of Ghanaian beauty with our premium,
              all-natural cosmetic products.
            </p>
          </MotionWrapper>
          <MotionWrapper delay={0.4}>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="font-bold">
                <Link href="/shop">Shop Collection</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-bold">
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionWrapper className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/hero.jpg"
                alt="Brand story"
                layout="fill"
                objectFit="cover"
                data-ai-hint="natural ingredients"
              />
            </MotionWrapper>
            <div className="text-left">
              <MotionWrapper>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                  Rooted in Nature, Crafted with Love
                </h2>
              </MotionWrapper>
              <MotionWrapper delay={0.2}>
                <p className="mt-4 text-lg text-foreground/80">
                  Belsk&oacute;ra Essentials was born from a passion for Ghana's
                  rich botanical heritage. We blend traditional wisdom with
                  modern science to create skincare that is both effective and
                  kind to your skin and the environment.
                </p>
              </MotionWrapper>
              <MotionWrapper delay={0.4}>
                <Button
                  asChild
                  variant="link"
                  className="p-0 mt-4 text-lg font-bold"
                >
                  <Link href="/about">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              Featured Products
            </h2>
            <p className="mt-2 text-lg text-foreground/80 max-w-xl mx-auto">
              Handpicked favorites from our collection, loved by our community.
            </p>
          </MotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <MotionWrapper key={product.id} delay={index * 0.1}>
                <ProductCard product={product} />
              </MotionWrapper>
            ))}
          </div>
          <MotionWrapper className="text-center mt-12">
            <Button asChild size="lg" className="font-bold">
              <Link href="/shop">Explore All Products</Link>
            </Button>
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
}
