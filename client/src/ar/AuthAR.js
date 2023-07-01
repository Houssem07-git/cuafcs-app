import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Avatar, Button, Paper, Grid, Typography, Container, FormControlLabel} from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useNavigate} from 'react-router-dom'
import useStyles from '../AuthStyle/styles'
import Input from '../AuthStyle/Input'
import Header from '../fr/Header'
import Footer from './FooterAR'
import Navbar from './NavbarAR'
import {signin,signup} from '../actions/Auth.js'

function AuthAR() {
  const classes = useStyles()  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialData = {firstName:'',lastName:'',email:'',password:'',confirmPassword:''}
  const [form,setForm] = useState(initialData)
  const [showPassword1,setShowPassword1] = useState(false)
  const [showPassword2,setShowPassword2] = useState(false)
  const [isSignup,setIsSignup] = useState(false)

  const switchMode = () =>{
    setIsSignup(()=> !isSignup)
    setShowPassword1(false)
    setShowPassword2(false)
  }

  const handleShowPassword1 = () =>{
    setShowPassword1(() => !showPassword1)
  }

  const handleShowPassword2 = () =>{
    setShowPassword2(() => !showPassword2)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(isSignup){
      dispatch(signup(form,navigate))
    }else{
      dispatch(signin(form,navigate))
    }
  }

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <div className='AuthAR'>
      <Header />
      <Navbar />
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h5'>{isSignup ? 'إنشاء حساب جديد' : 'أدخل حسابك'}</Typography>
                <Grid container spacing={2}>
                  {
                    isSignup ?(
                      <>
                      <form autoComplete='off' nonValidate onSubmit={handleSubmit}>
                        <Input name='firstName' label='الاسم'  handleChange={handleChange} autoFocus />
                        <Input name='lastName' label='اللقب' handleChange={handleChange} />
                        <Input name="email" label="البريد الالكتروني" handleChange={handleChange} type="email" />
                        <Input name="password" label="كلمة المرور" handleChange={handleChange} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
                        <Input name="confirmPassword" label="تأكيد كلمة المرور" handleChange={handleChange} type={showPassword2 ? 'text' : 'password'} handleShowPassword={handleShowPassword2} />
                        <Button type="submit" fullWidth variant='contained' color='primary' className={classes.submit}>إنشاء الحساب</Button>
                      </form>
                      </>
                    ):(
                      <>
                      <form autoComplete='off' nonValidate onSubmit={handleSubmit}>
                        <Input name="email" label="البريد الالكتروني" handleChange={handleChange} type="email"/>
                        <Input name="password" label="كلمة المرور" handleChange={handleChange} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1}/>
                        <Button type="submit" fullWidth variant='contained' color='primary' className={classes.submit}>
                          تسجيل الدخول
                        </Button>
                      </form>
                      </>
                    )
                  }
                </Grid>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Button onClick={switchMode}>
                      { isSignup ? 'لدي حساب من قبل ؟ سجل' : "ليس لدي حساب قط ؟ إنشاء حساب" }
                    </Button>
                  </Grid>
                </Grid>
            </Paper>
        </Container>
      <Footer />
    </div>
  )
}

export default AuthAR