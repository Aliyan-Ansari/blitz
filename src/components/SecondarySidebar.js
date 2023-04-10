import React, { useState } from 'react';
import classes from './SecondarySidebar.module.css';
import { BsPersonCircle } from 'react-icons/bs';
import { HiOutlineDownload } from 'react-icons/hi';
import { IoMdSettings } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiQueenCrown } from 'react-icons/gi';
import { FaWallet } from 'react-icons/fa';
import { BsPersonPlusFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const icons = [
  {
    link: 'account',
    icon: <BsFillPersonFill className={classes.icon} />,
    title: 'Guest Account',
  },
  // {
  //   icon: <HiOutlineDownload className={classes.icon} />,
  //   title: "Download Portal.io",
  // },
  {
    link: '',
    icon: <IoMdSettings className={classes.icon} />,
    title: 'Settings',
  },
  {
    link: '',
    icon: <BsPersonCircle className={classes.icon} />,
    title: 'Sign Up for Account',
  },
  {
    link: '',
    icon: <GiQueenCrown className={classes.icon} />,
    title: 'Get Portal.io Pro',
  },
  {
    link: '',
    icon: <FaWallet className={classes.icon} />,
    title: 'Wallet',
  },
  {
    link: '',
    icon: <BsPersonPlusFill className={classes.icon} />,
    title: 'Coming Soon',
  },
];
const SecondarySidebar = () => {
  const [isMini, setIsMini] = useState(true);
  const navigate = useNavigate();

  function toggleSidebar() {
    if (isMini) {
      document.getElementById('mySidebar').style.width =
        'calc(calc(0.25 * 1rem) * 60)';
      setIsMini(false);
    } else {
      document.getElementById('mySidebar').style.width =
        'calc(calc(0.25 * 1rem) * 18)';
      setIsMini(true);
    }
  }
  return (
    <div
      className={classes.sidebar}
      onMouseEnter={toggleSidebar}
      onMouseLeave={toggleSidebar}
      id='mySidebar'
    >
      <div className={classes.listWrapper}>
        <ul className={classes.ul}>
          {icons.map((ele, index) => (
            <>
              {ele.title === 'Coming Soon' && (
                <div
                  style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px',
                    borderBottom: '1px solid #7e828b',
                  }}
                />
              )}
              <div
                className={classes.row}
                style={{ margin: index === 0 && '10px 0px 35px 0px' }}
                onClick={() => {
                  navigate(`/${ele.link}`);
                }}
              >
                {ele.icon}
                <li className={classes.title}>{ele.title}</li>
              </div>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondarySidebar;
