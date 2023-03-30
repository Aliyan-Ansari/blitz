import React from 'react'
import classes from './PrimarySidebar.module.css';
import AiOutlineThunderbolt from 'react-icons/ai';
import {AiFillHome} from 'react-icons/ai';
import {BsFillLayersFill} from 'react-icons/bs';
import {BiBookBookmark} from 'react-icons/bi';
import {GiCrossedSwords} from 'react-icons/gi'

const icons = [
  {icon:<AiFillHome className={classes.icon}/>, title:'Home'},{icon:<BsFillLayersFill className={classes.icon}/>,title:'Overlays'},{icon:<BiBookBookmark className={classes.icon}/>, title:'Game Guides'},
  {icon:<GiCrossedSwords className={classes.icon}/>, title:'Arena'},

]
const PrimarySidebar = () => {
  return (
    // onmouseover="toggleSidebar()" onmouseout="toggleSidebar()" id="mySidebar"
<div className={classes.sidebar}>
    <div className={classes.mainWrapper}>
        <div className={classes.logoContainer}>
          <div className={classes.logoIcon}>
          <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.097 48c-1.933 0-3.44-1.657-3.234-3.557l1.463-13.494a.861.861 0 0 0-.862-.949H7.384a1.74 1.74 0 0 1-1.321-.604l-1.15-1.337a1.699 1.699 0 0 1-.05-2.159L24.99.166A.436.436 0 0 1 25.334 0h1.534c1.933 0 3.44 1.657 3.234 3.557l-1.463 13.495A.861.861 0 0 0 29.5 18h11.088c.504 0 .983.216 1.312.593l1.177 1.346c.54.617.564 1.525.059 2.17L22.974 47.834a.435.435 0 0 1-.343.166h-1.534Z" fill="url(#blitz-a-0)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m20.652 31.092-1.463 13.495c-.119 1.094.75 2.08 1.908 2.08h1.098l19.892-25.38a.365.365 0 0 0-.013-.47l-1.176-1.346a.41.41 0 0 0-.309-.138H29.501c-1.292 0-2.33-1.113-2.188-2.425l1.463-13.495c.119-1.094-.75-2.08-1.908-2.08H25.77L5.912 26.722a.365.365 0 0 0 .012.468l1.15 1.336a.41.41 0 0 0 .31.14h11.08c1.291 0 2.33 1.114 2.188 2.426Zm-2.789 13.351c-.206 1.9 1.3 3.557 3.234 3.557h1.534c.134 0 .26-.061.343-.166l20.163-25.725a1.699 1.699 0 0 0-.06-2.17l-1.176-1.346A1.743 1.743 0 0 0 40.59 18H29.501a.861.861 0 0 1-.863-.948l1.463-13.495c.207-1.9-1.3-3.557-3.233-3.557h-1.534a.436.436 0 0 0-.343.166L4.861 25.9a1.699 1.699 0 0 0 .05 2.159l1.15 1.337c.33.383.814.604 1.322.604h11.08a.86.86 0 0 1 .862.948l-1.463 13.495Z" fill="url(#blitz-b-0)"></path><defs><linearGradient id="blitz-a-0" x1="37.146" y1="30.595" x2="14.827" y2="11.601" gradientUnits="userSpaceOnUse"><stop stop-color="#CE0F50"></stop><stop offset="1" stop-color="#FE112D"></stop></linearGradient><linearGradient id="blitz-b-0" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#FF003D"></stop><stop offset="1" stop-color="#FF003D" stop-opacity="0"></stop></linearGradient></defs></svg>
          </div>
          <span className={classes.logo}>BLITZ</span>
        </div>
        <div className={classes.listWrapper}>
          <ul className={classes.ul}>
            {
              icons.map((ele)=>
              <div className={classes.row}>{ele.icon}<li className={classes.title}>{ele.title}</li></div>
              
              )
            }
          </ul>
        </div>

    </div>
</div>    

    
  )
}

export default PrimarySidebar