import express from 'express'
import {createAlbums, getAlbums} from '../controllers/Albums.js';

const router = express.Router()

router.get('/', getAlbums)
router.post('/',createAlbums)

export default router;