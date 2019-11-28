const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { name, email, city } = req.body;

    let user = await User.findOne({ name, email, city });

    if (!user) {
      const user = await User.create({ name, email, city });
    }

    return res.json(user);
  }
};
