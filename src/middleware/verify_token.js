const jwt = require("jsonwebtoken");
const { badRequest, notAuth } = require("./handle_error");

function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return notAuth("Require authorization", res);
  const accessToken = token.split(" ")[1].trim();
  jwt.verify(accessToken, process.env.JWT, (err, decoded) => {
    if (err) return notAuth("Access token may be expired or invalid", res);
    req.user = decoded;
    next();
  });
}

module.exports = verifyToken;
