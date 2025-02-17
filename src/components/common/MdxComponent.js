import React from "react";

export const h1 = ({ children }) => <h1 className="font-serif text-4xl md:text-6xl">{children}</h1>;
export const h2 = ({ children }) => <h2 className="font-serif text-3xl md:text-5xl">{children}</h2>;
export const h3 = ({ children }) => <h3 className="font-serif text-2xl md:text-4xl">{children}</h3>;
export const h4 = ({ children }) => <h4 className="mt-8 font-serif text-xl md:text-3xl">{children}</h4>;
export const h5 = ({ children }) => <h5 className="font-serif text-lg md:text-xl">{children}</h5>;
export const h6 = ({ children }) => <h6 className="mb-2 text-base font-semibold">{children}</h6>;
export const p = ({ children }) => <p className="mt-6 mb-2 text-base leading-7 text-stone-200">{children}</p>;
export const ul = ({ children }) => <ul className="pl-4 mt-6 mb-6 list-disc">{children}</ul>;
export const ol = ({ children }) => <ol className="pl-4 mt-6 mb-6 list-decimal">{children}</ol>;
export const li = ({ children }) => <li className="mb-4 leading-relaxed">{children}</li>;
export const blockquote = ({ children }) => <blockquote className="pl-4 italic border-l-4 border-neutral-400">{children}</blockquote>;
