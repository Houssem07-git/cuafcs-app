import * as api from '../api'

export const getNewsFR = () => async (NewsFRDispatch) => {
    try {
        const {data} = await api.getNewsFR()
        NewsFRDispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createNewsFR = (newFR) => async (NewsFRDispatch) =>{
    try {
        const {data} = await api.createNewsFR(newFR)
        NewsFRDispatch({type:'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}