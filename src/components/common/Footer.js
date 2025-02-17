import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Shop", href: "#" },
    { name: "Faqs", href: "/#faqs" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative bg-stone-900 md:h-[800px]">
      <StaticImage src="../../images/footer.jpg" alt="" layout="fullWidth" placeholder="blurred" className="object-cover object-bottom" />
      <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          {navigation.main.map((item) => (
            <Link key={item.name} to={item.href} className="text-stone-100 text-base hover:text-stone-400">
              {item.name}
            </Link>
          ))}
        </nav>
        <h1 className="mt-10 text-center text-lg/6 text-gun-metal-1">&copy; {new Date().getFullYear()} &middot; Asteroid 2024 YR4</h1>
      </div>
    </footer>
  );
};

export default Footer;
