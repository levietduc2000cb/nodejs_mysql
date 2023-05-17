const service = require("../service");

exports.register = async (req, res) => {
  try {
    const respose = await service.register;
    return res.status(200).json({ mes: respose });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: -1, mes: "Internal Server Error" });
  }
};
