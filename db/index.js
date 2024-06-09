import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export default async function connectMongoDB() {
    try{
        return await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log('Error connecting to MongoDB', error)
    }
}