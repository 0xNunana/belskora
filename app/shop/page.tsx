import { MotionWrapper } from "@/components/motion-wrapper";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

export default function ShopPage() {
  return (
    <div className="bg-background">
      <MotionWrapper>
        <section className="bg-secondary/50 py-6 md:py-16">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">
              Our Collection
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
              Explore our full range of all-natural, Ghanaian-inspired skincare
              products.
            </p>
          </div>
        </section>
      </MotionWrapper>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <MotionWrapper key={product.id} delay={index * 0.05}>
              <ProductCard product={product} />
            </MotionWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
