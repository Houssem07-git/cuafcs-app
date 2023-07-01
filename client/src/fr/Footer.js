import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import gmail from '../img/gmail.png';
import facebook from '../img/facebook.png'
import linkedin from '../img/linkedin.png'
import twitter from '../img/twitter.png'
import './Footer.css';


function Footer() {
  return (
    <div className="Footer">
        <div className="socials">
            <p id="footer-p">Retrouvez Nous: </p>
            <div className="soc">
                <a href="#"><img src={facebook} className="social"></img></a>
                <a href="#"><img src={linkedin} className="social"></img></a>
                <a href="#"><img src={gmail} className="social"></img></a>
                <a href="#"><img src={twitter} className="social"></img></a>                
            </div>
        </div>
        <div className="mail">
            <MailOutlineIcon className="icon"/>
            <p id="footer-p">cuafcs@gmail.com</p>
        </div>
        <div className="phone">
            <LocalPhoneIcon className="icon"/>
            <p id="footer-p">00 336 14 81 87 37</p>
        </div>
        <p id="footer-p">B.P. 16 – 92321 CHÂTILLON- France</p>
    </div>
  )
}

export default Footer