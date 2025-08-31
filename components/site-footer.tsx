import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-headline text-xl font-bold mb-4">
              Belsk&oacute;ra Essentials
            </h3>
            <p className="text-muted-foreground text-sm">
              Premium natural cosmetics from the heart of Ghana.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Instagram">
                <Image
                  src="/instagram.svg"
                  width={20}
                  height={20}
                  alt="instagram"
                />
              </Link>
              <Link href="#" aria-label="Tiktok">
                <Image src="/tiktok.svg" width={20} height={20} alt="tiktok" />
              </Link>
              <Link href="#" aria-label="Whatsapp">
                <Image
                  src="/whatsapp.svg"
                  width={20}
                  height={20}
                  alt="whatsapp"
                />
              </Link>
            </div>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/shop"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  All Products
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Body Oils
                </Link>
              </li>
             
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Scrubs
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-2">
              Stay up to date with our latest news and offers.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Belsk&oacute;ra Essentials. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
