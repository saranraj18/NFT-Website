import classes from "./Home.module.css";
import dots from "../../assets/dots.svg";
import yellowMoneky from "../../assets/yellow-monkey.png";
import violetMonkey from "../../assets/grey-monkey.png";
import blueMonkey from "../../assets/blue-monkey.png";
import watchCollection from "../../assets/watch-collection.svg";

import React from "react";
import PopularCollections from "../layouts/PopularCollections";
import Auction from "../layouts/Auction";
import Trending from "../layouts/Trending";

export default function Home() {
  return (
    <main className={classes["home"]}>
      <div className={classes["home-main"]}>
        <span>Discover rare collections of Art & NFT</span>
        <p>
          A unique digital identifier that cannot be copied, substituted, or
          subdivided, that is recorded in a blockchain, and that is used to
          certify ownership and authenticity
        </p>
        <div className={classes["home-main-btns"]}>
          <div className={classes["home-main-btn1"]}>Create</div>
          <div className={classes["home-main-btn2"]}>Explore</div>
        </div>
      </div>
      <img className={classes["home-dot1"]} src={dots} alt="dots" />
      <img className={classes["home-dot2"]} src={dots} alt="dots" />
      <div className={classes["home-illu-yellow"]}>
        <img src={yellowMoneky} alt="yellow-monkey" />
      </div>
      <div className={classes["home-illu-violet"]}>
        <img src={violetMonkey} alt="violet-monkey" />
      </div>
      <div className={classes["home-illu-watch"]}>
        <img src={watchCollection} alt="watch-collection" />
        <p>
          Discover remarkable MFT content showcased for your different products
        </p>
      </div>
      <img
        className={classes["home-blue-monkey"]}
        src={blueMonkey}
        alt="dots"
      />
      <div className={classes["home-values"]}>
        <div>
          <span className={classes["home-values-title"]}>2.5k +</span>
          <span className={classes["home-values-subtitle"]}>Collections</span>
        </div>
        <div>
          <span className={classes["home-values-title"]}>250k +</span>
          <span className={classes["home-values-subtitle"]}>Artists</span>
        </div>
        <div>
          <span className={classes["home-values-title"]}>3.7k +</span>
          <span className={classes["home-values-subtitle"]}>Art Works</span>
        </div>
      </div>
      <PopularCollections />
      <Auction />
      <Trending />
      <div className={classes["home-sub"]}>
        <span className={classes["home-sub-title"]}>
          Subscribe for our Latest Updates
        </span>
        <span className={classes["home-sub-subtitle"]}>
          Get the Exciting and latest updates from us
        </span>
        <input type="email" placeholder="Enter Email ID" />
      </div>
    </main>
  );
}
