import React from 'react'
import Header from './Header.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import album1 from '../img/Album1.jpg'
import album2 from '../img/Album2.jpg'
import album3 from '../img/Album3.png'
import album4 from '../img/Album4.jpg'
import album5 from '../img/Album5.jpg'
import album6 from '../img/Album6.jpg'
import album7 from '../img/Album7.jpg'
import album8 from '../img/Album8.jpg'
import album9 from '../img/Album9.png'
import album10 from '../img/Album10.png'
import album11 from '../img/Album11.png'
import album12 from '../img/Album12.png'
import album13 from '../img/Album13.png'
import album14 from '../img/Album14.png'
import album15 from '../img/Album15.png'
import album16 from '../img/Album16.png'
import album17 from '../img/Album17.png'
import album18 from '../img/Album18.png'
import album19 from '../img/Album19.png'
import album20 from '../img/Album20.png'


import './Album.css'


function Album() {
  return (
    <div className='Album'>
        <Header/>
        <Navbar />
        <h1>📸 Album</h1>
        <div className="albums">
            <img src={album1} alt='albums' className="album"></img>
            <img src={album2} alt='albums' className="album"></img>
            <img src={album3} alt='albums' className="album"></img>
            <img src={album4} alt='albums' className="album"></img>
            <img src={album5} alt='albums' className="album"></img>
            <img src={album6} alt='albums' className="album"></img>
            <img src={album7} alt='albums' className="album"></img>
            <img src={album8} alt='albums' className="album"></img>
            <img src={album9} alt='albums' className="album"></img>
            <img src={album10} alt='albums' className="album"></img>
            <img src={album11} alt='albums' className="album"></img>
            <img src={album12} alt='albums' className="album"></img>
            <img src={album13} alt='albums' className="album"></img>
            <img src={album14} alt='albums' className="album"></img>
            <img src={album15} alt='albums' className="album"></img>
            <img src={album16} alt='albums' className="album"></img>
            <img src={album17} alt='albums' className="album"></img>
            <img src={album18} alt='albums' className="album"></img>
            <img src={album19} alt='albums' className="album"></img>
            <img src={album20} alt='albums' className="album"></img>
        </div>
        <Footer />
    </div>
  )
}

export default Album