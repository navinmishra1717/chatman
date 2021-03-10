const { log } = require("../../commons/logger");

async function getAllMessages(req, res, next) {
  try {
    log.info("This is message handler!!");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllMessages,
};
