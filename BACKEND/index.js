import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from 'socket.io';
import { createServer } from 'http';
import connectDB from "../BACKEND/utils/connection.js";
import authRoute from "../BACKEND/routes/authRoute.js";
import messageRoute from "../BACKEND/routes/messageRoute.js";

const app = express();
const port = 3001;

dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/api", authRoute);
app.use("/api", messageRoute);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port: ${port}`);
});

const server = createServer(app); 

const socketio = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.activeUsers = new Map();

socketio.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("userOnline", (userId) => {
    global.activeUsers.set(socket.id, userId);
    socketio.emit("getUsers", [...global.activeUsers.values()]);
  });

  socket.on("sendMsg", ({ senderId, receiverId, text }) => {
    socketio.emit("getMsg", {
      senderId,
      receiverId,
      text,
    });
  });

  socket.on("disconnect", () => {
    global.activeUsers.delete(socket.id);
    socketio.emit("getUsers", [...global.activeUsers.values()]);
  });
});
