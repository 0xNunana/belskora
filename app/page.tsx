import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/product-card";
import { featuredProducts, products, values } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { MotionWrapper } from "@/components/motion-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[50vh]  md:h-[60vh] lg:h-[100vh] bg-secondary/50">
        <Image
          src="/background.png"
          alt="Belsk&oacute;ra Essentials hero background"
          layout="fill"
          objectFit="cover"
          data-ai-hint="abstract background"
        />
        <Image
          src="/background.png"
          alt="Belsk&oacute;ra Essentials hero background"
          width={200}
          height={500}
          className="w-full h-full md:block"
          data-ai-hint="abstract background"
        />
        <div className=" mx-auto h-full flex justify-center    absolute inset-0  bottom-1/2 bg-black/20  items-center text-center z-10 px-4">
          <div className="">
            <MotionWrapper>
              <h1 className="text-3xl text-white md:text-7xl lg:text-9xl font-headline font-bold  tracking-tight">
                Nourish. Balance. Radiant.
              </h1>
            </MotionWrapper>
            <MotionWrapper delay={0.2}>
              {/* <p className="mt-2 md:mt-4 mx-auto md:max-w-2xl text-lg text-center md:text-2xl text-white/90 leading-tight md:leading-none  font-medium">
                Discover the essence of beauty with our premium, all-natural
                cosmetic products.
              </p> */}
              <p className="mt-2 md:mt-4 mx-auto md:max-w-2xl text-lg text-center md:text-2xl text-white/90 leading-tight md:leading-none  font-medium">
                Elevate your glow with our high performance botanical and
                science backed skincare.
              </p>
            </MotionWrapper>
            <MotionWrapper delay={0.4}>
              <div className="mt-2 md:mt-8 flex gap-4 w-full  pt-2 md:pt-6 justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="text-sm md:text-xl font-bold "
                >
                  <Link href="/about" className="md:my-2">
                    Our Story
                  </Link>
                </Button>
                <Button asChild className=" text-sm md:text-xl font-bold ">
                  <Link href="/shop" className="md:my-2">
                    Shop Collection
                  </Link>
                </Button>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionWrapper className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/hero.jpg"
                alt="Brand story"
                height={600}
                width={600}
                className="w-full h-full object-cover"
                // layout="fill"
                // objectFit="cover"
                data-ai-hint="natural ingredients"
              />
            </MotionWrapper>
            <div className="text-left">
              <MotionWrapper>
                <h2 className="text-2xl sm:text-3xl md:text-4xl   font-headline font-bold text-primary">
                  Rooted in Nature, Crafted with Science
                </h2>
              </MotionWrapper>
              <MotionWrapper delay={0.2}>
                <p className="mt-4 md:text-lg  text-foreground/80">
                  Belsk&oacute;ra Essentials was born from a passion for
                  Africa's rich botanical heritage. We blend traditional wisdom
                  with modern science to create skincare that is both effective
                  and kind to your skin and the environment.
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
      <MotionWrapper>
        <section className="bg-secondary/50 sm:py-16 md:py-24">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-primary mb-6 md:mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 md:p-6 bg-primary  text-white rounded-lg shadow-sm"
                >
                  <CheckCircle className="w-8 h-8 md:w-12 md:h-12  mb-4 text-white" />
                  <h3 className="md:text-xl font-headline font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base mt-2 text-white ">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </MotionWrapper>

      <section className="sm:py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-primary">
              Featured Products
            </h2>
            <p className="mt-2 md:text-lg text-foreground/80 max-w-xl mx-auto">
              Handpicked favorites from our collection, loved by our community.
            </p>
          </MotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <MotionWrapper key={product.id}>
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
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <MotionWrapper className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-primary">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </MotionWrapper>

          <MotionWrapper className="text-center mt-12">
            <Accordion
              type="single"
              collapsible
              className="w-full no-underline"
            >
              <AccordionItem value="1">
                <AccordionTrigger>
                  How Do I Know If My Order Was Successful?
                </AccordionTrigger>
                <AccordionContent>
                  You will get an email or sms saying “Your order is
                  successful”. This means your order has been received.
                  {/* Please
                  know that you will get another email that contains your
                  tracking number once your order has been shipped */}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="2">
                <AccordionTrigger>
                  When Will My Order Be Delivered?
                </AccordionTrigger>
                <AccordionContent>
                  Your package’s delivery date is based on your shipping
                  information. Please note that all packages are processed for
                  shipment the next business day.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="3">
                <AccordionTrigger>
                  What If I Don't Get My Order In Time Or It Gets Lost?
                </AccordionTrigger>
                <AccordionContent>
                  In the unlikely event that this happens, kindly contact us
                  within 24 hours of when your package ought to have arrived
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="4">
                <AccordionTrigger>
                  Can I return or get a refund on an order ?
                </AccordionTrigger>
                <AccordionContent>
                  Please note that we accept returns for exchanges if the items
                  are sealed and packaged as you purchased but WE DO NOT OFFER
                  REFUNDS
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="5">
                <AccordionTrigger>
                  Do you ship internationally?
                </AccordionTrigger>
                <AccordionContent>
                  We ship across nations through courier services provided you’d
                  bare the costs and be patient with your order.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </MotionWrapper>
        </div>
      </section>

      <section className="mb-6">
        <div className="container mx-auto p-4 ">
          <MotionWrapper className="text-center ">
            {/* Left side - image */}
            <div className="w-full relative border border-gray-200 rounded-xl  bg-primary">
              <img
                src="/edit2.png"
                alt="Three beautiful Black women representing Belskora Essentials"
                className="object-cover rounded-2xl"
              />{" "}
              <div className="absolute top-1/2 right-2 md:right-5 transform -translate-y-1/2">
                <h1 className="sm:text-3xl md:text-5xl font-semibold text-white leading-tight w-[230px] md:w-full">
                  Overwhelmed with skincare?
                </h1>
                <h1 className="text-sm sm:text-xl md:text-3xl text-white/90 leading-tight w-[200px] md:w-full">
                  Us too. It&apos;s why Belskora Essentials began.
                </h1>
              </div>
            </div>

            {/* Right side - text */}
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
}
