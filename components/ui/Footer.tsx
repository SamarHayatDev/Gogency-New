import React from "react";

import Link from "next/link"; // Importing Link from next/link for client-side navigation
import { MailPlus, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  // const resourcesLinks = [
  //   { href: "/", label: "Home" },
  //   { href: "/about", label: "About" },
  //   { href: "/pricing", label: "Pricing" },
  //   { href: "/contact", label: "Contact" },
  // ];

  const solutionsLinks = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer>
      <div className="container mx-auto max-w-screen-lg px-4 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-muted-foreground py-8">
          <div className="">
            <Link
              href="/"
              className="flex items-center space-x-2 mb-4 cursor-pointer"
            >
              <Image
                src="/GogencyLogo.svg"
                alt="Logo Gogency"
                width={25}
                height={25}
              />{" "}
              <h3 className="text-lg font-bold">Gogency</h3>
            </Link>
            <p className="mb-4 text-muted-foreground">
              Work management platform teams use to stay.
            </p>
          </div>

          {/* Column 4: Company Info */}
          <div>
            <h3 className="mb-4">Solutions</h3>
            <div>
              <div className="flex flex-col space-y-2 text-muted-foreground items-start justify-start">
                {solutionsLinks.map((link, index) => (
                  <div key={index}>
                    <Link href={link.href}>{link.label}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Column 4: Company Info */}
          <div>
            <h3 className="mb-4">Solutions</h3>
            <div>
              <div className="flex flex-col space-y-2 text-muted-foreground items-start justify-start">
                {solutionsLinks.map((link, index) => (
                  <div key={index}>
                    <Link href={link.href}>{link.label}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Column 4: Company Info */}
          <div>
            <h3 className="mb-4">Company Info</h3>
            <div className="flex flex-col space-y-2 text-muted-foreground items-start justify-start">
              <div className="flex items-center justify-start gap-2 text-muted-foreground ">
                <div className="bg-primary text-primary-foreground p-2 rounded-full">
                  <MailPlus size={20} />
                </div>
                <div className="text-muted-foreground">hello@gogency.com</div>
              </div>
              <div className="flex items-start justify-start gap-2 text-muted-foreground ">
                <div className="bg-primary text-primary-foreground p-2 rounded-full">
                  <MapPin size={20} />
                </div>
                <div className="text-muted-foreground">
                  86 North Street Office 23, The Tube Business Centre,
                  Manchester, United Kingdom, M8 8RA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
