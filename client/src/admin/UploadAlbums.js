import { useState } from 'react'
import { Typography, Button, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createAlbums } from '../actions/Albums'
import './AdminStyle.css'

function UploadAlbums() {
    let [ListOfAlbums,setListOfAlbums] = useState({
        selectedFile:''
    }) 
    
    const AlbumsDispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
        AlbumsDispatch(createAlbums(ListOfAlbums))
        console.log(ListOfAlbums)
    }
  return (
    <div className='UploadAlbums'>
        <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit}>
            <Paper elevation={4}>
                <Typography variant='h6'>Crée des Albums</Typography>
                <FileBase 
                    type='file'
                    multiple={false}
                    onDone={({base64}) => setListOfAlbums({...ListOfAlbums, selectedFile: base64})}
                />
                <Button variant="contained" color='primary' size="large" type="submit" fullwidth>Submit</Button>
            </Paper>
        </form>
    </div>
  )
}

export default UploadAlbums