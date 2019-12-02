const mongoose = require("mongoose");

const StoreSchema = mongoose.Schema({
  companyPicture: String,
  companyName: String,
  description: String,
  address: String,
  city: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Store", StoreSchema);
