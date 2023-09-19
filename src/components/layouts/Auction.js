import React, { useEffect, useState } from "react";
import classes from "./Auction.module.css";

import smallMonkey from "../../assets/auction-small.png";
import yellowMonkey from "../../assets/auction-yellow.png";
import purpleMonkey from "../../assets/auction-purple.png";

function Auction() {
  const [focusedItem, setFocusedItem] = useState(0);
  const [unFocusedItem1, setUnFocusedItem1] = useState(1);
  const [unFocusedItem2, setUnFocusedItem2] = useState(2);

  const data = [
    {
      id: 0,
      name: "Jwelly_Ape",
      tag: "0935",
      creator: "Kayne West",
      currentBid: "0.14ETH",
      endsIn: "00:10:55",
      img: smallMonkey,
      bgColor: "#74977b",
    },
    {
      id: 1,
      name: "Bright_Ape",
      tag: "3589",
      creator: "Alex Carrey",
      currentBid: "0.27ETH",
      endsIn: "10:12:07",
      img: yellowMonkey,
      bgColor: "#f0b613",
    },
    {
      id: 2,
      name: "Strong_Ape",
      tag: "6698",
      creator: "Novah James",
      currentBid: "0.58ETH",
      endsIn: "20:10:55",
      img: purpleMonkey,
      bgColor: "#8f13f0",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFocusedItem((prevIndex) => (prevIndex + 1) % data.length);
      setUnFocusedItem1((prevIndex) => (prevIndex + 1) % data.length);
      setUnFocusedItem2((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={classes["auction"]}>
      <div className={classes["auction-left"]}>
        <div className={classes["auc-left-stack"]}>
          <div
            className={classes["auc-left-stack-top"]}
            style={{ backgroundColor: data[unFocusedItem1].bgColor }}
          >
            <img src={data[unFocusedItem1].img} alt="Left-Small-Monkey" />
          </div>
          <div
            className={classes["auc-left-stack-bottom"]}
            style={{ backgroundColor: data[unFocusedItem2].bgColor }}
          >
            <img src={data[unFocusedItem2].img} alt="Left-Yellow-Monkey" />
          </div>
        </div>
        <div
          className={classes["auc-left-focused"]}
          style={{ backgroundColor: data[focusedItem].bgColor }}
        >
          <img src={data[focusedItem].img} alt="Right-Purple-Monkey" />
        </div>
      </div>
      <div className={classes["auction-right"]}>
        <div className={classes["auc-right-header"]}>
          <div className={classes["auc-header-dash"]} />
          <span>Live Auction</span>
        </div>
        <div className={classes["auc-right-content"]}>
          <div style={{ marginBottom: "1rem" }}>
            <span className={classes["auc-content-title"]}>
              {data[focusedItem].name}
            </span>
            <span className={classes["auc-content-number"]}>
              #{data[focusedItem].tag}
            </span>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <div className={classes["auc-content-attr"]}>
                <TitleText title="Creator" text={data[focusedItem].creator} />
                <TitleText
                  title="Current Bid"
                  text={data[focusedItem].currentBid}
                />
              </div>

              <div className={classes["auc-content-attr"]}>
                <TitleText title="Collection" text="Ape Creations" />
                <TitleText title="Ends In" text={data[focusedItem].endsIn} />
              </div>
            </div>

            <button className={classes["auc-content-btn"]}>Place Bid</button>

            <div className={classes["auc-content-dots"]}>
              {data.map((_, index) => (
                <div
                  style={{
                    backgroundColor:
                      index === focusedItem ? "#cc0032" : "#2f2e2e",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleText(props) {
  return (
    <div className={classes["tt"]}>
      <span className={classes["tt-title"]}>{props.title}</span>
      <span className={classes["tt-text"]}>{props.text}</span>
    </div>
  );
}

export default Auction;
