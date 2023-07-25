const { responseServerError } = require("../helper/ResponseRequests");

const tryCatch = (func) => async (req, res, next) => {
  try {
    await func(req, res);
  } catch (error) {
    console.log(error);
    next(error);
    return responseServerError({ res, err: error.message });
  }
};
module.exports = tryCatch;
