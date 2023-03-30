import React from 'react'
import PrimarySidebar from '../../components/PrimarySidebar';
import classes from './Home.module.css';
const Home = () => {
  return (
    <div className={classes.home}>
        <div className={classes.mainContainer}>
        <div className={classes.primarySidebar}>
        <PrimarySidebar/>
        </div>
        <div className={classes.mainWrapper}>
        <div className={classes.header}>header</div>
        <div className={classes.mainContent}>mainContent</div>
        <div className={classes.footer}>Footer</div>
        </div>
        <div className={classes.secondarySidebar}>
        secondarySidebar
        </div>
        </div>
    </div>
  )
}

export default Home