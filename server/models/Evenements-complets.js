import mongoose from "mongoose";

const EvenementsCompletsSchema = mongoose.Schema({
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

const EvenementsComplets = mongoose.model('EvenementComplets', EvenementsCompletsSchema)

export default EvenementsComplets;