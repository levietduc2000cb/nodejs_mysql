const db = require("../models");

exports.register = new Promise((res, rej) => {
  try {
    res("Success");
  } catch (error) {
    rej(error);
  }
});
