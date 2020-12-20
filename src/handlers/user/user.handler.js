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
    let query = { isDeleted: false };
    const users = await userService.get(query);
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
    const newUser = await userService.create(user);
    const msg = "user created successfully";
    log.info(msg);
    Response.successResponse(res, msg, newUser);
  } catch (err) {
    log.error(err);
    next(err);
  }
}

/**
 * This function updates the user with given id in the system
 * @param {object} req request object
 * @param {object} res response object
 * @param {function} next function to call next middleware
 */

async function updateUser(req, res, next) {
  const userId = req.params.id;
  const updateData = req.body;
  try {
    log.info(`updating user with id:${userId}`);
    const newUser = await userService.update(userId, updateData);
    Response.successResponse(
      res,
      `update user success with id:${userId}`,
      newUser
    );
  } catch (err) {
    log.error(err);
    next(err);
  }
}

/**
 *
 * @param {object} req request object
 * @param {object} res response object
 * @param {function} next next function
 */

async function getOneById(req, res, next) {
  const id = req.params.id;
  try {
    const user = await userService.getOne(id);
    const msg = "Get user by id success!!";
    log.info(msg);
    Response.successResponse(res, msg, user);
  } catch (err) {
    log.error(err);
    next(err);
  }
}

/**
 *
 * @param {object} req request object
 * @param {object} res response object
 * @param {function} next next function
 */

async function deleteOne(req, res, next) {
  const userId = req.params.id;
  try {
    const user = await userService.getOne(userId);
    await userService.deleteOne(userId, user);
    const msg = "Delete user by id success!!";
    log.info(msg);
    Response.successResponse(res, msg);
  } catch (err) {
    log.error(err);
    next(err);
  }
}

const userHandler = {
  getAllUsers: getUsers,
  createUser: createUser,
  updateUser: updateUser,
  getOneById: getOneById,
  deleteOne: deleteOne,
};

module.exports = userHandler;
