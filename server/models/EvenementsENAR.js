import mongoose from "mongoose";

const EvenementsEnCoursDeTravailARSchema = mongoose.Schema({
   title: String,
   body: String,
   day: Number,
   month: String,
   link: String,
   type: String,
   createdAt:{
    type: Date,
    default: new Date()
   }
});

const EvenementsEnCoursDeTravailAR = mongoose.model('EvenementsEnCoursDeTravailAR', EvenementsEnCoursDeTravailARSchema)

export default EvenementsEnCoursDeTravailAR;