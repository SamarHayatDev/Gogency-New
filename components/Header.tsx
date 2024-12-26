// "use client";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";
// import React from "react";
// import { ModeToggle } from "./ModeToggler";
// import Link from "next/link";
// import { Button } from "./ui/button";

// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const navLinks = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Pricing", path: "/pricing" },
//   { label: "Contact", path: "/contact" },
// ];
// const SHEET_SIDES = ["left"] as const;

// type SheetSide = (typeof SHEET_SIDES)[number];
// const Header = () => {
//   return (
//     <header className="flex items-center justify-between container mx-auto max-w-screen-lg p-4 pt-7">
//       <div className="flex items-center space-x-4">
//         <Sheet>
//           <SheetTrigger>Open</SheetTrigger>
//           <SheetContent side={SHEET_SIDES} className="w-[400px] sm:w-[540px]">
//             <SheetHeader>
//               <SheetTitle>Menu</SheetTitle>
//               <SheetDescription>
//                 <NavigationMenu>
//                   <NavigationMenuList className=" space-x-2 hidden md:flex">
//                     {navLinks.map(({ label, path }) => (
//                       <NavigationMenuItem
//                         key={path}
//                         className="hover:bg-slate-800/10 dark:hover:bg-gray-100/10 px-3 py-2 rounded-sm"
//                       >
//                         <Link href={path} passHref legacyBehavior>
//                           <NavigationMenuLink>{label}</NavigationMenuLink>
//                         </Link>
//                       </NavigationMenuItem>
//                     ))}
//                   </NavigationMenuList>
//                 </NavigationMenu>
//               </SheetDescription>
//             </SheetHeader>
//           </SheetContent>
//         </Sheet>
//         <h3 className="text-lg font-bold">Gogency</h3>
//         <NavigationMenu>
//           <NavigationMenuList className=" space-x-2 hidden md:flex">
//             {navLinks.map(({ label, path }) => (
//               <NavigationMenuItem
//                 key={path}
//                 className="hover:bg-slate-800/10 dark:hover:bg-gray-100/10 px-3 py-2 rounded-sm"
//               >
//                 <Link href={path} passHref legacyBehavior>
//                   <NavigationMenuLink>{label}</NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//             ))}
//           </NavigationMenuList>
//         </NavigationMenu>
//       </div>
//       <div className="flex items-center space-x-4">
//         <ModeToggle />
//         <Button>Get Started</Button>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";
import { ModeToggle } from "./ModeToggler";
import Link from "next/link";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetClose,
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
  return (
    <header className="flex items-center justify-between container mx-auto max-w-screen-lg p-4 pt-7">
      <div className="flex items-center space-x-4">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full">
              <SheetHeader>
                <SheetTitle className="px-3">Menu</SheetTitle>
              </SheetHeader>
              <div className="w-full mt-4">
                <div className="flex gap-2 flex-col w-full ">
                  {navLinks.map(({ label, path }) => (
                    <div key={path} className="w-full ">
                      <SheetClose asChild>
                        <Link href={path} passHref legacyBehavior>
                          <div className="hover:bg-slate-800/10 block dark:hover:bg-gray-100/10 px-3 py-2 rounded-sm">
                            {label}
                          </div>
                        </Link>
                      </SheetClose>
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
