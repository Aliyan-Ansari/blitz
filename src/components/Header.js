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
      <div></div>
      <div style={{ margin: "5px 10px", padding: "5px", position: "relative" }}>
        <FaSearch
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "14px",
            color: isActive ? "hsl(222deg, 5%, 62%)" : "hsla(222deg, 5%, 62%)",
          }}
        />
        <input
          type="text"
          style={{
            paddingLeft: "30px",
            borderRadius: "5px",
            backgroundColor: isActive
              ? "hsl(0, 0%, 100%)"
              : "hsl(222, 10%, 17%)",
            color: isActive ? "hsl(222deg, 5%, 62%)" : "hsla(222deg, 5%, 62%)",
            width: "400px",
            height: "40px",
            border: "none",
            outline: "none",
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search profiles, champions, agents, legends, and more!"
        />
      </div>
      <div>
        <a className={`${classes.headerButton} ${classes.signIn}`}>
          <BsPersonCircle /> Sign In
        </a>
        {/* <a className={Object.assign(classes.headerButton, classes.window)}> */}
        <a
          className={`${classes.headerButton} ${classes.window}`}
          title="Windows 64-bit"
        >
          <AiFillWindows /> Download
        </a>
      </div>
    </div>
  );
};

export default Header;
