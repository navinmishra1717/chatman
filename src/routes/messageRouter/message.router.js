const express = require("express");
const messageRouter = express.Router();
const messageHandler = require("../../handlers/message/message.handler");

const thisRoute = "/message";
messageRouter.route(thisRoute).get(messageHandler.getAllMessages);

module.exports = messageRouter;
