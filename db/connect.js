import mongoose from 'mongoose';

const password = process.env.MONGO_PASSWORD;
const connectionString = `mongodb+srv://Emmanuel:${password}@cluster0.fu9qpi2.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

export default connectDB;
