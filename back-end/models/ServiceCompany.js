const mongoose = require("mongoose");

const ServiceCompanySchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
});

const ServiceCompany = mongoose.model("serviceCompanyDetails", ServiceCompanySchema);
module.exports = ServiceCompany;
