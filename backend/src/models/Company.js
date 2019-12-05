const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({
  companyPicture: String,
  companyName: String,
  description: String,
  address: String,
  city: String,
  lat: String,
  lng: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Company", CompanySchema);
