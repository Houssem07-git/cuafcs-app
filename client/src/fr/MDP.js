import React from 'react'
import Ben from '../img/Benhenda.png'
import './MDP.css'
import ribbon from '../img/ribbon.png'

function MDP() {
  return (
    <div className="MDP">
        <div className="Ben">
            <img src={Ben} alt='ben' id="ben"></img>
        </div>
        <div className="msg">
          <div className="text">
              <h1 id="MDP">Mot du Président</h1>
          </div>
          <div className="ribbon">
              <img src={ribbon} id="ribbon"></img>
          </div>
        </div>
    </div>
  )
}

export default MDP