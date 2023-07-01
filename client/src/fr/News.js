import React from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import shot1 from '../img/shot1.png'
import shot2 from '../img/shot2.png'
import shot4 from '../img/shot4.jpg'
import { Link } from '@material-ui/core'
import './News.css'


function News() {
  return (
    <div className="group">
        <div className="News">
            <div className="news-intro">
                <WhatshotIcon fontSize="large"></WhatshotIcon>
                <h1 id="t">Actualités</h1>
            </div>
            <div className="News-group">
                <div className="New">
                    <a href="#"><img src={shot1} alt="shot1" id="shot"></img></a>
                    <Link color="primary"><h2>Visite en Jordanie</h2></Link>
                    <p>Le Président de la cuaf monsieur Abou-Alfadhl Mohammed BENHENDA  est reçu par le ministre de l’enseignement superieur du Royaume de la Jordanie une visite de courtoisie dans le cadre de la coopération scientifique interuniversitaire.</p>
                </div>
                <div className="New">
                    <a href="#"><img src={shot2} alt="shot2" id="shot"></img></a>
                    <Link color="primary"><h2>Visite en Tunisie</h2></Link>
                    <p>Le Président de la cuaf monsieur Abou-Alfadhl Mohammed BENHENDA  est reçu par le ministre de l’enseignement superieur de la République de Tunise une visite de courtoisie dans le cadre de coopération scientifique interuniversitaire.</p>
                </div>
                <div className="New">
                    <a href="#"><img src={shot4} alt="shot4" id="shot"></img></a>
                    <Link color="primary"><h2>Réception à Paris</h2></Link>
                    <p>Le Président de la cuaf monsieur Abou-Alfadhl Mohamed BENHENDA est reçu au salon d’honneur par le ministre des affaires étrangères de la République française une visite de courtoisie dans le cadre de la coopération scientifique interuniversitaire.</p>
                </div>
            </div>
        </div>
        <div className="EvenementsNEW">
            <div className="eve-intro">
                <StarOutlineIcon fontSize="large" className="star"></StarOutlineIcon>
                <h1 id="t">ACTIVITÉS À VENIR</h1>
            </div>
            <div className="eve">
                <div className="évenement">
                    <div className="date"><p id="day">22</p><p id="month">SEP</p></div>
                    <Link style={{color:'#27ae60'}}><h2>Titre 01</h2></Link>
                </div>
                <div className="évenement">
                    <div className="date"><p id="day">16</p><p id="month">DEC</p></div>
                    <Link style={{color:'#27ae60'}}><h2>Titre 02</h2></Link>
                </div>
                <div className="évenement">
                    <div className="date"><p id="day">23</p><p id="month">JAN</p></div>
                    <Link style={{color:'#27ae60'}}><h2>Titre 03</h2></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News