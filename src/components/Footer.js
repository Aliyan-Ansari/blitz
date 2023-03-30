import React from 'react'
import classes from './Footer.module.css';


const company =["About Us","Partnerships","Careers","Branding","FAQ"];
const socials =["Facebook","Twitter","Instagram","Our Discord"]
const games=["League of Legends","Teamfight Tactics ","Valorant","CS:GO","Apex Legends"]

const Footer = () => {

  return (
    <div className={classes.footer}>
    <div className={classes.row}>
        <div className={classes.actionCol}>

        </div>
        <div className={classes.col}>
            <table className={classes.table}>
                <tr>
                    <th>Company</th>
                    <th>Socials</th>
                    <th>Supported Games</th>

                </tr>
                <tr>
                    <td>About Us</td>
                    <td>Facebook</td>
                    <td>League of Legends</td>
                </tr>
                <tr>
                    <td>Partnerships</td>
                    <td>Twitter</td>
                    <td>Teamfight Tactics</td>
                </tr>
                <tr>
                    <td>Careers</td>
                    <td>Instagram</td>
                    <td>Valorant</td>
                </tr>
                <tr>
                    <td>Branding</td>
                    <td>Our Discord</td>
                    <td>CS:GO</td>
                </tr>
                <tr>
                    <td>FAQ</td>
                    <td></td>
                    <td>Apex Legends</td>
                </tr>
            </table>
        </div>
    </div>

    </div>
  )
}

export default Footer