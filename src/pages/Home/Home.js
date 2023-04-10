import React, { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import GameDetails from '../../components/GameDetails';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderSlider from '../../components/HeaderSlider';
import PrimarySidebar from '../../components/PrimarySidebar';
import SecondarySidebar from '../../components/SecondarySidebar';
import classes from './Home.module.css';
import DetailSection from '../../components/DetailSection';
import MobileFooter from '../../components/MobileFooter';
const Home = () => {
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);
  const [isPrimarySideBarActive, setIsPrimarySidebarActive] = useState(false);
  const [isSecondarySideBarActive, setIsSecondarySidebarActive] =
    useState(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (primaryRef.current && !primaryRef.current.contains(event.target)) {
        setIsPrimarySidebarActive(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [primaryRef]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        secondaryRef.current &&
        !secondaryRef.current.contains(event.target)
      ) {
        setIsSecondarySidebarActive(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [secondaryRef]);

  return (
    <div className={classes.home}>
      <div className={classes.mainContainer}>
        <div className={classes.primarySidebar}>
          {screenSize.width < 540 ? (
            isPrimarySideBarActive && (
              <div ref={primaryRef}>
                <PrimarySidebar />
              </div>
            )
          ) : (
            <PrimarySidebar />
          )}
        </div>
        <div className={classes.mainWrapper}>
          <div className={classes.headerContainer}>
            <div className={classes.mobileIcons}>
              <GiHamburgerMenu
                size={28}
                color='gray'
                onClick={() => {
                  setIsPrimarySidebarActive(!isPrimarySideBarActive);
                }}
              />
            </div>
            <Header />
            <div className={classes.mobileIcons}>
              <FaUserCircle
                size={28}
                color='#BBBCC2'
                onClick={() => {
                  setIsSecondarySidebarActive(!isSecondarySideBarActive);
                }}
              />
            </div>
          </div>
          <div className={classes.mainContent}>
            <HeaderSlider />
            <GameDetails />
            <DetailSection />
          </div>
          <div className={classes.footer}>
            {screenSize.width < 768 ? <MobileFooter /> : <Footer />}
          </div>
        </div>
        <div className={classes.secondarySidebar}>
          {screenSize.width < 540 ? (
            isSecondarySideBarActive && (
              <div ref={secondaryRef}>
                <SecondarySidebar />
              </div>
            )
          ) : (
            <SecondarySidebar />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
