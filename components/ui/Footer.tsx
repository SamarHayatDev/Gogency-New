import React from "react";

import Link from "next/link"; // Importing Link from next/link for client-side navigation

const Footer = () => {
  const resourcesLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  const solutionsLinks = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer>
      <div className="container mx-auto max-w-screen-lg px-4 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1: About */}
          <div className=" md:col-span-2">
            <h3 className="mb-4">Gogency</h3>
            <p className="mb-4 text-muted-foreground">
              Work management platform teams use to stay.
            </p>
          </div>
          {/* Column 2: Resource */}
          <div>
            <h3 className="mb-4">Resource</h3>
            <div>
              <div className="flex flex-col space-y-2 text-muted-foreground items-start justify-start">
                {resourcesLinks.map((link, index) => (
                  <div key={index}>
                    <Link href={link.href}>{link.label}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Column 3: Solutions */}
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
