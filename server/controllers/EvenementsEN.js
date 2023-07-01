import EvenementsEnCoursDeTravail from "../models/EvenementsEN.js";

export const getEvenementsEN = async(req,res) =>{
    try {
        const EvenementsEN = await EvenementsEnCoursDeTravail.find();
        res.status(200).json(EvenementsEN)   
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const createEvenementsEN = async(req,res) =>{
    const {title,body,link,type} = req.body
    const newEvenementENAR = new EvenementsEnCoursDeTravail({title,body,link,type})

    try {
        await newEvenementEN.save()
        res.status(201).json(newEvenementEN)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}