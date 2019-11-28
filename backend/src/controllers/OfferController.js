const User = require("../models/User");
const Offer = require("../models/Offer");

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { company, local, description, category, price } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "Usuario nao existe" });
    }

    const offer = await Offer.create({
      user: user_id,
      thumbnail: req.filename,
      company,
      local,
      description,
      category: category.split(",").map(cat => cat.trim()),
      price
    });

    return res.json(offer);
  }
};
