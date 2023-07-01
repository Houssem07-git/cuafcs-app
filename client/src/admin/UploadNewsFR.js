import React from 'react'
import { useState } from 'react'
import { Typography, TextField, Button, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createNewsFR } from '../actions/NewsFR'
import './AdminStyle.css'


function UploadNewsFR() {
    let [ListOfNews,setListOfNews] = useState({
        title:'',
        body:'',
        link:'',
        selectedFile:''
    }) 
    
    const NewsFRDispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
        NewsFRDispatch(createNewsFR(ListOfNews))
        console.log(ListOfNews)
    }
  return (
    <div className='admin'>
        <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit}>
            <Paper elevation={4}>
                <Typography variant='h6'>Crée des News FR</Typography>
                <TextField name='title' variant='outlined' label='Title' fullWidth value={ListOfNews.title} onChange={(e)=>setListOfNews({...ListOfNews,title: e.target.value})}/>
                <TextField name='body' variant='outlined' label='Body' fullWidth value={ListOfNews.body} onChange={(e)=>setListOfNews({...ListOfNews,body: e.target.value})}/>
                <TextField name='link' variant='outlined' label='Link' fullWidth value={ListOfNews.link} onChange={(e)=>setListOfNews({...ListOfNews,link: e.target.value})}/>
                <FileBase 
                    type='file'
                    multiple={false}
                    onDone={({base64}) => setListOfNews({...ListOfNews, selectedFile: base64})}
                />
                <Button variant="contained" color='primary' size="large" type="submit" fullwidth>Submit</Button>
            </Paper>
        </form> 
    </div>
  )
}

export default UploadNewsFR