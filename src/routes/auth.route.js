const { register } = require("../controller/auth.controller");

const authRoute = require("express").Router();

authRoute.post("/", register);

module.exports = authRoute;
