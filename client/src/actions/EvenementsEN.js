import * as api from '../api'

export const getEvenementEN = () => async (EvenementENFRDispatch) => {
    try {
        const {data} = await api.getEvenementEN()
        EvenementENFRDispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createEvenementsEN = (evenementsEN) => async (EvenementENFRDispatch) =>{
    try {
        const {data} = await api.createEvenementsEN(evenementsEN)
        EvenementENFRDispatch({type:'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}