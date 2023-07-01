import mongoose from "mongoose";

const EvenementsEnCoursDeTravailSchema = mongoose.Schema({
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

const EvenementsEnCoursDeTravail = mongoose.model('EvenementsEnCoursDeTravail', EvenementsEnCoursDeTravailSchema)

export default EvenementsEnCoursDeTravail;