import {useEffect} from 'react'
import EventNoteIcon from '@mui/icons-material/EventNote';
import Header from '../fr/Header.js'
import NavbarAR from './NavbarAR.js'
import FooterAR from './FooterAR.js'
import './EvenementsAR.css'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { getEvenementENAR } from '../actions/EvenementsENAR.js';

function EvenementsAR() { 
  const EvenementENARARDispatch = useDispatch()
  useEffect(()=>{
    EvenementENARARDispatch(getEvenementENAR())
  },[EvenementENARARDispatch])

  const EvenementsENAR = useSelector((state)=>state.evenementsENAR)
  console.log(EvenementsENAR)

  return (
    <div className='evenementsAR'>
      <Header/>
      <NavbarAR/>
      <div className="evenementsAR-content">
        <div className="title">
          <h1>المشاريع في طور الإنجاز</h1>
          <EventNoteIcon className="eai"/>
        </div>
        {
          EvenementsENAR.map((e)=>(
            <div className="mm">
              <div className='agenda'>
                <h3 className="mm-day">{e.day}</h3>
                <h3 className="mm-month">{e.month}</h3>
              </div>
              <div className="mm-content">
                <h1><a href={e.link} className="l">{e.title}</a></h1>
                <p className='mm-description'>{e.body}</p>
                <p className="mm-footer">{e.createdAt} · {e.type}</p>
              </div> 
            </div>
          ))
        }
        <div className="mm">
          <div className='agenda'>
            <h3 className="mm-day">09</h3>
            <h3 className="mm-month">juan</h3>
          </div>
          <div className="mm-content">
            <h1><Link to="/ar/evenements-en-cours/UFA" className="l">إنشاء جامعة عربية فرنـسـية رائدة للتعليم العالي والبحـث العلمي</Link></h1>
            <p className='mm-description'>انبثق  مشروع إنشاء جامعة عربية فرنسية رائدة للتعليم العالي والبحث العلمي من مبادرة الأستاذ الجامعي أبي الفضل محمد بن هـنـدة، رئيس رابطة الجامعات العربية والفرنسية للتعاون العلمي، وذلك أن هذا المشروع يعد من صميم أهداف  تأسيس الرابطة</p>
            <p className="mm-footer">09-10 juan 2010 · الجامعة الـعربية الفرنسية</p>
          </div> 
        </div>
      </div>
      <FooterAR/>
    </div>
  )
}

export default EvenementsAR