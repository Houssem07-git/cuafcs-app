import mongoose from "mongoose";

const NewsSchema = mongoose.Schema({
   title: String,
   body: String,
   link: String,
   selectedFile: String,
   createdAt:{
    type: Date,
    default: new Date()
   }
});

const News = mongoose.model('News', NewsSchema)

export default News;