import {useEffect} from 'react'
import EventNoteIcon from '@mui/icons-material/EventNote';
import Header from '../fr/Header.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import './Evenements.css'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {getEvenementEN} from '../actions/EvenementsEN.js'

function EvenmentsEN() {
    const EvenementENDispatch = useDispatch()
    useEffect(()=>{
        EvenementENDispatch(getEvenementEN())
    },[EvenementENDispatch])

    const EvenementsEN = useSelector((state)=>state.evenementsEN)
    console.log(EvenementsEN)

  return (
    <div className='EvenementsEN'>
        <Header />
        <Navbar />
        <div className="evenements-content">
        <div className="title">
            <EventNoteIcon className="eai"/>
            <h1>Les évenements en cours de construction</h1>
        </div>
        {
          EvenementsEN.map((e)=>(
            <div className="mmFR">
              <div className='agenda'>
                <h3 className="mm-day">{e.day}</h3>
                <h3 className="mm-month">{e.month}</h3>
              </div>
              <div className="mm-contentFR">
                <h1><a href={e.link} className="l">{e.title}</a></h1>
                <p className='mm-descriptionFR'>{e.body}</p>
                <p className="mm-footerFR">{e.createdAt} · {e.type}</p>
              </div> 
            </div>
          ))
        }
        </div>
        <Footer />
    </div>
  )
}

export default EvenmentsEN