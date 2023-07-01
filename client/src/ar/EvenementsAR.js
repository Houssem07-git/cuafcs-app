import {useEffect} from 'react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { CircularProgress } from '@mui/material';
import Header from '../fr/Header.js'
import NavbarAR from './NavbarAR.js'
import FooterAR from './FooterAR.js'
import './EvenementsAR.css';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { getEvenement } from '../actions/evenementAR.js';

function EvenementsAR() {
  const EvenementCompletsARDispatch = useDispatch()
  useEffect(()=>{
    EvenementCompletsARDispatch(getEvenement())
  },[EvenementCompletsARDispatch])

  const EvenementsCompletsAR = useSelector( state =>state.evenementsAR)
  console.log(EvenementsCompletsAR)
  return (
    <div className='evenementsAR'>
      <Header/>
      <NavbarAR/>
      <div className="evenementsAR-content">
        <div className="title">
          <h1>المشاريع المنجزة</h1>
          <EventAvailableIcon className="eai"/>
        </div>
        {
          !EvenementsCompletsAR.length ? <CircularProgress/>:(
            EvenementsCompletsAR.map((EvenementComplets)=>(
              <div className="mm" key={EvenementComplets._id}>
              <div className='agenda'>
                <h3 className="mm-day">{EvenementComplets.day}</h3>
                <h3 className="mm-month">{EvenementComplets.month}</h3>
              </div>
              <div className="mm-content">
                <h1><a href={EvenementComplets.link} className="l">{EvenementComplets.title}</a></h1>
                <p className='mm-description'>{EvenementComplets.body}</p>
                <p className="mm-footer">{EvenementComplets.createdAt} · {EvenementComplets.type}</p>
              </div> 
            </div>
            ))
          )
        }
    
        <div className="mm">
          <div className='agenda'>
            <h3 className="mm-day">18</h3>
            <h3 className="mm-month">AOUT</h3>
          </div>
          <div className="mm-content">
            <h1><a href='#' className="l">افتتاح المؤتمر العربي الفرنسي الأول للتعاون العلمي بجامعة أل البيت</a></h1>
            <p className='mm-description'>وأكد رئيس رابطة الجامعات العربية والفرنسية الدكتور أبو الفضل محمد أنهذا المؤتمر سوف يتيح فرصة حقيقية لتبادل الخبرات في ميادين متعددة بين
    رابطة الجامعات العربية والفرنسية تستأنف مسار انشاء جامعة عربية</p>
            <p className="mm-footer">18 aout 2014 · النشاطات في الصحافة  العربية ووسائل الاتصال الإلكتروني</p>
          </div> 
        </div>
        <div className="mm">
          <div className='agenda'>
            <h3 className="mm-day">18</h3>
            <h3 className="mm-month">AOUT</h3>
          </div>
          <div className="mm-content">
            <h1><a href='#' className="l">افتتاح المؤتمر العربي الفرنسي الأول للتعاون العلمي بجامعة أل البيت</a></h1>
            <p className='mm-description'>وأكد رئيس رابطة الجامعات العربية والفرنسية الدكتور أبو الفضل محمد أنهذا المؤتمر سوف يتيح فرصة حقيقية لتبادل الخبرات في ميادين متعددة بين
    رابطة الجامعات العربية والفرنسية تستأنف مسار انشاء جامعة عربية</p>
            <p className="mm-footer">18 aout 2014 · النشاطات في الصحافة  العربية ووسائل الاتصال الإلكتروني</p>
          </div> 
        </div>
        <div className="mm">
          <div className='agenda'>
            <h3 className="mm-day">19</h3>
            <h3 className="mm-month">MAR</h3>
          </div>
          <div className="mm-content">
            <h1><a href='#' className="l">رئيس رابطة الجامعات العربية و الفرنسية للتعاون العلمي “أحد طلاب</a></h1>
            <p className='mm-description'>رئيس رابطة الجامعات العربية و الفرنسية للتعاون العلمي "ابي الفضل محمد بن هندة "وهواحد طلاب المفكر "مالك بن نبي "قام بزيارة لجامعة الجلفة "زيان ...</p>
            <p className="mm-footer">19 mars 2016 · النشاطات في الصحافة  العربية ووسائل الاتصال الإلكتروني</p>
          </div> 
        </div>
        <div className="mm">
          <div className='agenda'>
            <h3 className="mm-day">19</h3>
            <h3 className="mm-month">MAR</h3>
          </div>
          <div className="mm-content">
            <h1><a href='#' className="l">معرض مصور خلال اللقاء الذي جمع “رئيس رابطة الجامعات العربية</a></h1>
            <p className='mm-description'>معرض مصور خلال اللقاء الذي جمع رئيس" رابطة الجامعات العربية و الفرنسية للتعاون العلمي" أحد طلاب المفكر الجزائري مالك بن نبي. الدكتور "أبي</p>
            <p className="mm-footer">19 mars 2016 · النشاطات في الصحافة  العربية ووسائل الاتصال الإلكتروني</p>
          </div> 
        </div>
      </div>
      <FooterAR/>
    </div>
  )
}

export default EvenementsAR