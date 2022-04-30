import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../header";
import Footer from "../footer";

const layoutStyle = {
  width: "100%",
  height: "fit",
  display: "flex",
  flexDirection: "column",
};

function Layout() {
  return (
    <div style={layoutStyle}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
