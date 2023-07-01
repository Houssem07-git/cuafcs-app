import {useEffect} from 'react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { CircularProgress } from '@mui/material';
import Header from '../fr/Header.js'
import Navbar from '../fr/Navbar.js'
import Footer from './Footer.js';
import './Evenements.css'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { getEvenementFR } from '../actions/evenementsFR.js';

function Evenements() {
  const EvenementCompletsFRDispatch = useDispatch()
  useEffect(()=>{
    EvenementCompletsFRDispatch(getEvenementFR())
  },[EvenementCompletsFRDispatch])

  const EvenementsComplets = useSelector( state =>state.evenementsFR)
  console.log(EvenementsComplets)

  return (
    <div className="Evenements">
      <Header/>
      <Navbar />
      <div className="evenements-content">
        <div className="title">
          <EventAvailableIcon className="eai"/>
          <h1>Les évenements Complets</h1>
        </div>
        {
          !EvenementsComplets.length ? <CircularProgress/>:(
            EvenementsComplets.map((EvenementComplets)=>(
              <div className="mmFR" key={EvenementComplets._id}>
              <div className='agenda'>
                <h3 className="mm-day">{EvenementComplets.day}</h3>
                <h3 className="mm-month">{EvenementComplets.month}</h3>
              </div>
              <div className="mm-contentFR">
                <h1><a href={EvenementComplets.link} className="l">{EvenementComplets.title}</a></h1>
                <p className='mm-descriptionFR'>{EvenementComplets.body}</p>
                <p className="mm-footerFR">{EvenementComplets.createdAt} · {EvenementComplets.type}</p>
              </div> 
            </div>
            ))
          )
        }
    </div>
    <Footer />
    </div>
  )
}
export default Evenements