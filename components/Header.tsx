"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggler";
import Link from "next/link";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between container mx-auto max-w-screen-lg p-4 pt-7">
      <div className="flex items-center space-x-4">
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" onClick={() => setIsOpen(true)}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full">
              <SheetHeader>
                <SheetTitle className="px-3">Menu</SheetTitle>
              </SheetHeader>
              <div className="w-full mt-4">
                <div className="flex gap-2 flex-col w-full">
                  {navLinks.map(({ label, path }) => (
                    <div key={path} className="w-full">
                      <Link href={path} passHref legacyBehavior>
                        <div
                          className="hover:bg-slate-800/10 block dark:hover:bg-gray-100/10 px-3 py-2 rounded-sm"
                          onClick={handleClose}
                        >
                          {label}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <h3 className="text-lg font-bold">Gogency</h3>

        {/* Secondary Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="space-x-2 hidden md:flex">
            {navLinks.map(({ label, path }) => (
              <NavigationMenuItem key={path}>
                <Link href={path} passHref legacyBehavior>
                  <NavigationMenuLink className="hover:bg-slate-800/10 dark:hover:bg-gray-100/10 px-3 py-2 rounded-sm">
                    {label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right side controls */}
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <Button>Get Started</Button>
      </div>
    </header>
  );
};

export default Header;
