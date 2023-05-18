const joi = require("joi");

exports.email = joi
  .string()
  .email({ minDomainSegments: 2, tlds: { allow: ["com"] } })
  .required();

exports.password = joi
  .string()
  .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
  .required();
