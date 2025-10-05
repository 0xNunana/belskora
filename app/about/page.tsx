import { MotionWrapper } from "@/components/motion-wrapper";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

// const values = [
//   {
//     title: "Purity",
//     description:
//       "We use only the finest, all-natural ingredients sourced ethically from Ghana.",
//   },
//   {
//     title: "Tradition",
//     description:
//       "Our formulas are inspired by generations of Ghanaian botanical wisdom.",
//   },
//   {
//     title: "Efficacy",
//     description:
//       "Creating products that are not just clean, but deliver visible results.",
//   },
//   {
//     title: "Science Backed",
//     description:
//       "Committed to practices that protect our planet and empower local communities.",
//   },
// ];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <MotionWrapper>
        <section className="bg-secondary/50 py-6 md:py-16">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-headline font-bold text-primary">
              Our Story
            </h1>
            <p className="mt-4 max-w-3xl mx-auto sm:text-lg md:text-xl text-foreground/80">
              Belsk&oacute;ra Essentials is more than a skincare brand—it's a
              celebration of Africa's natural wealth and timeless beauty
              rituals.
            </p>
          </div>
        </section>
      </MotionWrapper>

      <MotionWrapper delay={0.2}>
        <section className="py-6 md:py-12">
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
                <h2 className="text-2xl sm:text-3xl  font-headline font-bold text-primary">
                  From Ghana, with Love
                </h2>
                <p className="mt-4 md:text-lg text-foreground/80 leading-relaxed">
                  Catherine's journey into skincare was born out of a place of
                  vulnerability and frustration. Growing up, she struggled with
                  uneven skin tone and rough, bumpy skin and random skin flare
                  ups, which left her feeling self-conscious and hesitant to
                  showcase her skin. Despite trying numerous products that
                  promised remarkable results, she found herself disappointed
                  time and time again. The harsh ingredients and short-lived
                  benefits only worsen her skin concerns, leaving her feeling
                  exhausted from the endless trials and errors.
                </p>
                <p className="mt-4 md:text-lg text-foreground/80 leading-relaxed">
                  As she navigated her university days, Catherine's passion for
                  self-care and science converged, sparking a curiosity about
                  the underlying chemistry of skincare formulation. She became
                  determined to understand the intricacies of skin health and
                  develop effective, gentle solutions that would address the
                  complex needs of individuals like herself. Driven by her own
                  experiences and a desire to help others, Catherine embarked on
                  a journey to create safe, evidence-based skincare products
                  that would make a real difference in those who struggled with
                  skin complexities.
                </p>
                <p className="mt-4 md:text-lg text-foreground/80 leading-relaxed">
                  With a deep understanding of the emotional toll that skin
                  concerns can take, Catherine's approach to skincare is rooted
                  in empathy and a commitment to scientific excellence. Her
                  mission is to empower individuals to take control of their
                  skin health, providing them with the knowledge and tools
                  necessary to achieve radiant, healthy skin that reflects their
                  inner beauty. Through her work, Catherine aims to break down
                  the barriers that often accompany skin concerns, replacing
                  frustration and self-doubt with confidence and self-love.
                </p>
              </div>
            </div>
          </div>
        </section>
      </MotionWrapper>
      <MotionWrapper>
        <section className=" py-6 md:py-12 ">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-primary mb-6 md:mb-12">
              BRAND PHILOSOPHY
            </h2>

            <p className="mt-4 md:text-lg text-foreground/80 leading-relaxed">
              At Belskóra Essentials, our vision is to redefine the beauty
              landscape by harnessing the potent synergy of Africa's rich
              botanical heritage and cutting-edge scientific innovations. We aim
              to craft a global beauty brand that not only celebrates the
              continent's diverse flora but also leverages its remarkable
              potential to create transformative, multitasking skincare
              solutions.
            </p>
            <p className="mt-4 md:text-lg text-foreground/80 leading-relaxed">
              Our mission is to empower individuals to achieve optimal skin
              health and radiance through convenient, effective, and sustainable
              products that address a multitude of skin concerns. By combining
              the wisdom of traditional African botanicals with modern
              scientific expertise, we develop formulas that:
            </p>
            <ul className="mt-4 md:text-lg text-foreground/80 leading-relaxed pl-5">
              <li>
                1. <b>Maintain skin barrier function:</b> Protecting the skin's
                natural defenses and promoting resilience against environmental
                stressors.
              </li>
              <li>
                2. <b>Slow down skin aging:</b> Reducing the visible signs of
                aging, such as fine lines, wrinkles, and age spots, to reveal a
                smoother, more youthful complexion.
              </li>
              <li>
                3. <b>Promote a healthier, more radiant complexion:</b>{" "}
                Enhancing skin's natural glow and promoting a balanced,
                even-toned complexion.
              </li>
            </ul>
            <p className="mt-4 md:text-lg text-foreground/80 leading-relaxed">
              Our products are designed to simplify skincare routines, providing
              busy individuals with effective, easy-to-use solutions that
              deliver remarkable results. By fusing traditional knowledge with
              modern science, Belskóra Essentials is committed to redefining the
              beauty standards and promoting a more inclusive, diverse, and
              sustainable approach to skincare. Join us on this journey to
              unlock the secrets of Africa's botanical treasures and discover a
              more radiant, healthier you.
            </p>
          </div>
        </section>
      </MotionWrapper>
      <MotionWrapper>
        <section className=" py-6 md:py-12 ">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-primary mb-6 md:mb-12">
              WHY WE DO WHAT WE DO
            </h2>

            <p className="mt-4 md:text-lg text-foreground/80 leading-relaxed">
              As the body's largest organ, the skin serves as a vital barrier
              that shields our internal systems from the external environment,
              making it crucial to prioritize its health and well-being.
              Effective skincare is not merely a matter of aesthetics; it is an
              investment in our overall wellness. At Belskóra Essentials, we
              understand the intricate dynamics of skin health and offer a
              curated selection of products and expert guidance tailored to
              address the unique needs of your skin at every stage. Whether
              you're navigating the challenges of acne, hyperpigmentation, or
              sensitivity, our comprehensive approach empowers you with the
              knowledge and resources necessary to make informed decisions about
              your skincare regimen. By combining premium products with
              evidence-based advice, we facilitate a profound understanding of
              skin health, enabling you to unlock your skin's full potential and
              radiate confidence in your own skin, every day. With Belskóra
              Essentials, you're not just caring for your skin; you're investing
              in your well-being and embracing a lifestyle of self-love and
              self-care.
            </p>
          </div>
        </section>
      </MotionWrapper>
    </div>
  );
}
