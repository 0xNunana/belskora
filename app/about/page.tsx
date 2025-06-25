import { MotionWrapper } from "@/components/motion-wrapper";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const values = [
  {
    title: "Purity",
    description:
      "We use only the finest, all-natural ingredients sourced ethically from Ghana.",
  },
  {
    title: "Tradition",
    description:
      "Our formulas are inspired by generations of Ghanaian botanical wisdom.",
  },
  {
    title: "Efficacy",
    description:
      "Creating products that are not just clean, but deliver visible results.",
  },
  {
    title: "Sustainability",
    description:
      "Committed to practices that protect our planet and empower local communities.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <MotionWrapper>
        <section className="bg-secondary/50 py-20 md:py-32">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">
              Our Story
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
              Belskora Essentials is more than a skincare brand—it's a
              celebration of Ghana's natural wealth and timeless beauty rituals.
            </p>
          </div>
        </section>
      </MotionWrapper>

      <MotionWrapper delay={0.2}>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/oils.jpg"
                  alt="oils"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="body oils"
                />
              </div>
              <div>
                <h2 className="text-3xl font-headline font-bold text-primary">
                  From Ghana, with Love
                </h2>
                <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
                  Founded on the principles of authenticity and purity, Belskora
                  Essentials began with a simple mission: to share the potent,
                  natural ingredients of Ghana with the world. Our founder,
                  inspired by the traditional skincare recipes passed down
                  through generations, saw the power in local botanicals like
                  shea, baobab, and moringa.
                </p>
                <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
                  We partner directly with local cooperatives, ensuring that our
                  ingredients are not only of the highest quality but also
                  ethically sourced, providing sustainable income for the
                  communities that cultivate them. Each product is a testament
                  to our land's rich biodiversity and our commitment to clean,
                  conscious beauty.
                </p>
              </div>
            </div>
          </div>
        </section>
      </MotionWrapper>

      <MotionWrapper>
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm"
                >
                  <CheckCircle className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-headline font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </MotionWrapper>
    </div>
  );
}
