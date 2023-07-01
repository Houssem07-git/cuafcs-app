import * as api from '../api'

export const getEvenementENAR = () => async (EvenementENARARDispatch) => {
    try {
        const {data} = await api.getEvenementENAR()
        EvenementENARARDispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createEvenementsENAR = (evenementsENAR) => async (EvenementENARARDispatch) =>{
    try {
        const {data} = await api.createEvenementsENAR(evenementsENAR)
        EvenementENARARDispatch({type:'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}