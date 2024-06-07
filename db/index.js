import mongoose from "mongoose";

const MONGO_URL = 'mongodb+srv://Wilmer200520t:FranWil2005%21@clusterfree.k6yiqwd.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFree'

export default async function connectMongoDB() {
    try{
        return await mongoose.connect(MONGO_URL)
    } catch (error) {
        console.log('Error connecting to MongoDB', error)
    }
}