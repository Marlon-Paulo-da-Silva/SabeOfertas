const Store = require("../models/Store");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { local, companyName, description } = req.body;

    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    if (!user)
      return res
        .status(400)
        .json({ error: "Faça Login para criar uma Compania" });
  }
};
