import mongoose from "mongoose";

const EvenementsCompletsSchemaFR = mongoose.Schema({
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

const EvenementsCompletsFR = mongoose.model('EvenementCompletsFR', EvenementsCompletsSchemaFR)

export default EvenementsCompletsFR;