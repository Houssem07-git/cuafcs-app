import Albums from '../models/Albums.js';

export const getAlbums = async(req,res) =>{
    try {
        const Album = await Albums.find();
        res.status(200).json(Album)   
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const createAlbums = async(req,res) =>{
    const {selectedFile} = req.body
    const Album = new Albums({selectedFile})
    try {
        await Album.save()
        res.status(201).json(Album)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}