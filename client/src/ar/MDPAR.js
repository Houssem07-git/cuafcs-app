import React from 'react'
import './MDPAR.css'
import Ben from '../img/BenhendaAR.png'
import ribbon from '../img/ribbon.png'

function MDPAR() {
  return (
    <div className="MDPAR">
        <div className="msg">
          <div className="text">
              <h1 id="MDP">كلمة الرئيس</h1>
          </div>
          <div className="ribbon">
              <img src={ribbon} id="ribbonAR"></img>
          </div>
        </div>
        <div className="Ben">
            <img src={Ben} alt='ben' id="benAR"></img>
        </div>
    </div>
  )
}

export default MDPAR