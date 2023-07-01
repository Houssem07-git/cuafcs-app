import EvenementsComplets from "../models/Evenements-complets.js";

export const getEvenementsComplets = async(req,res) =>{
    try {
        const Evenements = await EvenementsComplets.find();
        res.status(200).json(Evenements)   
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const createEvenementsComplets = async(req,res) =>{
    const {title,body,day,month,link,type} = req.body
    const newEvenement = new EvenementsComplets({title,body,day,month,link,type})

    try {
        await newEvenement.save()
        res.status(201).json(newEvenement)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}