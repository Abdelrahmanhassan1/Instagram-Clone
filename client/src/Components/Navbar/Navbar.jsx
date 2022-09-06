import React from "react";
import CSSModule from "./navbar.module.css";

function Navbar() {
  return (
    <div className={CSSModule.navbar}>
      <div className={CSSModule.navbar__logo}>
        <img
          src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-design-website-logo-design-0.png"
          alt="logo"
        />
      </div>
      <div className={CSSModule.search_box}></div>
      <div className={CSSModule.navbar_links}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
