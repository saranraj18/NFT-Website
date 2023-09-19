import React from "react";
import classes from "./Trending.module.css";

import tr1 from "../../assets/trending/tr1.png";
import tr2 from "../../assets/trending/tr2.png";
import tr3 from "../../assets/trending/tr3.png";
import tr4 from "../../assets/trending/tr4.png";
import tr5 from "../../assets/trending/tr5.png";

function Trending() {
  return (
    <div className={classes["trend"]}>
      <div className={classes["trend-header"]}>
        <span style={{ fontSize: "1.5rem" }}>Trending NFT's</span>
        <span>View all</span>
      </div>
      <div className={classes["trend-content"]}>
        <TrendingCard img={tr1} />
        <TrendingCard img={tr2} />
        <TrendingCard img={tr3} />
        <TrendingCard img={tr4} />
        <TrendingCard img={tr5} />
      </div>
    </div>
  );
}

function TrendingCard(props) {
  return (
    <div className={classes["trend-card"]}>
      <div className={classes["trend-card-img"]}>
        <img src={props.img} alt="TrendingNFT" />
      </div>
      <div className={classes["trend-card-title"]}>
        <span>Bling Bits</span>
        <span>34.8ETH</span>
      </div>
      <div className={classes["trend-card-subtitle"]}>
        <span>Nova Auroras</span>
        <span>#8723</span>
      </div>
    </div>
  );
}

export default Trending;
