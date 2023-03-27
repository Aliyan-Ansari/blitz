import React from "react";
import classes from "./DetailSection.module.css";
const DetailSection = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.mainContent}>
        <span className={classes.heading}>Your personal gaming coach</span>
        <p className={classes.info}>
          portal.io simplifies the process of mastering difficult games, helping
          you improve at every step of your journey to the top.
        </p>
        <div className={classes.actions}>
          {/* <a className={`${classes.downloadAction}`}>Download Blitz</a> */}
          <a className={`${classes.signup}`} title="Windows 64-bit">
            Sign Up Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
