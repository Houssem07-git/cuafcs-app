import React from 'react'
import Header from '../fr/Header.js'
import NavbarAR from './NavbarAR.js'
import NewsAR from './NewsAR.js'
import MDPAR from './MDPAR.js'
import IntroAR from './IntroAR.js'
import FooterAR from './FooterAR.js'
import './AccueilAR.css'

function AccueilAR() {
  return (
    <div className="AccueilAR">
        <Header/>
        <NavbarAR/>
        <div className='container-app'>
            <IntroAR />
            <MDPAR/>
            <NewsAR/>
        </div>
        <FooterAR/>
    </div>
  )
}

export default AccueilAR