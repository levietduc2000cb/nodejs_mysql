const db = require("../models");

exports.getOne = (id) =>
  new Promise(async (res, rej) => {
    try {
      const user = await db.User.findOne({
        where: { id },
        attributes: {
          exclude: ["password"],
        },
        raw: true,
      });
      res({
        err: user ? 0 : 1,
        mes: user ? "Get user" : "User not found",
        userData: user,
      });
    } catch (error) {
      rej(error);
    }
  });
