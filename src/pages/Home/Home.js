import React from "react";
import GameDetails from "../../components/GameDetails";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderSlider from "../../components/HeaderSlider";
import PrimarySidebar from "../../components/PrimarySidebar";
import SecondarySidebar from "../../components/SecondarySidebar";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.mainContainer}>
        <div className={classes.primarySidebar}>
          <PrimarySidebar />
        </div>
        <div className={classes.mainWrapper}>
          <Header />
          <div className={classes.mainContent}>
            <HeaderSlider />
            <GameDetails />
          </div>
          <div className={classes.footer}>
            <Footer />
          </div>
        </div>
        <div className={classes.secondarySidebar}>
          <SecondarySidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
