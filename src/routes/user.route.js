const { getCurrent } = require("../controller/user.controller");
const { isAdmin } = require("../middleware/verify_role");
const verifyToken = require("../middleware/verify_token");

const userRoute = require("express").Router();

userRoute.use(verifyToken);
userRoute.get("/", isAdmin, getCurrent);

module.exports = userRoute;
