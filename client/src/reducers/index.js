import { combineReducers } from "redux";
import evenementsAR from './evenementAR'
import NewsAR from './NewsAR'
import evenementsENAR from './EvenementsENAR.js'
import albums from './Albums.js'
import auth from './Auth.js'
import evenementsFR from './evenementsFR.js'
import evenementsEN from './EvenementsEN.js'
import NewFR from './NewsFR.js'

const reducers = combineReducers({evenementsAR,NewsAR,evenementsENAR,evenementsFR,NewFR,evenementsEN,albums,auth})

export default reducers