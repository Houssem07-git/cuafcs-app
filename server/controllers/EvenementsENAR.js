import EvenementsEnCoursDeTravailAR from "../models/EvenementsENAR.js";

export const getEvenementsENAR = async(req,res) =>{
    try {
        const EvenementsENAR = await EvenementsEnCoursDeTravailAR.find();
        res.status(200).json(EvenementsENAR)   
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const createEvenementsENAR = async(req,res) =>{
    const {title,body,link,type} = req.body
    const newEvenementENAR = new EvenementsEnCoursDeTravailAR({title,body,link,type})

    try {
        await newEvenementENAR.save()
        res.status(201).json(newEvenementENAR)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}