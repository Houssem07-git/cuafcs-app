import React from 'react'
import Header from './Header.js'
import Navbar from './Navbar.js'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import './Presentation.css'
import Footer from './Footer.js';


function Presentation() {
  return (
    <div className='Presentation'>
        <Header/>
        <Navbar/>
        <div className="container">
        <div className="pr">
            <LightbulbOutlinedIcon />
            <h1>Présentation</h1>
        </div>
        <h2>I- Définition : </h2>
        <p>La CUAF est une ONG scientifique indépendante à but non lucratif</p>
        <h2>II- Ethnique :</h2>
        <p>Elle n’est tributaire d’aucune tendance politique ni idéologie partisane son action est définie par ses propres organes.</p>
        <h2>III- Création :</h2>
        <p>La C.U.A.F est créée sur l’initiative de M. Mohamed BENHENDA, universitaire algérien qui en demeure le Président soutenu par des universitaires et des universités ainsi que par des personnalités arabes et française aspirant à la promotion de la coopération scientifique entre la France et chaque pays arabes.</p>
        <h2>IV- Cadre juridique : </h2>
        <p>La C.U.A.F est créée conformément à la loi française des associations, elle agit dans le cadre d’accords de coopération scientifique entre la France et chaque pays arabe.</p>
        <h2>V- Objectifs :</h2>
        <p>1) Ouvrer pour une étroite coopération entre les institutions scientifiques, les universitaires et les chercheurs français d’une part, et leurs partenaires des pays arabes.</p>
        <h2>D’autre part :</h2>
        <p>2) Coordonner la coopération inter-universitaire pour la réalisation d’œuvres scientifiques de haute technologie .</p>
        <p>3) Ouvrer pour la création franco-arabe .</p>
        <p>4) Organiser des activités scientifiques, colloques, séminaires, conférences et la publication d’ouvrages scientifiques et contribuer à leur promotion .</p>
        <p>5) publier l’encyclopédie des relations franco-arabes, passé et présent.</p>
        <h2>VI- Domaines:</h2>
        <p>1) la coopération scientifique inter universitaire .</p>
        <p>2) toute activité liée à ces objectifs.</p>
        <h2>VII- Public:</h2>
        <p>1) établissement publics et privés d’enseignements supérieur.</p>
        <p>2) Centre de recherche.</p>
        <p>3) Professeurs universités et d’établissement d’enseignement supérieurs.</p>
        <p>4) Chercheurs et personnalités intéressés par la coopération franco-arabe.</p>
        <p>5) Bibliothèques universitaires.</p>
        <h2>VIII- Organes:</h2>
        <p>1) Assemblée générale.</p>
        <p>2) Conseil d’administration.</p>
        <p>3) Bureau exécutif.</p>
        <p>4) conseil scientifique.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Presentation