import mongoose from "mongoose";

const cloudinarySchema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  cloudinaryId: { type: String },
  cloudinaryUrl: { type: String },
});

export default mongoose.model('Cloudinary', cloudinarySchema)