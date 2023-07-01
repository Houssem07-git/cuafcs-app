import * as api from '../api'

export const getNewsAR = () => async (NewsARDispatch) => {
    try {
        const {data} = await api.getNewsAR()
        NewsARDispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createNewsAR = (newAR) => async (NewsARDispatch) =>{
    try {
        const {data} = await api.createNewsAR(newAR)
        NewsARDispatch({type:'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}