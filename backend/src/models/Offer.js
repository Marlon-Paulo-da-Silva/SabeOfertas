const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  thumbnail: String,
  price: Number,
  local: String,
  categories: [String],
  company: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Offer", OfferSchema);
