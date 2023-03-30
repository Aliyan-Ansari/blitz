import React from 'react'
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
  return (
    <div className={classes.sidebar}>
        <div className={classes.listWrapper}>
          <ul className={classes.ul}>
            {
              icons.map((ele)=>
              <div className={classes.row}>{ele.icon}
              <li className={classes.title}>{ele.title}</li>
              {
                ele.title === 'Coming Soon'&& <hr style={{color:'white'}}/>
              }
              
              </div>
              
              )
            }
          </ul>
        </div>

    </div>
  )
}

export default SecondarySidebar