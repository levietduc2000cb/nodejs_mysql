const {
  internalServerError,
  badRequest,
} = require("../middleware/handle_error");
const service = require("../service");
const { email, password } = require("../helper/joi_schema");
const joi = require("joi");

exports.register = async (req, res) => {
  try {
    const { error } = joi.object({ email, password }).validate(req.body);
    if (error)
      return badRequest(
        { status: 400, message: error.details[0].message },
        res
      );
    const respose = await service.auth.register(req.body);

    return res.status(200).json(respose);
  } catch (error) {
    return internalServerError(res);
  }
};

exports.login = async (req, res) => {
  try {
    const { error } = joi.object({ email, password }).validate(req.body);
    if (error)
      return badRequest(
        { status: 400, message: error.details[0].message },
        res
      );
    const respose = await service.auth.login(req.body);
    return res.status(200).json(respose);
  } catch (error) {
    return internalServerError(res);
  }
};
