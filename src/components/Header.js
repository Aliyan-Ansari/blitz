import React, { useState } from "react";
import classes from "./Header.module.css";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillWindows } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };
  return (
    <div className={classes.header}>
      <div className={classes.actions}>
        <a className={`${classes.headerButton} ${classes.signIn}`}>
          <BsPersonCircle style={{ marginRight: 10 }} /> Sign In
        </a>
        {/* <a className={Object.assign(classes.headerButton, classes.window)}> */}
        <a
          className={`${classes.headerButton} ${classes.window}`}
          title="Windows 64-bit"
        >
          <AiFillWindows style={{ marginRight: 10 }} /> Download
        </a>
      </div>
      <div style={{ margin: "5px 10px", padding: "5px", position: "relative" }}>
        <FaSearch
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "20px",
            fontSize: 18,
            marginRight: 10,
            color: isActive ? "hsl(222deg, 5%, 62%)" : "hsla(222deg, 5%, 62%)",
          }}
        />
        <input
          type="text"
          style={{
            paddingLeft: "45px",
            borderRadius: "5px",
            backgroundColor: isActive
              ? "hsl(0, 0%, 100%)"
              : "hsl(222, 10%, 17%)",
            color: isActive ? "hsl(222deg, 5%, 62%)" : "hsla(222deg, 5%, 62%)",
            width: "584px",
            height: "56px",
            border: "none",
            outline: "none",
            fontSize: 18,
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search profiles, champions, agents, legends, and more!"
        />
      </div>
    </div>
  );
};

export default Header;
