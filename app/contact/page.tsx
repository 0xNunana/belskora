"use client";

import { MotionWrapper } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e: any) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background">
      <MotionWrapper>
        <section className="bg-secondary/50 py-12 md:py-24">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-headline font-bold text-primary">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl mx-auto sm:text-lg md:text-xl text-foreground/80">
              We'd love to hear from you. Whether you have a question, feedback,
              or just want to say hello.
            </p>
          </div>
        </section>
      </MotionWrapper>

      <MotionWrapper delay={0.2}>
        <section className="sm:py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm border">
                <h2 className="text-xl md:text-2xl font-headline font-bold text-primary mb-6">
                  Send us a Message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 "
                  style={{ minHeight: 420 }}
                >
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold py-2 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                  {success && (
                    <div className="text-green-700 bg-green-100 rounded p-2 text-center">
                      Thank you! Your message has been sent.
                    </div>
                  )}
                  {error && (
                    <div className="text-red-700 bg-red-100 rounded p-2 text-center">
                      {error}
                    </div>
                  )}
                </form>
              </div>
              <div className="space-y-8">
                <div className="mb-8">
                  <h3 className="text-xl font-headline font-semibold text-primary mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <Link
                      href="mailto:belskoraessential@gmail.com"
                      target="_blank"
                      className="flex items-center gap-4"
                    >
                      <Mail className="h-5 w-5 text-primary/70" />
                      <span>belskoraessential@gmail.com</span>
                    </Link>

                    <Link
                      className="flex items-center gap-4"
                      href="tel:+233558692639"
                    >
                      <Phone className="h-5 w-5 text-primary/70" />
                      <span>+233558692639</span>
                    </Link>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary/70 mt-1" />
                      <span>
                        123 Palm Street, <br />
                        Accra, Ghana
                      </span>
                    </div>
                  </div>
                </div>
                {/* <div>
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
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </MotionWrapper>
    </div>
  );
}
