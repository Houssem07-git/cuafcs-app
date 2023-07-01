import express from 'express'
import {createNewsFR, getNewsFR} from '../controllers/NewsFR.js';

const router = express.Router()

router.get('/', getNewsFR)
router.post('/',createNewsFR)

export default router;