const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  thumbnail: String,
  local: String,
  types: [String],
  productName: String,
  company: String,
  price: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User
  }
});

module.exports = mongoose.model("Offer", UserSchema);
