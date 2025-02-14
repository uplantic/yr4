import React from "react";
import { Link } from "gatsby";

const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative bg-stone-900 md:h-[800px]">
      <div className="absolute inset-0 bg-cover bg-bottom bg-[url(../images/footer.jpg)]" />
      <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          {navigation.main.map((item) => (
            <Link key={item.name} to={item.href} className="text-stone-100 text-base hover:text-stone-400">
              {item.name}
            </Link>
          ))}
        </nav>
        <h1 className="mt-10 text-center text-lg/6 text-gun-metal">&copy; {new Date().getFullYear()} &middot; Asteroid 2024 YR4</h1>
      </div>
    </footer>
  );
};

export default Footer;
