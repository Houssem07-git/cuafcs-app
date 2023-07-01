import React from 'react'
import '../App.css';
import '../index.css'
import Header from './Header.js'
import Navbar from './Navbar.js'
import Intro from './Intro.js'
import MDP from './MDP.js'
import News from './News.js'
import Footer from './Footer.js'

function Page() {
  return (
    <div className="Page">
        {/* Header */}
        <Header />
        {/* Navbar */}
        <Navbar />
        {/* Intro */}
        <Intro />
        {/* MDP */}
        <MDP />
        {/* News */}
        <News />
        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Page