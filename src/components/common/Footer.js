import React from "react";

const footernav = {
  services: [
    {
      name: "Recherchen",
      href: "/recherchen",
    },
    {
      name: "Problemlösung",
      href: "/problemloesung",
    },
    {
      name: "Forderungseinzug",
      href: "/forderungseinzug",
    },
    {
      name: "Geldeintreibung",
      href: "/geldeintreibung",
    },
    {
      name: "Internationales Inkasso",
      href: "/internationales-inkasso",
    },
    {
      name: "Observierung",
      href: "/observierung",
    },
    {
      name: "Privatermittlung",
      href: "/privatermittlung",
    },
    {
      name: "Schuldeneintreibung",
      href: "/schuldeneintreibung",
    },
    {
      name: "Begleitschutz",
      href: "/begleitschutz",
    },
  ],

  legal: [
    { name: "facebook", href: "https://www.facebook.com/MOSKAU-INKASSO-125174227558512/" },
    { name: "WhatsApp", href: "https://wa.me/34610986272" },
    { name: "Kontakt", href: "/" },
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "EU-Urkunde", href: "/press/EU-Urkunde.jpg" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">FOOTER</div>
    </footer>
  );
};

export default Footer;
