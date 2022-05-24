const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientCompanyDetailsSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    companyBulstat: {
      type: String,
      required: true,
    },
    companyOwner: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ClientCompanyDetails = mongoose.model(
  "ClientCompDet",
  clientCompanyDetailsSchema
);

module.exports = ClientCompanyDetails;
