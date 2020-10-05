/**
 *
 * @param {object} res response object
 * @param {string} msg success message
 * @param {object} options other options
 */

const successResponse = (res, msg = "", options = {}) => {
  const status = +options.status || 200;
  res.status(status).json({ success: true, msg: msg });
};

module.exports = successResponse;
