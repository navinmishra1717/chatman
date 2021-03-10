const express = require("express");
const messageRouter = express.Router();
const messageHandler = require("../../handlers/message/message.handler");

const thisRoute = "/message";
messageRouter.route(thisRoute).get(messageHandler.getAllMessages);
console.log("this is another check for git squash!!");

module.exports = messageRouter;
