import React, { useEffect, useRef, useState } from 'react';
import { Textarea, Button, useDisclosure } from '@chakra-ui/react';
import PrimarySidebar from '../../components/PrimarySidebar';
import SecondarySidebar from '../../components/SecondarySidebar';
import classes from './Settings.module.css';
import CustomModal from '../../components/CustomModal/CustomModal';
const Settings = () => {
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalState, setModalState] = useState({title:'Email'})
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

  //handling the state of modal
  const handleModal =(state)=>{
    setModalState({title:state});
    onOpen()
  }
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
                <div className={classes.typeTitle}>player312@gmail.com</div>
                <div className={classes.emailButton}>
                  <Button
                    colorScheme='red'
                    variant={'ghost'}
                    style={{ width: '220px' }}
                    onClick={()=>handleModal('Email')}
                  >
                    Change Email
                  </Button>
                </div>
              </div>
              <div className={classes.listedPassword}>
                <div className={classes.typeTitle}>**********</div>
                <div className={classes.passwordButton}>
                  <Button
                    colorScheme='red'
                    variant={'ghost'}
                    style={{ width: '220px' }}
                    onClick={()=>handleModal('Password')}
                  >
                    Change Password
                  </Button>
                </div>
              </div>
              <div className={classes.listedUserName}>
                <div className={classes.typeTitle}>Player_312</div>
                <div className={classes.userNameButton}>
                  <Button
                    colorScheme='red'
                    variant={'ghost'}
                    style={{ width: '220px' }}
                    onClick={()=>handleModal('Username')}
                  >
                    Change Username
                  </Button>
                </div>
              </div>
              <div className={classes.paymentInfo}>
                <div className={classes.typeTitle}>1111 **** **** 1111</div>
                <div className={classes.userNameButton}>
                  <Button
                    colorScheme='red'
                    variant={'ghost'}
                    style={{ width: '220px' }}
                    onClick={()=>handleModal('Card')}
                  >
                    Add / Change Card
                  </Button>
                </div>
              </div>
              <div className={classes.listedSubscription}>
                <h4 className={classes.headingString}>
                  Current Subscription is of <span>{'$12.00'}</span>
                </h4>
              </div>
              <div className={classes.listedSubscription}>
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
      <CustomModal isOpen={isOpen} onClose={onClose} modalState={modalState}/>
    </div>
  );
};

export default Settings;
