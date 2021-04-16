import mongoose from "mongoose";

// Mongo DB connection
const connection = {} as { isConnected: any };
const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw error;
  }
};

export default connectToDb;
