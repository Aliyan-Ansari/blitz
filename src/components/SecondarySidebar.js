import React, { useState } from 'react'
import classes from './SecondarySidebar.module.css';
import {BsPersonCircle} from 'react-icons/bs';
import {HiOutlineDownload} from 'react-icons/hi';
import {IoMdSettings} from 'react-icons/io';
import {BsFillPersonFill} from 'react-icons/bs';
import {GiQueenCrown} from 'react-icons/gi';
import {FaWallet} from 'react-icons/fa';
import {BsPersonPlusFill} from 'react-icons/bs'

const icons = [
    {icon:<BsFillPersonFill className={classes.icon}/>, title:'Guest Account'},
    {icon:<HiOutlineDownload className={classes.icon}/>,title:'Download Blitz'},
    {icon:<IoMdSettings className={classes.icon}/>, title:'Settings'},
    {icon:<BsPersonCircle className={classes.icon}/>, title:'Sign Up for Account'},
    {icon:<GiQueenCrown className={classes.icon}/>, title:'Get Blitz Pro'},
    {icon:<FaWallet className={classes.icon}/>, title:'Wallet'},
    {icon:<BsPersonPlusFill className={classes.icon}/>, title:'Coming Soon'},
  
  ]
const SecondarySidebar = () => {
    const [isMini, setIsMini] = useState(true);

    function toggleSidebar() {
        if (isMini) {
            setTimeout(()=>
            {
                document.getElementById("mySidebar").style.width = "20%";
                setIsMini(false);
            },500)
        } else {
            setTimeout(()=>
            {
                document.getElementById("mySidebar").style.width = "60px";
                setIsMini(true);
            },500)
        }
    }
    return (
    <div className={classes.sidebar} onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar} id="mySidebar">
        <div className={classes.listWrapper}>
          <ul className={classes.ul}>
            {
              icons.map((ele,index)=>
              <>
              {
                  ele.title === 'Coming Soon'&& <div style={{display:'block', width:'100%',marginBottom:'30px',borderBottom:'1px solid #7e828b'}}/>
                }
              <div className={classes.row} style={{ margin: index===0 &&  '10px 0px 35px 0px' }}>
                {ele.icon}
              <li className={classes.title}>{ele.title}</li>
              
              </div>
                </>
              
              )
            }
          </ul>
        </div>

    </div>
  )
}

export default SecondarySidebar