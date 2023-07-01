import React from 'react'
import './Principale.css'
import Sorbonne from '../img/SRB1.png'
import cuafcs from '../img/cuaf2.png'
import alazhar from '../img/AARV1.png'
import {Link} from 'react-router-dom'

function Principale() {
  return (
    <div className="Principale">
        <Link to='/ar/Accueil' className="entrer" id="ar-link">أدخـل</Link>
        <h1 className='principale-titres'>مرحبـــا بـــكم</h1>
        <h1 className="principale-titres">فـــي</h1>
        <h1 className='principale-titres'>موقـــع</h1>
        <h1 className='principale-titres'>رابـــطة الجامعـــات العربيـــة و الفرنسيـــة</h1>
        <h1 className='principale-titres'>للتعـــاون العلمـــي</h1>
        <div className="imgs">
            <img src={Sorbonne} alt="sorbonne" className="icons" id="univ"></img>
            <img src={cuafcs} alt="cuafcs" className="icons"></img>
            <img src={alazhar} alt="alazhar" className="icons" id="univ"></img>
        </div>
        <h1 className='principale-titres'>Bienvenue sûr le site</h1>
        <h1 className='principale-titres'>de la Coordination des universités arabes et françaises</h1>
        <h1 className='principale-titres'>pour la coopération scientifique</h1>
        <div className="footer-principale">
            <h3 className="fr-cuaf" id="cuaf-presentation">CUAF</h3>
            <Link to='/fr/Accueil' className="entrer" id="fr-link">Entrée</Link>
            <h3 className="ar-cuaf" id="cuaf-presentation">كــواف</h3>
        </div>
    </div>
  )
}

/*function CustomLink({to, children, ...props}){
    return(
        <Link to={to} {...props}>
            {children}
        </Link>
    )
}*/

export default Principale