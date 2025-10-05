import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link href={"/"} className="font-headline text-xl  font-bold mb-4">
              Belsk&oacute;ra Essentials
            </Link>
            <p className="pt-2 text-sm">
              High-performance skincare products for radiant, youthful skin.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.instagram.com/belskora/"
                aria-label="Instagram"
                target="_blank"
              >
                {/* <Image
                  src="/instagram.svg"
                  width={20}
                  height={20}
                  alt="instagram"
                /> */}
                <FaInstagram size={20} />
              </Link>
              <Link
                target="_blank"
                href="https://www.tiktok.com/@belskoraessentials"
                aria-label="Tiktok"
              >
                <FaTiktok size={20} />
              </Link>
              <Link href="https://wa.me/233558692639" aria-label="Whatsapp">
                <FaWhatsapp size={20} />
              </Link>
            </div>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="transition-colors">
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
                <Link href="/about" className=" transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className=" transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="md:col-span-1">
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
          </div> */}
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm ">
          <p>
            &copy; {new Date().getFullYear()} Belsk&oacute;ra Essentials. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
