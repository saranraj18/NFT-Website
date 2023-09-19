import React from "react";
import classes from "./PopularCollections.module.css";
import { POP_COLLECTION_DATA } from "../../constants/PopularCollectionConst";

function PopularCollections() {
  return (
    <div className={classes["pop"]}>
      <div className={classes["pop-header"]}>
        <span className={classes["pop-title"]}>
          Get Popular Collections Here
        </span>
        <span className={classes["pop-subtitle"]}>More Collections</span>
      </div>
      <div className={classes["pop-content"]}>
        {POP_COLLECTION_DATA.map((data) => (
          <CollectionCard
            im1={data[0]}
            im2={data[1]}
            im3={data[2]}
            im4={data[3]}
          />
        ))}
      </div>
    </div>
  );
}

function CollectionCard(props) {
  return (
    <div className={classes["col"]}>
      <div className={classes["col-header"]}>
        <div className={classes["col-header-img"]}>
          <img src={props.im1} alt="Image1" />
        </div>
        <div className={classes["col-header-title"]}>
          <span>Bored_ape #23</span>
          <span style={{ fontSize: "0.8rem", fontWeight: "300" }}>@ Noah</span>
        </div>
      </div>
      <div className={classes["col-content"]}>
        <img
          className={classes["col-content-rect"]}
          src={props.im2}
          alt="Image2"
        />
        <div className={classes["col-content-small"]}>
          <img src={props.im3} alt="Image3" />
          <img src={props.im4} alt="Image4" />
        </div>
      </div>
    </div>
  );
}

export default PopularCollections;
