const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "dev.env" });

const ClientCompanyDetails = require("./models/ClientCompanyDetails");

const cors = require("cors");

const app = express();

const ServiceCompanyModel = require("./models/ServiceCompany");

const dbCompDet = "serviceCompanyDetails";

app.use(express.json());
app.use(cors());

const mongoConnect = process.env.MONGODBKEY;

//console.log(mongoConnect);

mongoose
  .connect(mongoConnect, { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  })
  .then((result) =>
    app.listen(3001, () => {
      console.log("Server running on port 3001 ...");
    })
  );

app.get("/add-new-client", (req, res) => {
  const clientCompDet = new ClientCompanyDetails({
    companyName: "Pesho",
    companyBulstat: "111000111",
    companyOwner: "Petar Ivanov",
  });
  clientCompDet
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-clients", (req, res) => {
  ClientCompanyDetails.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/specific-client", (req, res) => {
  ClientCompanyDetails.findById("628cf9b5b9738ca4c3623070")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
