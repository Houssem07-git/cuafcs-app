import express from 'express'
import {getEvenementsENAR, createEvenementsENAR} from '../controllers/EvenementsENAR.js'

const router = express.Router()

router.get('/', getEvenementsENAR)
router.post('/',createEvenementsENAR)

export default router;