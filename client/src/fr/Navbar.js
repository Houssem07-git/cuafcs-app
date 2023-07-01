import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import './Navbar.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Toolbar,Avatar,Typography,Button} from '@material-ui/core'
import useStyles from '../AuthStyle/styles'


function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [isActive , setIsActive] = useState(false)
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
    <div className="Navbar">
        <Link to="/fr/Accueil" color="primary" id="l">
            Accueil
        </Link>
        <Link to='/fr/Presentation' color="primary" id="l">
            Présentation
        </Link>
        <Link to="/fr/Album" color="primary" id="l">
            Album
        </Link>
        <div class="dropdown">
            <button class="btn btn-link dropdown-toggle" type="button" id="l" data-bs-toggle="dropdown" aria-expanded="false">
                Évenements
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="/fr/evenements-completes">évenements completes</a></li>
                <li><a class="dropdown-item" href="/fr/evenements-en-cours-de-construction">évenements en cours de construction</a></li>
            </ul>
        </div>
        <Link href="#" color="primary" id="l">
            Rapports
        </Link>
        <div className='lang'>
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
            <Toolbar className={classes.toolbar}>
                {
                    user?.result ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant='h6'>{user?.result.name}</Typography>
                            <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Déconnxion</Button>
                        </div>
                    )
                    :(
                        <Button component={Link} to='/auth' variant='outlined' color='primary' id='b'>S'inscrire</Button>
                    )
                }
            </Toolbar>
    </div>
  )
}

export default Navbar
