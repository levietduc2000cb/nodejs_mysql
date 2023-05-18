const createError = require("http-errors");

exports.badRequest = (err, res) => {
  const error = createError.BadRequest(err);
  return res.status(err.status).json({ err: 1, mes: err.message });
};

exports.internalServerError = (res) => {
  const error = createError.InternalServerError();
  return res.status(500).json({ err: 1, mes: error.message });
};

exports.notFound = (req, res) => {
  const error = createError.NotFound();
  return res.status(500).json({ err: 1, mes: error.message });
};

exports.notAuth = (message, res) => {
  const error = createError.Unauthorized();
  return res.status(error.status).json({ err: 1, mes: message });
};
