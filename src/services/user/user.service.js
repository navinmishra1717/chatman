const User = require("../../models/user.model");

function get(options = {}) {
  const limit = options.limit || 100;
  const skip = limit * options.page || 0;
  return User.find()
    .skip(skip)
    .limit(limit)
    .exec();
}
/**
 * Creates new user and returns user
 * @param {object} userData The object that contains information about user to be created
 */
function create(userData) {
  const user = new User(userData);
  return user.create();
}

const userService = {
  get,
  create,
};

module.exports = userService;
