import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './db/db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

server();
