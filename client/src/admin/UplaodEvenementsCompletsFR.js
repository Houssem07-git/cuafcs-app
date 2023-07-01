import React from 'react'
import { useState } from 'react'
import { Typography, TextField, Button, Paper, Box} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { createEvenementsCompletsFR } from '../actions/evenementsFR'
import './AdminStyle.css'

function UploadEvenementsCompletsFR() {
    let [listOfEvenements,setListOfEvenements] = useState({
        title: '',
        body:'',
        day: 0,
        month:'',
        link:'',
        type:''
    })
    const EvenementCompletsFRDispatch = useDispatch()

    const handleSubmit = async(e) =>{
        e.preventDefault();
        EvenementCompletsFRDispatch(createEvenementsCompletsFR(listOfEvenements))
        console.log(listOfEvenements)
    }
    return (
        <div className='UploadEvenementCompletsFR'>
            <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit}>
                <Paper elevation={4} className='paper'>
                    <Typography variant='h6'><Box fontWeight={800}>Crée des évenements complets FR</Box></Typography>
                    <TextField name='title' variant='outlined' label='Title' fullWidth value={listOfEvenements.title} onChange={(e)=>setListOfEvenements({...listOfEvenements,title: e.target.value})}/>
                    <TextField name='body' variant='outlined' label='Body' fullWidth value={listOfEvenements.body} onChange={(e)=>setListOfEvenements({...listOfEvenements,body: e.target.value})}/>
                    <TextField name='day' variant='outlined' label='Day' fullWidth value={listOfEvenements.day} onChange={(e)=>setListOfEvenements({...listOfEvenements,day: e.target.value})}/>
                    <TextField name='month' variant='outlined' label='Month' fullWidth value={listOfEvenements.month} onChange={(e)=>setListOfEvenements({...listOfEvenements,month: e.target.value})}/>
                    <TextField name='link' variant='outlined' label='Link' fullWidth value={listOfEvenements.link} onChange={(e)=>setListOfEvenements({...listOfEvenements,link: e.target.value})}/>
                    <TextField name='type' variant='outlined' label='Type' fullWidth value={listOfEvenements.type} onChange={(e)=>setListOfEvenements({...listOfEvenements,type: e.target.value})}/>
                    <Button variant="contained" color='primary' size="large" type="submit" fullwidth>Submit</Button>
                </Paper>
            </form>
        </div>
    )
}

export default UploadEvenementsCompletsFR