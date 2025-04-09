const express = require("express");
const { createJobController, findAllJob } = require("./JobController");

const jobRouter = express.Router();

jobRouter.post("/create" , createJobController);
jobRouter.get("/find" , findAllJob);

module.exports = {jobRouter};