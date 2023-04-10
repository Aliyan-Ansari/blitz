import React from 'react';
import PrimarySidebar from '../../components/PrimarySidebar';
import { Button, Input } from '@chakra-ui/react';
import classes from './Account.module.css';

export default function Account() {
  return (
    <>
      <div className={classes.primarySidebar}>
        <PrimarySidebar />
      </div>
      <div className={classes.accountContainer}>
        <div className={classes.accountContent}>
          <div className={classes.accountVideos}>
            <video
              autoPlay
              loop
              muted
              playsinline
              poster='https://blitz-cdn.blitz.gg/blitz/ui/img/auth/landing-f485ffea.webp'
              // className={classes.accountVideo}
            >
              <source
                src='https://blitz-cdn-videos.blitz.gg/ui/video/auth/landing-e3fb302c.webm'
                type='video/webm'
              ></source>
            </video>
          </div>
          <div className={classes.accountHeading}>Welcome to Portal.io</div>
          <div className={classes.accountEmailText}>
            Enter your email to continue
          </div>
          <div className={classes.accountInputBox}>
            <Input
              placeholder='Your Email Address...'
              size='lg'
              className={classes.accountInput}
            />
          </div>
          <div className={classes.accountButtonBox}>
            <Button
              colorScheme='hsla(352deg 71% 54% / 1)'
              size='md'
              className={classes.accountButton}
            >
              Continue
            </Button>
          </div>
          <div className={classes.accountSubTextBox}>
            <div className={classes.accountSubText}>
              Don't have an account?{' '}
              <span className={classes.accountRegister}>Register</span>
            </div>
            <div className={classes.accountGuestAccount}>Guest Account</div>
          </div>
        </div>
      </div>
    </>
  );
}
