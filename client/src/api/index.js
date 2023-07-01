import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'});
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})


export const getEvenementsComplets = () => API.get('/EvenementsCompletsAR')
export const createEvenementsComplets = (newEvenement) => API.post('/EvenementsCompletsAR',newEvenement)

export const getEvenementsCompletsFR = () => API.get('/EvenementsCompletsFR')
export const createEvenementsCompletsFR = (newEvenement) => API.post('/EvenementsCompletsFR',newEvenement)

export const getNewsAR = () => API.get('/NewsAR')
export const createNewsAR = (newsAR) => API.post('/NewsAR',newsAR)

export const getNewsFR = () => API.get('/NewsFR')
export const createNewsFR = (newsAR) => API.post('/NewsFR',newsAR)

export const getEvenementENAR = () => API.get('/EvenementsENAR')
export const createEvenementsENAR = (newEvenementENAR) => API.post('/EvenementsENAR',newEvenementENAR)

export const getEvenementEN = () => API.get('/EvenementsEN')
export const createEvenementsEN = (newEvenementENAR) => API.post('/EvenementsEN',newEvenementENAR)

export const getAlbums = () => API.get('/Albums')
export const createAlbums = (newAlbum) => API.post('/Albums',newAlbum)

export const signup = (formData) => API.post('/users/signup',formData)
export const signin = (formData) => API.post('/users/signin',formData)