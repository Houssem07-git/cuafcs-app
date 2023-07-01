import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import gmail from '../img/gmail.png';
import facebook from '../img/facebook.png'
import linkedin from '../img/linkedin.png'
import twitter from '../img/twitter.png'
import './FooterAR.css';

function FooterAR() {
  return (
    <div className="FooterAR">
        <div className="socialsAR">
            <div className="socAR">
                <a href="#"><img src={twitter} className="social"></img></a> 
                <a href="#"><img src={gmail} className="social"></img></a>
                <a href="#"><img src={linkedin} className="social"></img></a>
                <a href="#"><img src={facebook} className="social"></img></a>               
            </div>
            <p id="footer-pAR">تواصلوا معنا</p>
        </div>
        <div className="mailAR">
            <p id="footer-pAR">cuafcs@gmail.com</p>
            <MailOutlineIcon className="icon"/>
        </div>
        <div className="phoneAR">
            <p id="footer-pAR">00 336 14 81 87 37</p>
            <LocalPhoneIcon className="icon"/>
        </div>
        <p id="footer-pAR">ص . ب 16 – 92321 شاتيون – فرنسا</p>
    </div>
  )
}

export default FooterAR