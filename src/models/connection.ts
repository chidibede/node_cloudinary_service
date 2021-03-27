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
