import React from 'react';
import { Button, Input } from '@chakra-ui/react';
import classes from './Account.module.css';

export default function Account() {
  return (
    <div className={classes.accountContainer}>
      <div className={classes.accountContent}>
        <div className={classes.accountVideo}>Video</div>
        <div className={classes.accountHeading}>Welcome to Blitz</div>
        <div className={classes.accountEmailText}>
          Enter your email to continue
        </div>
        <div className={classes.accountInputBox}>
          <Input
            placeholder='large size'
            size='lg'
            className={classes.accountInput}
          />
        </div>
        <div className={classes.accountButtonBox}>
          <Button colorScheme='teal' size='md'>
            Button
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
  );
}
