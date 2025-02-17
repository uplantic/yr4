"use client";

import React from "react";
import { Link } from "gatsby";
import { Popover, PopoverButton, PopoverBackdrop, PopoverPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "./Button";
import Container from "./Container";
import { NavLinks } from "./NavLinks";
import { StaticImage } from "gatsby-plugin-image";

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 6h14M5 18h14M5 12h14" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M17 14l-5-5-5 5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MobileNavLink(props) {
  return <PopoverButton as={Link} className="block text-base/7 tracking-tight text-gray-700" {...props} />;
}

const Header = () => {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-5">
            <Link to="/" aria-label="Logo">
              <StaticImage src="../../images/icon.png" alt="Logo" className="h-10 w-10" />
            </Link>
            <Link to="/" aria-label="Logo">
              <h1 className="text-gun-metal-4 font-sans text-xl md:text-3xl">Asteroid 2024 YR4</h1>
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-10 lg:ml-auto">
            <NavLinks />
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-100 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 focus:not-data-focus:outline-hidden active:stroke-gray-900"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) => (open ? <ChevronUpIcon className="h-6 w-6 stroke-gray-900" /> : <MenuIcon className="h-6 w-6" />)}
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop static as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur-sm" />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pt-32 pb-6 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/#features">Features</MobileNavLink>
                            <MobileNavLink href="/#reviews">Reviews</MobileNavLink>
                            <MobileNavLink href="/#pricing">Pricing</MobileNavLink>
                            <MobileNavLink href="/#faqs">FAQs</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button variant="outline">Log in</Button>
                            <Button>Download the app</Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
