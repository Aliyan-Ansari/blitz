import React, { useState } from "react";
import { Tilt } from "react-tilt";
import classes from "./HeaderSlider.module.css";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 15, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.03, // 2 = 200%, 1.5 = 150%, etc..
  speed: 3000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const HeaderSlider = () => {
  const [games, setGames] = useState([
    {
      title: "League of Legends",
      coverImage:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/bg-lol.webp",
      titleImage:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/name-lol.webp",
    },
    {
      title: "Teamfight Tactics",
      coverImage:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/bg-tft-10fbbb.webp",
      titleImage:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/name-tft.webp",
    },
    {
      title: "Valorant",
      coverImage:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/bg-val.webp",
      titleImage:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/name-val.webp",
    },
    {
      title: "CS:GO",
      coverImage:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/bg-csgo.webp",
      titleImage:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/name-csgo.webp",
    },
    {
      title: "Apex Legends",
      coverImage:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/bg-apex.webp",
      titleImage:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/name-apex.webp",
    },
  ]);

  return (
    <div className={classes.headerSlider}>
      {games.map((value) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: 6,
            marginLeft: 6,
            cursor: "pointer",
          }}
        >
          <Tilt
            options={defaultOptions}
            style={{ height: "240px", width: "190px" }}
          >
            <div
              style={{
                width: "190px",
                height: "230px",
                marginTop: "5px",
                position: "relative",
                display: "flex",
                borderRadius: "13px",
              }}
              className={classes.headerCard}
            >
              <img
                src={value.coverImage}
                alt="Cover Imge"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "190px",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <img
                src={value.titleImage}
                alt="Title Imge"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  width: "190px",
                  maxHeight: "50%",
                  objectFit: "contain",
                  filter:
                    "drop-shadow(0px calc(0.25 * 1rem) calc(0.25 * 2rem) hsla(222deg 33% 4% / 1)",
                }}
              />
            </div>
          </Tilt>
          <h4 style={{ textAlign: "left", margin: "10px 0", color: "#E2E4E9" }}>
            {value.title}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default HeaderSlider;
