import express from 'express'
import {getEvenementsComplets, createEvenementsComplets} from '../controllers/Evenements-complets.js';

const router = express.Router()

router.get('/', getEvenementsComplets)
router.post('/',createEvenementsComplets)

export default router;