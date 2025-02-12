import * as React from "react";

import Header from "./common/Header";
import Footer from "./common/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
