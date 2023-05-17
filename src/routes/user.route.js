const { getUser } = require("../controller/user.controller");

const userRoute = require("express").Router();

userRoute.get("/", getUser);

module.exports = userRoute;
