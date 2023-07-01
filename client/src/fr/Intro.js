import React from 'react';
import './Intro.css';
import Sorbonne from '../img/Sorbonne.png'
import cuaflogo from '../img/cuaf.png'
import alazhar from '../img/al-azhar.png'

function Intro() {
  return (
    <div className="Intro">
        <div className="Sorbonne">
              <img src={Sorbonne} alt="Sorbonne" id="uni"></img>
              <p className="sor">L'Université de la Sorbonne est une université publique de recherche située à Paris,
                en France. L'héritage de l'institution remonte à 1257 lorsque Sorbonne College a été 
                créé par Robert de Sorbon comme l'une des premières universités d'Europe.</p>
        </div>
          <div className="cuaflogo">
            <img src={cuaflogo} alt='cuaf' id="cuaflogo"></img>
            <h1 id="cuaf">C U A F</h1>
          </div>
          <div className="al-azhar">
              <img src={alazhar} alt="al-azhar" id="uni"></img>
              <p className="az">L'Université Al-Azhar est une université publique du Caire, en Égypte. 
                Associée à la mosquée Al-Azhar au Caire islamique, c'est la plus ancienne université
                délivrant des diplômes d'Égypte et est reconnue comme l'université la plus prestigieuse
                pour l'apprentissage islamique.</p>
          </div>
    </div>
  )
}

export default Intro