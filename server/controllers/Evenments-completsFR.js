import EvenementsCompletsFR from "../models/Evenements-completsFR.js";

export const getEvenementsCompletsFR = async(req,res) =>{
    try {
        const Evenements = await EvenementsCompletsFR.find();
        res.status(200).json(Evenements)   
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const createEvenementsCompletsFR = async(req,res) =>{
    const {title,body,day,month,link,type} = req.body
    const newEvenement = new EvenementsCompletsFR({title,body,day,month,link,type})

    try {
        await newEvenement.save()
        res.status(201).json(newEvenement)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}