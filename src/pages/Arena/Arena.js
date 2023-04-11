import React, { useState } from 'react';
import PrimarySidebar from '../../components/PrimarySidebar';
import SecondarySidebar from '../../components/SecondarySidebar';
import classes from './Arena.module.css';
import { FaSearch } from 'react-icons/fa';
import { MdWatchLater } from 'react-icons/md';
import { ArenaTable } from '../../components/CustomTable/CustomTable';
const Arena = () => {
  const [active, setActive] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };
  const lolIcon = (
    <svg
      width='32'
      height='32'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        class='icon-box'
        d='M0 8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545C3.8 0 5.2 0 8 0h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 3.8 20 5.2 20 8v4c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C16.2 20 14.8 20 12 20H8c-2.8 0-4.2 0-5.27-.545A5 5 0 0 1 .545 17.27C0 16.2 0 14.8 0 12V8Z'
        fill='#D5A038'
      ></path>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M6.223 3 7 4.167v11.277L6.223 17h8.568l1.044-3h-5.796V3H6.223ZM3.39 10.389A6.6 6.6 0 0 1 6 5.126v2.97a4.59 4.59 0 0 0-.61 2.293c0 .835.222 1.618.61 2.294v2.578l-.14.281a6.599 6.599 0 0 1-2.47-5.153Zm11.222 0c0 .97-.299 1.869-.81 2.611h2.275A6.613 6.613 0 0 0 11 3.853v2.033a4.613 4.613 0 0 1 3.611 4.503Z'
        fill='#0E1015'
      ></path>
    </svg>
  );
  const tabList = [
    {
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='#E3E5EA'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='6' y='4' width='12' height='16' rx='2'></rect>
          <path d='M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2V6ZM4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2V6Z'></path>
        </svg>
      ),
      title: 'All Games',
    },
    {
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            class='icon-box'
            d='M0 8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545C3.8 0 5.2 0 8 0h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 3.8 20 5.2 20 8v4c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C16.2 20 14.8 20 12 20H8c-2.8 0-4.2 0-5.27-.545A5 5 0 0 1 .545 17.27C0 16.2 0 14.8 0 12V8Z'
            fill='#D5A038'
          ></path>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M6.223 3 7 4.167v11.277L6.223 17h8.568l1.044-3h-5.796V3H6.223ZM3.39 10.389A6.6 6.6 0 0 1 6 5.126v2.97a4.59 4.59 0 0 0-.61 2.293c0 .835.222 1.618.61 2.294v2.578l-.14.281a6.599 6.599 0 0 1-2.47-5.153Zm11.222 0c0 .97-.299 1.869-.81 2.611h2.275A6.613 6.613 0 0 0 11 3.853v2.033a4.613 4.613 0 0 1 3.611 4.503Z'
            fill='#0E1015'
          ></path>
        </svg>
      ),
      title: 'League of Legends',
    },
    {
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            class='icon-box'
            d='M0 8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545C3.8 0 5.2 0 8 0h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 3.8 20 5.2 20 8v4c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C16.2 20 14.8 20 12 20H8c-2.8 0-4.2 0-5.27-.545A5 5 0 0 1 .545 17.27C0 16.2 0 14.8 0 12V8Z'
            fill='#F59511'
          ></path>
          <path
            d='M13.073 9.963c-.572-.35-.39-.105-.15.126 1.023.966 1.7 1.914 1.952 2.737.164.535.017.861-.227.392-.374-.71-.862-1.257-1.163-1.498-.296-.238-.29-.123-.146.066.583.78.928 1.565.583 2.174-.57.998-2.863.746-5.118-.56-2.87-1.66-4.64-3.931-3.99-5.093.282-.508 1.05-.718 1.958-.64.192.017.181-.046.01-.092-1.082-.287-2.36-.017-2.813.774-.828 1.438 1.1 4.113 4.308 5.972.68.392 1.567.833 2.614 1.183.636.213.545.469-.548.255-1.159-.224-2.604-.83-3.969-1.634-.395-.231-.447-.14-.154.147.273.266.786.672 1.41 1.043 3.185 1.9 7.161 2.398 8.302.413 1.02-1.775-.813-4.516-2.859-5.765Z'
            fill='#0E1015'
          ></path>
          <path
            d='M2.999 3 4.71 6.112h3.734v5.879c-.051-.04.048.038 0 0 .863.656 2.16 1.311 3.112 1.43-.049-.003.05.006 0 0V6.11h3.734L17 3H2.999Z'
            fill='#0E1015'
          ></path>
        </svg>
      ),
      title: 'Teamfight Tactics',
      imageUrl:'https://blitz-cdn.blitz.gg/blitz/ui/img/arena/empty-state-tft.webp',
    },
    {
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            class='icon-box'
            d='M0 8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545C3.8 0 5.2 0 8 0h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 3.8 20 5.2 20 8v4c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C16.2 20 14.8 20 12 20H8c-2.8 0-4.2 0-5.27-.545A5 5 0 0 1 .545 17.27C0 16.2 0 14.8 0 12V8Z'
            fill='#FF4655'
          ></path>
          <path
            d='M3.118 4.236 12.29 15.89c.035.044.004.109-.051.109H7.72a.065.065 0 0 1-.051-.025l-4.654-5.846A.068.068 0 0 1 3 10.087v-5.81c0-.063.079-.09.118-.041Zm7.761 7.684 6.004-7.617c.039-.05.117-.022.117.042v5.775c0 .016-.005.03-.015.043l-1.484 1.841a.066.066 0 0 1-.051.025h-4.52c-.055 0-.086-.066-.051-.11Z'
            fill='#0E1015'
          ></path>
        </svg>
      ),
      title: 'Valorant',
      imageUrl:'https://blitz-cdn.blitz.gg/blitz/ui/img/arena/empty-state-val.webp'
    },
    {
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            class='icon-box'
            d='M0 8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545C3.8 0 5.2 0 8 0h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 3.8 20 5.2 20 8v4c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C16.2 20 14.8 20 12 20H8c-2.8 0-4.2 0-5.27-.545A5 5 0 0 1 .545 17.27C0 16.2 0 14.8 0 12V8Z'
            fill='#F3A722'
          ></path>
          <path
            d='M9.295 2h.435c.302.117.592.279.856.462.084.351.232.725.104 1.084-.109.1-.256.14-.388.201.016.139.039.276.06.413.248-.02.489-.084.732-.13.034-.144.042-.299.134-.42.02.097.036.195.048.293.13.074.257.18.419.164 1.02 0 2.04-.003 3.06 0 .112-.009.166.109.243.17.002-.214.001-.428.011-.642l.12.003c.007.187-.014.38.04.563.056.013.114.017.173.024l.01.22c.313.01.63.03.94-.023.21-.03.422-.01.632-.01.004.074.01.147.024.22-.26.018-.524.036-.783-.007-.415-.05-.829.037-1.243.014-.014.055-.028.11-.04.167-.4.004-.797-.003-1.195-.001-.132-.003-.278.025-.361.135-.117.144-.26.267-.372.414-.036.271.071.534.133.793-.094.034-.188.065-.28.1-.095.293-.058.667-.33.872-.15.111-.282.25-.454.329-.124.055-.258-.002-.384-.02-.468-.07-.855-.354-1.273-.55-.027.112-.058.222-.088.333.126.08.29.15.332.309.064.233.01.477.001.714-.02.217-.026.436-.047.654-.02.211-.144.393-.271.557-.12-.029-.236-.063-.353-.093-.127.268-.022.601.187.801.543.583.837 1.332 1.113 2.063.047.154.208.246.236.408.045.172.11.345.095.526-.021.318-.044.636-.077.952-.022.233-.11.465-.058.7.038.19.062.393-.01.58-.095.235-.094.492-.095.742.004.164.013.345.129.475.137.166.27.339.434.48.203.131.482.132.648.321.053.104.015.225.014.335-.526.079-1.077.085-1.588-.077-.288-.093-.606.066-.882-.09.015-.326.094-.643.211-.947.048-.226-.004-.461-.01-.69-.003-.199-.106-.374-.146-.565-.114-.41-.147-.835-.166-1.258-.025-.207.153-.364.16-.566a.623.623 0 0 0-.103-.513c-.195-.006-.46.045-.57-.162-.228-.335-.451-.674-.68-1.008-.08-.144-.271-.11-.402-.174-.117-.106-.176-.256-.249-.392-.042.155-.1.311-.217.428-.184.183-.25.435-.345.666a2.186 2.186 0 0 0-.152.516c-.025.135-.031.292-.154.38-.18.135-.243.36-.408.508a.882.882 0 0 0-.237.431c-.013.145.029.29-.008.433-.067.26-.212.49-.32.735-.075.172-.114.358-.197.527-.056.118-.198.156-.275.256a1.86 1.86 0 0 0-.217 1.276c.065.172.112.352.072.537-.138.019-.276.041-.415.054h-.43c-.111-.023-.226-.04-.328-.092a1.25 1.25 0 0 1 .005-.729c.1-.354.192-.711.282-1.067.062-.175-.084-.332-.07-.507-.015-.258.147-.47.264-.685.11-.191.07-.422.147-.623.172-.438.498-.795.693-1.222.06-.174-.005-.359.006-.538.015-.34.083-.675.142-1.01.02-.128.062-.264.012-.391a1.021 1.021 0 0 1-.07-.474c.022-.149-.068-.296-.012-.441.03-.123.145-.193.236-.27.017-.505-.17-1.003-.091-1.507.089-.11.233-.148.358-.204a41.238 41.238 0 0 1-.549-.114 2.468 2.468 0 0 1 .064-.606c.067-.31.03-.632.08-.945.008-.08.096-.107.166-.11.166-.011.333-.019.497-.058-.049-.395-.09-.798.001-1.192.087-.464.298-.934.693-1.222.272-.18.665-.288.95-.072l.093-.062a1.493 1.493 0 0 1 .133-1.343c.17-.27.467-.423.765-.516Zm2.668 3.022c-.015.115-.05.23-.163.284.148-.01.299-.009.445-.04l-.01-.253a8.138 8.138 0 0 0-.272.01Zm-.308.325-.051.064c.023.156.141.283.22.418.114-.159.23-.318.34-.48-.17-.008-.34-.02-.51-.002Z'
            fill='#0E1015'
          ></path>
        </svg>
      ),
      title: 'CS:GO',
      imageUrl:'https://blitz-cdn.blitz.gg/blitz/ui/img/arena/empty-state-lol.webp'
    },
    {
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            class='icon-box'
            d='M0 8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545C3.8 0 5.2 0 8 0h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 3.8 20 5.2 20 8v4c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C16.2 20 14.8 20 12 20H8c-2.8 0-4.2 0-5.27-.545A5 5 0 0 1 .545 17.27C0 16.2 0 14.8 0 12V8Z'
            fill='#CB2630'
          ></path>
          <path
            d='m10 2 7.884 13.27-2.5 1.73-4.23-2.885h2.504L10 7.577l-3.63 6.538h2.476L4.616 17l-2.5-1.73L10 2Z'
            fill='#0E1015'
          ></path>
        </svg>
      ),
      title: 'Apex Legends',
      imageUrl:'https://blitz-cdn.blitz.gg/blitz/ui/img/arena/empty-state-apex.webp'
    },
  ];
  return (
    <div className={classes.Arena}>
      <div className={classes.mainContainer}>
        <div className={classes.primarySidebar}>
          <PrimarySidebar />
        </div>
        <div className={classes.mainWrapper}>
          <div className={classes.headerContainer}>
            <div className={classes.searchDiv}>
              <FaSearch
                style={{
                  position: 'absolute',
                  top: 22,
                  left: 30,
                  fontSize: 16,
                  color: '#7e828b',
                }}
              />
              <input
                type='text'
                style={{
                  backgroundColor: 'hsl(222, 10%, 17%)',
                  color: 'hsla(222deg, 5%, 62%)',
                }}
                className={classes.searchInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled
                placeholder='Search'
              />
            </div>
            <h1 className={classes.heading}>Arena</h1>
            <div className={classes.tabList}>
              {tabList.map((ele, index) => (
                <span
                  key={index}
                  className={`${classes.tab} ${
                    index === active ? classes.active : ''
                  }`}
                  onClick={() => setActive(index)}
                >
                  <span
                    className={`${classes.icon} ${
                      index === active
                        ? classes.activeIcon
                        : classes.notActiveIcon
                    }`}
                  >
                    {ele.icon}
                  </span>{' '}
                  {ele.title}
                </span>
              ))}
            </div>
          </div>
          <div className={classes.mainContent}>
            {active > 1 &&
            (
              tabList.map((list, index)=>{
                if(active===index){
                return (
            <div className={classes.eventTitleImageWrapper} key={index}>
              <div className={classes.eventTitleCard}>
                <h3 className={classes.typeH3}>Working on bringing you {list.title === 'CS:GO' ? 'more': list?.title} events!</h3>
                <p className={classes.typeBody}>While we are tinkering, check out the other events available below.</p>
              </div>
              <div className={classes.charImage} style={{ backgroundImage: `url(${list?.imageUrl})`}}></div>
            </div>

                )
                }
              }
              )
            ) 
            }
            {
              active < 2 && (
            <div className={classes.eventWrapper}>
              <div className={classes.imageWrapper}>
                <img
                  src='https://blitz-cms-iesdev.blitz.gg/challenge_assets/1137258e-dd2c-4bd6-9e4b-0d2d687f3ff5.png'
                  alt='event-background-image'
                  className={classes.image}
                />
                <div className={classes.detailWrapper}>
                  <h2 className={classes.eventTitle}>ARAM Cup 6</h2>
                  <span className={classes.eventDeadline}>
                    <MdWatchLater
                      style={{ fontSize: '22px', marginRight: '10px' }}
                    />
                    Ends in: 08h 32m
                  </span>
                </div>
              </div>
              <div className={classes.eventDetails}>
                <div className={classes.logo}>{lolIcon}</div>
                <div className={classes.live}>
                  <span className={classes.red}>Live</span>
                  <span className={classes.typeCaption}>
                    Apr 7, 12 PM - Apr 8, 12 PM
                  </span>
                </div>
                <div className={classes.registered}>
                  <span className={classes.typeSubtitle}>2.3k</span>
                  <span className={classes.typeCaption}>Registered</span>
                </div>
                <div className={classes.prizePool}>
                  <span className={classes.typeSubtitle}>$50</span>
                  <span className={classes.typeCaption}>Prize Pool</span>
                </div>
                <div className={classes.break}></div>
                <div className={classes.action}>
                  <a className={classes.signIn} type='button'>
                    <span className={classes.typeSubtitle1}>
                      Sign in to join!
                    </span>
                  </a>
                </div>
                <div className={classes.moreDetails}>
                  <span className={classes.moreDetailsAction}>
                    More Details
                  </span>
                </div>
              </div>
            </div>
              )
            }
            <div className={classes.table}>
              <ArenaTable />
            </div>
            <div className={classes.cardContent}>
              <div className={classes.headerSection}>
                <h4 className={classes.typeSubtitle2}>
                  How does Portol.io Arena work?
                </h4>
                <span className={classes.typeCaption1}>
                  You don't have to be a professional gamer to join esports
                  tournaments!
                </span>
              </div>
              <div className={classes.card}>
                <div className={classes.imageContainer}>
                  <img
                    src='https://blitz-cdn.blitz.gg/blitz/ui/img/arena/discover-help-register.webp'
                    alt='registerImage'
                    className={classes.cardImage}
                  />
                </div>
                <div className={classes.textContainer}>
                  <h6 className={classes.typeH6}>1. Register!</h6>
                  <p className={classes.typeBody}>
                    Sign up above and practice while you wait.
                  </p>
                </div>
              </div>
              <div className={classes.card}>
                <div className={classes.imageContainer}>
                  <img
                    src='https://blitz-cdn.blitz.gg/blitz/ui/img/arena/discover-help-play.webp'
                    alt='discoverImage'
                    className={classes.cardImage}
                  />
                </div>
                <div className={classes.textContainer}>
                  <h6 className={classes.typeH6}>2. Play games!</h6>
                  <p className={classes.typeBody}>
                    Complete mission objectives to score points and climb the
                    leaderboard.
                  </p>
                </div>
              </div>
              <div className={classes.card}>
                <div className={classes.imageContainer}>
                  <img
                    src='https://blitz-cdn.blitz.gg/blitz/ui/img/arena/discover-help-win.webp'
                    alt='diamondImage'
                    className={classes.cardImage}
                  />
                </div>
                <div className={classes.textContainer}>
                  <h6 className={classes.typeH6}>3. Win prizes!</h6>
                  <p className={classes.typeBody}>
                    Win everything from cash to gaming PCs and gift cards!
                  </p>
                </div>
              </div>
              <div className={classes.fullCard}>
                <h4 className={classes.typeSubtitle3}>
                  Join events to climb and shine!
                </h4>
                <p className={classes.typeBody3}>
                  Blitz Arena events happen on a regular basis. Check back often
                  to join fun events with exciting partners, challenging
                  missions, and great prizes!
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.secondarySidebar}>
          <SecondarySidebar />
        </div>
      </div>
    </div>
  );
};

export default Arena;
