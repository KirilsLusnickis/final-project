import messageModel from "../models/messageModel";

export const getAllMessages = async (req, res, next) => {
  try {
    const { sender, receiver } = req.body;

    const messages = await messageModel
      .find({
        users: { $all: [sender, receiver] },
      })
      .sort({ updatedAt: 1 });

    const displayedMessages = messages.map((message) => {
      return {
        self: message.sender.toString() === sender,
        text: message.message.text,
      };
    });
    res.json(displayedMessages);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const createMessage = async (req, res, next) => {
  try {
    const { sender, receiver, text } = req.body;
    const newMessage = await messageModel.create({
      message: { text: text },
      users: [sender, receiver],
      sender: sender,
    });
    newMessage
      ? res.json({ msg: "SUCCESSFULLY ADDED MSG TO DB" })
      : res.json({ msg: "SOMETHING WENT WRONG WITH ADDING MSG TO DB" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
