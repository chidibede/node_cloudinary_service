import mongoose from "mongoose";

// Mongo DB model
const cloudinarySchema = new mongoose.Schema({
  file_id: { type: String, required: true, unique: true },
  url: { type: String, required: true, unique: true },
  cloud_name: { type: String },
  file_type: { type: String },
});

export default mongoose.model("Cloudinary", cloudinarySchema);
