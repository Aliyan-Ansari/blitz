import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import classes from './HeaderSlider.module.css';

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 15, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.03, // 2 = 200%, 1.5 = 150%, etc..
  speed: 3000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};

const HeaderSlider = () => {
  const [games, setGames] = useState([
    {
      title: 'League of Legends',
      coverImage:
        'https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/bg-lol.webp',
      titleImage:
        'https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/name-lol.webp',
      class: 'horizontal',
    },
    {
      title: 'Teamfight Tactics',
      coverImage:
        'https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/bg-tft-10fbbb.webp',
      titleImage:
        'https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/name-tft.webp',
      class: 'vertical',
    },
    {
      title: 'Valorant',
      coverImage:
        'https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/bg-val.webp',
      titleImage:
        'https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/name-val.webp',
      class: 'big',
    },
    {
      title: 'CS:GO',
      coverImage:
        'https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/bg-csgo.webp',
      titleImage:
        'https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/name-csgo.webp',
      class: 'vertical',
    },
    {
      title: 'Apex Legends',
      coverImage:
        'https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/bg-apex.webp',
      titleImage:
        'https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/name-apex.webp',
      class: 'horizontal',
    },
  ]);

  return (
    <div className={classes.headerSlider}>
      {games.map((value) => (
        <Tilt
          options={defaultOptions}
          className={`${classes.headerCard} ${classes[value.class]}`}
        >
          <img
            src={value.coverImage}
            alt='Cover Imge'
            className={classes.sliderCoverImage}
          />
          <img
            src={value.titleImage}
            alt='Title Imge'
            className={classes.sliderTitleImage}
          />
        </Tilt>
      ))}
    </div>
  );
};

export default HeaderSlider;
