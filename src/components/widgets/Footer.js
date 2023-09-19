import React from "react";
import classes from "./Footer.module.css";

import footerMoneky from "../../assets/footer.png";
import footer1 from "../../assets/footer1.svg";
import footer2 from "../../assets/footer2.svg";
import footer3 from "../../assets/footer3.svg";
import footer4 from "../../assets/footer4.svg";

function Footer() {
  const content1 = ["Marketplace", "Create", "Sell", "Collect", "Explore"];
  const content2 = ["Company", "Resources", "Team", "Community", "Blog"];
  const content3 = ["Help", "FAQ's", "Contact"];

  return (
    <footer>
      <div className={classes["footer-img"]}>
        <img src={footerMoneky} alt="Footer-Monkey" />
      </div>
      <div className={classes["footer-header"]}>
        <span>
          Create, Sell and
          <br />
          Collect NFT Digital Arts
        </span>
        <div className={classes["footer-icons"]}>
          <img src={footer4} alt="SVG4" />
          <img src={footer3} alt="SVG3" />
          <img src={footer1} alt="SVG1" />
          <img src={footer2} alt="SVG2" />
        </div>
      </div>
      <div className={classes["footer-content"]}>
        <div className={classes["footer-content-child"]}>
          {content1.map((data, index) => (
            <span
              style={{
                color: index === 0 ? "#FD82A0" : "white",
                marginBottom: "0.8rem",
              }}
            >
              {data}
            </span>
          ))}
        </div>
        <div className={classes["footer-content-child"]}>
          {content2.map((data, index) => (
            <span
              style={{
                color: index === 0 ? "#FD82A0" : "white",
                marginBottom: "0.8rem",
              }}
            >
              {data}
            </span>
          ))}
        </div>
        <div className={classes["footer-content-child"]}>
          {content3.map((data, index) => (
            <span
              style={{
                color: index === 0 ? "#FD82A0" : "white",
                marginBottom: "0.8rem",
              }}
            >
              {data}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
