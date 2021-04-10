import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((response) => console.log("Mongo DB connected succesfully"))
  .catch((error) => {
    throw error;
  });

const cloudinarySchema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  cloudinaryId: { type: String },
  cloudinaryUrl: { type: String },
});

export default mongoose.model("Cloudinary", cloudinarySchema);
