import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {Toolbar, Avatar, Typography, Button} from '@material-ui/core';
import './NavbarAR.css'
import useStyles from '../AuthStyle/styles'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function NavbarAR() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    //const [isActive , setIsActive] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const classes = useStyles()

    const logout = () =>{
        dispatch({type: 'LOGOUT'})
        navigate('/auth')
        setUser(null)
    }

    useEffect(() =>{
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    const languages = [
        {
            'code': 'fr',
            'name': 'Français',
            'country_code': 'fr'
        },
        {
            'code': 'ar',
            'name': 'العربية',
            'country_code': 'sa'
        }
    ]
    
  return (
    <div className="NavbarAR">
        <div className='navbar2'>
            <Toolbar className={classes.toolbar}>
                {
                    user?.result ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant='h6'>{user?.result.name}</Typography>
                            <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>خروج</Button>
                        </div>
                    )
                    :(
                        <Button component={Link} to='/auth' variant='outlined' color='primary' id='bAR'>تسجيل</Button>
                    )
                }
            </Toolbar>
            <div className='langAR'>
                    <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-globe"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {languages.map(({code,name,country_code})=>(
                            <li key={country_code}>
                                <a class="dropdown-item" href={`/${code}/Accueil`}><span className={`flag-icon flag-icon-${country_code}`}></span>{name}</a>
                            </li> 
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className='navbar3'>
        <Link to="/ar/Rapports" color="primary" id="lAR">
            تقارير
        </Link>
        <div class="dropdown">
            <button class="btn btn-link dropdown-toggle" type="button" id="lAR" data-bs-toggle="dropdown" aria-expanded="false">
                أحداث
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="/ar/evenements-completes">المشاريع المنجزة</a></li>
                <li><a class="dropdown-item" href="/ar/evenements-en-cours">مشاريع في طور الإنجاز</a></li>
            </ul>
        </div>
        {/*<div className="dropdown-btn" id="lAR" onClick={(e) =>
        setIsActive(!isActive)}>أحداث
            <ArrowDropDownIcon/>
        </div>
        {isActive && (
            <div className="dropdown-content">
                <div className="dropdown-item">
                    <Link to="/ar/evenements-completes" className='items'>المشاريع المنجزة</Link>
                </div>
                <div className="dropdown-item">
                    <Link to="/ar/evenements-en-cours" className='items'>مشاريع في طور الإنجاز</Link>
                </div>
            </div>
        )}*/}
        {/*<Link to="/حدث" color="primary" id="lAR">
            أحداث
        </Link>*/}
        <Link to="/ar/Album" color="primary" id="lAR">
            صور
        </Link>
        <Link to="/ar/Presentation" color="primary" id="lAR">
            مقدمة
        </Link>
        <Link to="/ar/Accueil" color="primary" id="lAR">
            استقبال
        </Link>
        </div>
        </div>
  )
}

export default NavbarAR