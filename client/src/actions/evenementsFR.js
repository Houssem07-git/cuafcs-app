import * as api from '../api'

export const getEvenementFR = () => async (EvenementCompletsFRDispatch) => {
    try {
        const {data} = await api.getEvenementsCompletsFR()
        EvenementCompletsFRDispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createEvenementsCompletsFR = (evenementsFR) => async (EvenementCompletsFRDispatch) =>{
    try {
        const {data} = await api.createEvenementsCompletsFR(evenementsFR)
        EvenementCompletsFRDispatch({type:'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}