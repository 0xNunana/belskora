import { MotionWrapper } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <MotionWrapper>
        <section className="bg-secondary/50 py-20 md:py-32">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
              We'd love to hear from you. Whether you have a question, feedback,
              or just want to say hello.
            </p>
          </div>
        </section>
      </MotionWrapper>

      <MotionWrapper delay={0.2}>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <div className="bg-card p-8 rounded-lg shadow-sm border">
                <h2 className="text-2xl font-headline font-bold text-primary mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" type="text" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={6}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Submit
                  </Button>
                </form>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-headline font-semibold text-primary mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <Mail className="h-5 w-5 text-primary/70" />
                      <span>hello@belskora.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-5 w-5 text-primary/70" />
                      <span>+233 12 345 6789</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary/70 mt-1" />
                      <span>
                        123 Palm Street, <br />
                        Accra, Ghana
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-semibold text-primary mb-4">
                    Our Location
                  </h3>
                  <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-sm">
                    <Image
                      src="https://placehold.co/600x400.png"
                      alt="Map of Ghana"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      data-ai-hint="map ghana"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MotionWrapper>
    </div>
  );
}
