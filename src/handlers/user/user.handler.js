const userService = require("../../services/user/user.service");
const logger = require("../../commons/logger");
const log = logger.log;
const Response = require("../../commons/response");

/**
 * This function gets all the users in the system
 * @param {object} req request object
 * @param {object} res response object
 * @param {function} next function to call next middleware
 */
async function getUsers(req, res, next) {
  try {
    const users = await userService.get();
    log.info("Get users success");
    Response.successResponse(res, "Get users success", users);
  } catch (err) {
    log.error(err);
    next(err);
  }
}

/**
 * This function create the new user in the system
 * @param {object} req request object
 * @param {object} res response object
 * @param {function} next function to call next middleware
 */
async function createUser(req, res, next) {
  let user = req.body;
  try {
    log.info("creating new user");
    user.createdAt = Date.now();
    user.updatedAt = Date.now();
    console.log(user, "user to create");
    const newUser = await userService.create(user);
    const msg = "user created successfully";
    log.info(msg);
    Response.successResponse(res, msg, newUser);
  } catch (err) {
    log.error(err);
    next(err);
  }
}

const userHandler = {
  getUsers: getUsers,
  createUser: createUser,
};

module.exports = userHandler;
