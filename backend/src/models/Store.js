const mongoose = require("mongoose");

const StoreSchema = mongoose.Schema({
  companyPicture: String,
  companyName: String,
  description: String,
  address: String,
  city: String
});

module.exports = mongoose.model("Store", StoreSchema);
