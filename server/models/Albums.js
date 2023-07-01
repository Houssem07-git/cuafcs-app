import mongoose from "mongoose";

const AlbumsSchema = mongoose.Schema({
   selectedFile: String,
   createdAt:{
      type: Date,
      default: new Date()
   }
});

const Albums = mongoose.model('Albums', AlbumsSchema)

export default Albums;