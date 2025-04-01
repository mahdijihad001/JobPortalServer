const express = require("express");
const { createUserController, getAllUserController, postUserLoginController, updateUserProfile, findSingleUser, logOutUser } = require("./userController");

const userRouter = express.Router();

userRouter.post("/create" , createUserController);
userRouter.get("/find" , getAllUserController);
userRouter.post("/login" , postUserLoginController);
userRouter.patch("/profileUpdate/:id" , updateUserProfile);
userRouter.get("singleUser/:id" , findSingleUser);
userRouter.delete("/delete/:id");
userRouter.post("/logout" , logOutUser);

module.exports = {userRouter};