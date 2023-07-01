import NewsFR from "../models/NewsFR.js";

export const getNewsFR = async(req,res) =>{
    try {
        const NewFR = await NewsFR.find();
        res.status(200).json(NewFR)   
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const createNewsFR = async(req,res) =>{
    const {title,body,link,selectedFile} = req.body
    const newsFR = new News({title,body,link,selectedFile})
    try {
        await newsFR.save()
        res.status(201).json(newsFR)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}