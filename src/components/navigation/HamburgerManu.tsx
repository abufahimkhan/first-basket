"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HamburgerMenu: React.FC = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className="mt-4 space-y-4">
              <nav>
                <ul className="space-y-2 text-sm">
                  {[
                    "About",
                    "Careers",
                    "History",
                    "Services",
                    "Projects",
                    "Blog",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-gray-800"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="pt-4 border-t border-gray-200">
                <ul className="space-y-2 text-sm">
                  {["My profile", "Billing summary", "Team settings"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="block text-gray-600 hover:text-gray-800"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                  <li>
                    <button className="w-full text-left text-red-600 hover:underline">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HamburgerMenu;
