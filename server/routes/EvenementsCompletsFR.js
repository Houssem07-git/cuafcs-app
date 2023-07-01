import express from 'express'
import {getEvenementsCompletsFR, createEvenementsCompletsFR} from '../controllers/Evenments-completsFR.js';

const router = express.Router()

router.get('/', getEvenementsCompletsFR)
router.post('/',createEvenementsCompletsFR)

export default router;