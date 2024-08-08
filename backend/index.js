import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './db/db.js';
import transactionsRoute from './routes/transactions.js'; 
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

// Use the transactions route
app.use('/api/transactions', transactionsRoute);

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

server();
