import React, { useState } from "react";
import classes from "./HeaderSlider.module.css";

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
            marginRight: 5,
            marginLeft: 5,
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              width: "190px",
              height: "250px",
              position: "relative",
              display: "flex",
              borderRadius: 5,
            }}
          >
            <img
              src={value.coverImage}
              alt="Cover Image"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "190px",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <img
              src={value.titleImage}
              alt="Title Image"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                width: "190px",
                maxHeight: "50%",
                objectFit: "contain",
              }}
            />
          </div>
          <h4
            style={{ textAlign: "center", margin: "10px 0", color: "#E2E4E9" }}
          >
            {value.title}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default HeaderSlider;
