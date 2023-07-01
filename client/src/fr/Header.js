import React from 'react'
import "./Header.css"
import cuafLogo from '../img/cuaf.png'

function Header() {
  return (
    <div className="Header">
        <div className='fr'>
            <h2>Coordination des universités arabes et françaises</h2>
            <h2>pour la coopération scientifique</h2>
            <h2>Organisation régional non gouvernementale indépenante</h2>
        </div>
        <img src={cuafLogo} alt="Logo"></img>
        <div className='ar'>
            <h2>رابـــــــــــــــــــطة الجـــــــــامعات العربيـــــــــــــة و الفرنسيــــــــــــــــة</h2>
            <h2>للتــــــــعاون العلــــــــــمي</h2>
            <h2>منـــــــــظمة إقليميــــــــــة غيـــــــر حكوميـــــــــــة مستقلـــــــــــة</h2>
        </div>
    </div>
  )
}   

export default Header
