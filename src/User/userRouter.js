const express = require("express");
const { createUserController, getAllUserController, postUserLoginController, updateUserProfile, findSingleUser } = require("./userController");

const userRouter = express.Router();

userRouter.post("/create" , createUserController);
userRouter.get("/find" , getAllUserController);
userRouter.post("/login" , postUserLoginController);
userRouter.post("/profileUpdate/:id" , updateUserProfile);
userRouter.get("singleUser/:id" , findSingleUser);

module.exports = {userRouter};