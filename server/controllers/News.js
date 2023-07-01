import News from "../models/News.js";

export const getNews = async(req,res) =>{
    try {
        const New = await News.find();
        res.status(200).json(New)   
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const createNewsAR = async(req,res) =>{
    const {title,body,link,selectedFile} = req.body
    const newsAR = new News({title,body,link,selectedFile})
    try {
        await newsAR.save()
        res.status(201).json(newsAR)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}