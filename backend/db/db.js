// // This is the db connection file
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// const db = async () => {
//     try {
//         mongoose.set('strictQuery', false);
//         await mongoose.connect(process.env.MONGO_URL);
//     } catch (error) {
//         console.log('Connection error');
//     }

// }

// export { db }


import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        // console.log(process.env.MONGO_URL); // Check if MONGO_URL is loaded
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Connection error', error); // Log the actual error
    }
}

export { db }
