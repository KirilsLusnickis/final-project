import {getAllMessages, createMessage} from '../controller/messageController.js'
import express from 'express';

const router = express.Router();

router.post("/getmessages", getAllMessages);
router.post("/createmessage", createMessage);

export default router;