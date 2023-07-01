import Users from '../models/Users.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const secret = 'test'

export const signin = async (req,res) =>{
    const {email, password} = req.body;

    try {
        const OldUser = await Users.findOne({email})
        if(!OldUser) return res.status(404).json({message: "User doesn't exist"})
        const isPasswordCorrect = await bcrypt.compare(password,OldUser.password)
        if(!isPasswordCorrect) return res.status(400).json({message: 'Invalid credentials'})
        const token = jwt.sign({email: OldUser.email, id:OldUser._id},secret,{expiresIn:"1h"})
        res.status(200).json({result: OldUser, token})
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

export const signup = async (req,res) =>{
    const {email,password,firstName,lastName,confirmPassword} = req.body
    try {
        const OldUser = await Users.findOne({email})
        if (OldUser) return res.status(400).json({message: "User already exist"})
        if(password != confirmPassword) return res.status(400).json({message: "Password doesn't match"})
        const hashedPassword = await bcrypt.hash(password,12)
        const result = await Users.create({email,password: hashedPassword,name:`${firstName} ${lastName}`})
        const token = jwt.sign({email: result.email, id:result._id},secret,{expiresIn:'1h'})
        res.status(201).json({result,token})
    } catch (error) {
        res.status(500).json({message: 'Something went Wrong'})
        console.log(error)
    }



}

