const express = require("express");
const { createUserController, getAllUserController, postUserLoginController } = require("./userController");

const userRouter = express.Router();

userRouter.post("/create" , createUserController);
userRouter.get("/find" , getAllUserController);
userRouter.post("/login" , postUserLoginController);


module.exports = {userRouter};