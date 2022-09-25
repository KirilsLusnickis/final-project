import express from 'express';
import corse from 'cors';
import dotenv from "dotenv";
import connectDB from '../BACKEND/utils/connection.js';
import authRoute from "./routes/authRoute.js"
import userRoute from "./routes/userRoute.js"

const app = express();
const port = 3001;

dotenv.config();
app.use(express.json());
app.use(corse());

app.use("/api", authRoute);
app.use("/api", userRoute);

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port: ${port}`);
});