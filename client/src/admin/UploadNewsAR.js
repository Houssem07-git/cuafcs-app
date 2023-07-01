import React from 'react'
import { useState } from 'react'
import { Typography, TextField, Button, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createNewsAR } from '../actions/NewsAR'
import './AdminStyle.css'

function UploadNewsAR() {
    let [ListOfNewsAR,setListOfNewsAR] = useState({
        title:'',
        body:'',
        link:'',
        selectedFile:''
    }) 
    
    const NewsARDispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
        NewsARDispatch(createNewsAR(ListOfNewsAR))
        console.log(ListOfNewsAR)
    }
  return (
    <div className='admin'>
        <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit}>
            <Paper elevation={4}>
                <Typography variant='h6'>Crée des News</Typography>
                <TextField name='title' variant='outlined' label='Title' fullWidth value={ListOfNewsAR.title} onChange={(e)=>setListOfNewsAR({...ListOfNewsAR,title: e.target.value})}/>
                <TextField name='body' variant='outlined' label='Body' fullWidth value={ListOfNewsAR.body} onChange={(e)=>setListOfNewsAR({...ListOfNewsAR,body: e.target.value})}/>
                <TextField name='link' variant='outlined' label='Link' fullWidth value={ListOfNewsAR.link} onChange={(e)=>setListOfNewsAR({...ListOfNewsAR,link: e.target.value})}/>
                <FileBase 
                    type='file'
                    multiple={false}
                    onDone={({base64}) => setListOfNewsAR({...ListOfNewsAR, selectedFile: base64})}
                />
                <Button variant="contained" color='primary' size="large" type="submit" fullwidth>Submit</Button>
            </Paper>
        </form>
    </div>
  )
}

export default UploadNewsAR