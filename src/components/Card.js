import React from 'react';
import classes from './Card.module.css';
import {AiFillSetting} from 'react-icons/ai';

const Card = (props) => {
  return (
    <div key={props.key} className={classes.card}>
      <div className={classes.imageContainer}>
      <img src={props.url} className={classes.image}/>
      <div className={classes.settingIcon}>
        <AiFillSetting style={{ fontSize:20 , color:'#999ca3'}}/>
      </div>
      </div>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <p className={classes.title}>{props.title}</p>
        </div>
        <div className={classes.chipList}>
            {
                props?.chips.map((ele)=>
                ele.title.map((title)=>
                <>
                {
                    ele.isNew && <span className={classes.chip} style={{ color:'#30d9d3', background:'#162f32'}}>New</span>
                }
                    <span className={classes.chip}>{title}</span>
                </>
                    )
                )
            }
        </div>
        <div className={classes.descriptionWrapper}>
            <p className={classes.description}>{props.description}
            
            </p>
        </div>

    </div>
  )
}

export default Card
