const express = require("express");
const userHandler = require("../../handlers/user/user.handler");
const userRouter = express.Router()

const thisRoute = "/users"
userRouter
.route(thisRoute)
.get(userHandler.getUsers)
.post(userHandler.createUser)

module.exports = userRouter;