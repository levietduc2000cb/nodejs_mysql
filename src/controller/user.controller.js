const service = require("../service");
const { internalServerError } = require("../middleware/handle_error");

exports.getCurrent = async (req, res) => {
  try {
    const { id } = req.user;
    console.log({ id });
    const respon = await service.user.getOne(id);
    return res.status(200).json(respon);
  } catch (error) {
    return internalServerError(res);
  }
};
