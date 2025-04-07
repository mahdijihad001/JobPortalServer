const express = require("express");
const { createJobController } = require("./JobController");

const jobRouter = express.Router();

jobRouter.post("/create" , createJobController);

module.exports = {jobRouter};