const mongoose = require("mongoose");

const StoreSchema = mongoose.Schema({
  companyPicture: String,
  local: String,
  company: String,
  description: String
});

module.exports = mongoose.model("Store", StoreSchema);
