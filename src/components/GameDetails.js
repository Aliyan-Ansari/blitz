import React, { useState } from "react";
import { Tilt } from "react-tilt";
import classes from "./GameDetails.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

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

const GameDetails = () => {
  const [games, setGames] = useState([
    {
      link: true,
      title: "Milio",
      description: "Check out the new champion.",
      latest: true,
      coverImage: "https://blitz-cdn.blitz.gg/homepage/news/lol-milio.webp",
    },
    {
      link: true,
      title: "TFT Set 8.5 Update",
      description:
        "Set 8.5 is live. Check out our Set Update, Comps and Pro Build Pages.",
      latest: true,
      coverImage: "https://blitz-cdn.blitz.gg/homepage/news/tft-set85.png",
    },
    {
      link: true,
      title: "Item Value Difference",
      latest: false,
      description:
        "Easily evaluate and compare the value of players item inventories.",
      coverImage:
        "https://blitz-cdn.blitz.gg/homepage/news/lol-item-diff-22hsad.webp",
    },
    {
      link: true,
      title: "Dynamic Stats Overlay",
      latest: true,
      icon: "",
      description:
        "Track key combat metrics in real time and compare them to your teammates, or the best in the lobby",
      coverImage:
        "https://blitz-cdn.blitz.gg/homepage/news/csgo-release-card.webp",
    },
    {
      link: false,
      title: "CS:GO Launched",
      latest: true,
      description:
        "CS:GO is live. Check out your Profile Stats, Post Match and Overlays.",
      coverImage: "https://blitz-cdn.blitz.gg/homepage/news/csgo-launched.webp",
    },
    {
      link: true,
      title: "Benchmarking Overlay",
      description:
        "Track key performance metrics to better gauge performance in real time.",
      latest: false,
      coverImage:
        "https://blitz-cdn.blitz.gg/homepage/news/tft-benchmarking.webp",
    },
  ]);

  return (
    <div className={classes.gameDetails}>
      <h2 className={classes.detailsHeading}>
        The Latest<span>Take a look at what's new, right now.</span>
      </h2>
      <div className={classes.gameDetailsCards}>
        {games.map((value) => (
          <Tilt
            options={defaultOptions}
            style={{
              height: "300px",
              width: "300px",
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
              margin: 8,
              cursor: "pointer",
              padding:'0px 10px',
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
                margin: 8,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${value.coverImage})`,
                  backgroundSize: "cover",
                  filter: "brightness(90%)",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "15px",
                    paddingBottom: "2px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "calc(0.25 * 4.5em)",
                      fontWeight: 600,
                      color: "hsla(222deg 14% 90% / 1)",
                    }}
                  >
                    {value.title}
                  </h3>
                  <div>
                    <span
                      style={{
                        fontSize: "calc(0.25 * 3em)",
                        marginLeft: "calc(0.25 * 2rem)",
                        padding: "calc(0.25 * 0.5rem) calc(0.25 * 1.5rem)",
                        color: "hsla(178deg 69% 52% / 1)",
                        backgroundColor: "hsla(178deg 69% 52% / 0.15)",
                        borderRadius: "5px",
                        fontWeight: 600,
                      }}
                    >
                      New
                    </span>
                  </div>
                </div>
                <div style={{ padding: "0 15px" }}>
                  <p
                    style={{
                      margin: 2,
                      fontWeight: 500,
                      color: "hsla(222deg 5% 62% / 1)",
                      textAlign: "left", 
                      width:'100%',
                      wordBreak:'break-word'                     
                    }}
                  >
                    {value.description}
                  </p>
                  {value.link && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "calc(0.25 * 2rem)",
                        marginTop: "10px",
                        marginLeft: "3px",
                        fontWeight: 600,
                        color: "hsla(222deg 5% 52% / 1)",
                      }}
                    >
                      <span style={{ marginRight: "2px", marginBottom: "2px" }}>
                        View Champion
                      </span>
                      <AiOutlineArrowRight size={20} fontWeight={600} />
                    </div>
                  )}
                </div>
                {/* <div className={classes.subSection}>
                  {value.subList.length > 0 &&
                    value.subList.map((data) => (
                      <div className={classes.tag}>
                        <div className={classes.tagContent}>
                          <div
                            className={classes.tagIcon}
                            style={
                              value.title === "TFT Set 8.5 Update"
                                ? { filter: "invert(1)" }
                                : {}
                            }
                          >
                            {data.icon}
                          </div>
                          <div className={classes.tagTitle}>{data.title}</div>
                        </div>

                        <div className={classes.tagArrow}>
                          <AiOutlineArrowRight
                            size={20}
                            fontWeight={600}
                            color="#DDDFE4"
                          />
                        </div>
                      </div>
                    ))}
                </div> */}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default GameDetails;
