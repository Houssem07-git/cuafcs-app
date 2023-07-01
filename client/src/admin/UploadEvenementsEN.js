import React from 'react'
import { useState } from 'react'
import { Typography, TextField, Button, Paper, Box} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { createEvenementsEN } from '../actions/EvenementsEN'
import './AdminStyle.css'

function UploadEvenementsEN() {
    let [listOfEvenementsEN,setListOfEvenementsEN] = useState({
        title: '',
        body:'',
        day: 0,
        month:'',
        link:'',
        type:''
    })
    const EvenementENDispatch = useDispatch()

    const handleSubmit = async(e) =>{
        e.preventDefault();
        EvenementENDispatch(createEvenementsEN(listOfEvenementsEN))
        console.log(listOfEvenementsEN)
    }
    return (
        <div className='admin'>
            <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit}>
                <Paper elevation={4} className='paper'>
                    <Typography variant='h6'><Box fontWeight={800}>Crée des évenements en cours de travail FR</Box></Typography>
                    <TextField name='title' variant='outlined' label='Title' fullWidth value={listOfEvenementsEN.title} onChange={(e)=>setListOfEvenementsEN({...listOfEvenementsEN,title: e.target.value})}/>
                    <TextField name='body' variant='outlined' label='Body' fullWidth value={listOfEvenementsEN.body} onChange={(e)=>setListOfEvenementsEN({...listOfEvenementsEN,body: e.target.value})}/>
                    <TextField name='link' variant='outlined' label='Link' fullWidth value={listOfEvenementsEN.link} onChange={(e)=>setListOfEvenementsEN({...listOfEvenementsEN,link: e.target.value})}/>
                    <TextField name='type' variant='outlined' label='Type' fullWidth value={listOfEvenementsEN.type} onChange={(e)=>setListOfEvenementsEN({...listOfEvenementsEN,type: e.target.value})}/>
                    <Button variant="contained" color='primary' size="large" type="submit" fullwidth>Submit</Button>
                </Paper>
            </form>
        </div>
    )
}

export default UploadEvenementsEN