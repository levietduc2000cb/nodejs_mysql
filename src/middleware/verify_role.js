const { notAuth } = require("./handle_error");

exports.isAdmin = (req, res, next) => {
  const { role_code } = req.user;
  if (role_code !== "R1") return notAuth("Require role Amin", res);
  next();
};

exports.isModeratorOrAdmin = (req, res, next) => {
  const { role_code } = req.user;
  if (role_code !== "R1" && role_code !== "R2")
    return notAuth("Require role Amin or Moderator", res);
  next();
};
