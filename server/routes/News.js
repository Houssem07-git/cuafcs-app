import express from 'express'
import {createNewsAR, getNews} from '../controllers/News.js';

const router = express.Router()

router.get('/', getNews)
router.post('/',createNewsAR)

export default router;