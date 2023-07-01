import {useEffect} from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import shot1 from '../img/shot1.png'
import shot2 from '../img/shot2.png'
import shot4 from '../img/shot4.jpg'
import {useSelector} from 'react-redux'
import { Link } from '@material-ui/core'
import './NewsAR.css'
import {useDispatch} from 'react-redux'
import { getNewsAR } from '../actions/NewsAR';

function NewsAR() {
    const NewsARDispatch = useDispatch()
    useEffect(()=>{
        NewsARDispatch(getNewsAR())
    },[NewsARDispatch])

    const NewAR = useSelector((state)=>state.NewsAR)
    console.log(NewAR)
  return (
    <div className="groupAR">
        <div className="EvenementsAR">
            <div className="eve-introAR">
                <h1 id="tAR">الأنشطة القادمة</h1>
                <StarOutlineIcon fontSize="large" className="star"></StarOutlineIcon>
            </div>
            <div className="eve">
                <div className="évenementAR">
                    <Link style={{color:'#27ae60'}}><h2>عنوان 01</h2></Link>
                    <div className="date"><p id="day">03</p><p id="month">OCT</p></div>
                </div>
                <div className="évenementAR">
                    <Link style={{color:'#27ae60'}}><h2>عنوان 02</h2></Link>
                    <div className="date"><p id="day">03</p><p id="month">OCT</p></div>
                </div>
                <div className="évenementAR">
                    <Link style={{color:'#27ae60'}}><h2>عنوان 03</h2></Link>
                    <div className="date"><p id="day">03</p><p id="month">OCT</p></div>
                </div>
            </div>
        </div>
        <div className="NewsAR">
            <div className="news-introAR">
                <h1 id="tAR">الإخبارية</h1>
                <WhatshotIcon fontSize="large"></WhatshotIcon>
            </div>
            <div className="News-groupAR">
                {
                    NewAR.map((n)=>(
                        <div className="NewAR">
                            <a href={n.link}><img src={n.selectedFile} alt="shot1" id="shot"></img></a>
                            <Link color="primary" to={n.link}><h2>{n.title}</h2></Link>
                            <p>{n.body}</p>
                        </div>
                    ))
                }
                <div className="NewAR">
                    <a href="#"><img src={shot1} alt="shot1" id="shot"></img></a>
                    <Link color="primary"><h2>زيارة في الاردن</h2></Link>
                    <p>استقبل وزير التعليم العالي في المملكة الأردنية رئيس الكواف السيد أبو الفضل محمد بن هندة في زيارة مجاملة في إطار التعاون العلمي بين الجامعات</p>
                </div>
                <div className="NewAR">
                    <a href="#"><img src={shot2} alt="shot2" id="shot"></img></a>
                    <Link color="primary"><h2>زيارة في تونس</h2></Link>
                    <p>استقبل وزير التعليم العالي في الجمهورية التونسية رئيس الكواف السيد أبو الفضل محمد بن هندة في زيارة مجاملة في إطار التعاون العلمي بين الجامعات</p>
                </div>
                <div className="NewAR">
                    <a href="#"><img src={shot4} alt="shot4" id="shot"></img></a>
                    <Link color="primary"><h2>استقبال في باريس</h2></Link>
                    <p>استقبل وزير خارجية الجمهورية الفرنسية رئيس الكواف السيد أبو الفضل محمد بن هندة في قاعة الشرف في زيارة مجاملة في إطار التعاون العلمي بين الجامعات</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsAR