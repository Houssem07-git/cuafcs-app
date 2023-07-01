import express from 'express'
import {getEvenementsEN, createEvenementsEN} from '../controllers/EvenementsEN.js'

const router = express.Router()

router.get('/', getEvenementsEN)
router.post('/',createEvenementsEN)

export default router;