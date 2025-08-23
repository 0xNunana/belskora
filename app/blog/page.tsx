import { MotionWrapper } from "@/components/motion-wrapper";
import { PenSquare } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="bg-background">
      <MotionWrapper>
        <section className="bg-secondary/50 py-20 md:py-32">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">
              The Belsk&oacute;ra Blog
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
              Skincare insights, ingredient spotlights, and stories from Ghana.
            </p>
          </div>
        </section>
      </MotionWrapper>

      <MotionWrapper delay={0.2}>
        <div className="container mx-auto px-4 py-24 md:py-32 text-center">
          <PenSquare className="mx-auto h-16 w-16 text-primary/50" />
          <h2 className="mt-8 text-3xl font-headline font-bold">Coming Soon</h2>
          <p className="mt-4 max-w-lg mx-auto text-muted-foreground">
            We are preparing something special for you. Our blog will be filled
            with expert advice, beauty routines, and the stories behind our
            natural ingredients. Please check back soon!
          </p>
        </div>
      </MotionWrapper>
    </div>
  );
}
