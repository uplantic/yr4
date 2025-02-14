"use client";
import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  let timeoutRef = useRef(null);

  return [
    ["Home", "/"],
    ["News", "/#reviews"],
    ["Shop", "/#shop"],
    ["FAQs", "/#faqs"],
  ].map(([label, href], index) => (
    <Link
      key={label}
      to={href}
      className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-lg text-stone-100 transition-colors delay-150 hover:text-gun-metal-3 hover:delay-0"
      onMouseEnter={() => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current);
        }
        setHoveredIndex(index);
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => {
          setHoveredIndex(null);
        }, 200);
      }}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-stone-900"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ));
}
