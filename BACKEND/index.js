import express from 'express';
import corse from 'cors';
import dotenv from "dotenv";
import connectDB from '../BACKEND/utils/connection.js';

const app = express();
const port = 3001;

dotenv.config();
app.use(express.json());
app.use(corse());

const server = app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port: ${port}`);
});