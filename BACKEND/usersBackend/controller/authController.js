import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new userModel({
      ...req.body,
      password: hash,
      isAdmin: false,
    });
    await newUser.save();
    res.status(201).send("New user is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ userName: req.body.userName });

    if (!user) {
      return res.status(404).send("Wrong user or password.");
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(404).send("Wrong user or password.");
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: "3h",
      }
    );

    return res
      .cookie("session_token", token, {
        httpOnly: true,
      })
      .status(200)
      .send(`Successfully logged in!`);
  } catch (error) {
    console.error(error);
  }
};
