const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

exports.register = ({ email, password }) =>
  new Promise(async (res, rej) => {
    try {
      const user = await db.User.findOrCreate({
        where: { email },
        defaults: {
          email,
          password: hashPassword(password),
        },
      });

      const token = user[1]
        ? jwt.sign(
            {
              id: user[0].id,
              email: user[0].email,
              role_code: user[0].role_code,
            },
            process.env.JWT,
            { expiresIn: "1d" }
          )
        : null;

      res({
        err: user[1] ? 0 : 1,
        mes: user[1] ? "Register is successfully" : "Email exist",
        token,
      });
    } catch (error) {
      rej(error);
    }
  });

exports.login = ({ email, password }) =>
  new Promise(async (res, rej) => {
    try {
      const user = await db.User.findOne({
        where: { email },
        raw: true,
      });

      const isChecked = user && bcrypt.compareSync(password, user.password);
      const token = isChecked
        ? jwt.sign(
            {
              id: user.id,
              email: user.email,
              role_code: user.role_code,
            },
            process.env.JWT,
            { expiresIn: "1d" }
          )
        : null;

      res({
        err: token ? 0 : 1,
        mes: token ? "Login is successfully" : "Email or password is wrong",
        access_token: token ? `Bearer ${token}` : null,
      });
    } catch (error) {
      rej(error);
    }
  });
