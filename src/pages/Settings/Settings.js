import React, { useEffect, useRef, useState } from 'react';
import { Textarea, Button } from '@chakra-ui/react';
import PrimarySidebar from '../../components/PrimarySidebar';
import SecondarySidebar from '../../components/SecondarySidebar';
import classes from './Settings.module.css';
const Settings = () => {
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
    <div className={classes.setting}>
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
          <h1 className={classes.heading}>Settings</h1>
          <div className={classes.formData}>
            <div className={classes.formContainer}>
              <div className={classes.listedEmail}>
                <div className={classes.emailText}>abc@gmail.com</div>
                <div className={classes.emailButton}>
                  <Button
                    colorScheme='red'
                    variant={'ghost'}
                    style={{ width: '220px' }}
                  >
                    Change Email
                  </Button>
                </div>
              </div>
              <div className={classes.listedPassword}>
                <div className={classes.passwordText}>**********</div>
                <div className={classes.passwordButton}>
                  <Button
                    colorScheme='red'
                    variant={'ghost'}
                    style={{ width: '220px' }}
                  >
                    Change Password
                  </Button>
                </div>
              </div>
              <div className={classes.listedUserName}>
                <div className={classes.userNameText}>Player312</div>
                <div className={classes.userNameButton}>
                  <Button
                    colorScheme='red'
                    variant={'ghost'}
                    style={{ width: '220px' }}
                  >
                    Change Username
                  </Button>
                </div>
              </div>
              <div className={classes.paymentInfo}>
                <div className={classes.cardNumber}>**** **** **** 1111</div>
                <div className={classes.userNameButton}>
                  <Button
                    colorScheme='red'
                    variant={'ghost'}
                    style={{ width: '220px' }}
                  >
                    Add / Change Card
                  </Button>
                </div>
              </div>
              <div className={classes.listedEmail}>
                <h4 className={classes.headingString}>
                  Current Subscription is of <span>{'$12.00'}</span>
                </h4>
              </div>
              <div className={classes.listedEmail}>
                <h4 className={classes.headingString}>
                  Next payment is due in {new Date().toDateString()}
                </h4>
              </div>
              <div className={classes.signOut}>
                <Button colorScheme='red'>Sign out</Button>
              </div>
              <div className={classes.contactSupport}>
                <Textarea placeholder='Contact support...' rows={4} />
                <Button
                  colorScheme='red'
                  variant={'outline'}
                  style={{ marginTop: 10, padding: '10px 20px' }}
                >
                  Send
                </Button>
              </div>
              <div className={classes.listedEmail}></div>
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
    </div>
  );
};

export default Settings;
