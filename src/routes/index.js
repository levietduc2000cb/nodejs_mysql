const authRoute = require("./auth.route");
const userRoute = require("./user.route");

const router = require("express").Router();

router.use("/api/v1/user", userRoute);
router.use("/api/v1/auth", authRoute);

router.use("*", (req, res) => {
  return res.send("Hello Err");
});

module.exports = router;
