import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <nav>
      <div className={classes["nav-start"]}>
        <span>NFT</span>
      </div>
      <div className={classes["nav-mid"]}>
        <span>Home</span>
        <span>Create</span>
        <span>Explore</span>
        <span>Marketplace</span>
        <span>Support</span>
      </div>
      <div className={classes["nav-end"]}>Get in Touch</div>
    </nav>
  );
}

export default Header;
