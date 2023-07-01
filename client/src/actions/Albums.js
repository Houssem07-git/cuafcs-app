import * as api from '../api'

export const getAlbums = () => async (AlbumsDispatch) => {
    try {
        const {data} = await api.getAlbums()
        AlbumsDispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createAlbums = (newAlbum) => async (AlbumsDispatch) =>{
    try {
        const {data} = await api.createAlbums(newAlbum)
        AlbumsDispatch({type:'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}