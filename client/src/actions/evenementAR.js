import * as api from '../api'

export const getEvenement = () => async (EvenementCompletsARDispatch) => {
    try {
        const {data} = await api.getEvenementsComplets()
        EvenementCompletsARDispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createEvenementsComplets = (evenementsAR) => async (EvenementCompletsARDispatch) =>{
    try {
        const {data} = await api.createEvenementsComplets(evenementsAR)
        EvenementCompletsARDispatch({type:'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}