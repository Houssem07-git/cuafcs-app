import mongoose from "mongoose";

const NewsFRSchema = mongoose.Schema({
   title: String,
   body: String,
   link: String,
   selectedFile: String,
   createdAt:{
    type: Date,
    default: new Date()
   }
});

const NewsFR = mongoose.model('NewsFR', NewsFRSchema)

export default NewsFR;