const express = require("express");
const { createUserController, getAllUserController, postUserLoginController, updateUserProfile } = require("./userController");

const userRouter = express.Router();

userRouter.post("/create" , createUserController);
userRouter.get("/find" , getAllUserController);
userRouter.post("/login" , postUserLoginController);
userRouter.post("/profile/:id" , updateUserProfile);


module.exports = {userRouter};