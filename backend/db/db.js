// This is the db connection file
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        console.log('Connection error');
    }

}

export { db }