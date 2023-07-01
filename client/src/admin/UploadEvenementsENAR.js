import React from 'react'
import { useState } from 'react'
import { Typography, TextField, Button, Paper, Box} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { createEvenementsENAR } from '../actions/EvenementsENAR'
import './AdminStyle.css'

function UploadEvenementsENAR() {
    let [listOfEvenementsENAR,setListOfEvenementsENAR] = useState({
        title: '',
        body:'',
        day: 0,
        month:'',
        link:'',
        type:''
    })
    const EvenementENARARDispatch = useDispatch()

    const handleSubmit = async(e) =>{
        e.preventDefault();
        EvenementENARARDispatch(createEvenementsENAR(listOfEvenementsENAR))
        console.log(listOfEvenementsENAR)
    }
    return (
        <div className='admin'>
            <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit}>
                <Paper elevation={4} className='paper'>
                    <Typography variant='h6'><Box fontWeight={800}>Crée des évenements en cours de travail</Box></Typography>
                    <TextField name='title' variant='outlined' label='Title' fullWidth value={listOfEvenementsENAR.title} onChange={(e)=>setListOfEvenementsENAR({...listOfEvenementsENAR,title: e.target.value})}/>
                    <TextField name='body' variant='outlined' label='Body' fullWidth value={listOfEvenementsENAR.body} onChange={(e)=>setListOfEvenementsENAR({...listOfEvenementsENAR,body: e.target.value})}/>
                    <TextField name='link' variant='outlined' label='Link' fullWidth value={listOfEvenementsENAR.link} onChange={(e)=>setListOfEvenementsENAR({...listOfEvenementsENAR,link: e.target.value})}/>
                    <TextField name='type' variant='outlined' label='Type' fullWidth value={listOfEvenementsENAR.type} onChange={(e)=>setListOfEvenementsENAR({...listOfEvenementsENAR,type: e.target.value})}/>
                    <Button variant="contained" color='primary' size="large" type="submit" fullwidth>Submit</Button>
                </Paper>
            </form>
        </div>
    )
}

export default UploadEvenementsENAR