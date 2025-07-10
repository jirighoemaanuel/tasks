import mongoose from 'mongoose';

const password = process.env.MONGO_PASSWORD;


const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;
