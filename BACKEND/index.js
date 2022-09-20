import express from 'express';
import corse from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = 3001;

dotenv.config();
app.use(express.json());