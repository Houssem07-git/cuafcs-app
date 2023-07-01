import React from 'react'
import './IntroAR.css'
import cuaflogo from '../img/cuaf.png'
import Sorbonne from '../img/Sorbonne.png'
import alazhar from '../img/al-azhar.png'

function InfoAR() {
  return (
    <div className='Intro'>
        <div className="SorbonneAR">
            <img src={Sorbonne} alt="Sorbonne" id="uni"></img>
            <p className="sorAR">جامعة السوربون هي جامعة بحثية عامة تقع في باريس ، فرنسا. يعود تراث المؤسسة إلى عام 1257 عندما أسس روبرت دي سوربون كلية السوربون كواحدة من أولى الجامعات في أوروبا</p>
        </div>
        <div className="cuaflogo">
          <img src={cuaflogo} alt='cuaflogo' id='cuaflogo'></img>
          <h1 id="cuafAR">C U A F</h1>
        </div>
        <div className="al-azharAR">
            <img src={alazhar} alt="al-azhar" id="uni"></img>
            <p className="azAR">جامعة الأزهر هي المؤسسة الدينية العلمية الإسلامية العالمية الأكبر في العالم وثالث أقدم جامعة في العالم بعد جامعتي الزيتونة والقرويين، وهي توجد في القاهرة في مصر</p>
        </div>
    </div>
  )
}

export default InfoAR