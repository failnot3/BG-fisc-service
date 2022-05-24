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

// app.post("/insert", async (req, res) => {
//   const foodName = req.body.foodName;
//   const days = req.body.days;
//   const food = new FoodModel({ foodName: foodName, daysSinceIAte: days });

//   try {
//     await food.save();
//   } catch (err) {
//     console.log(err);
//   }
// });

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

// app.put("/update", async (req, res) => {
//   const newFoodName = req.body.newFoodName;
//   const id = req.body.id;

//   try {
//     await FoodModel.findById(id, (err, updatedFood) => {
//       updatedFood.foodName = newFoodName;
//       updatedFood.save();
//       res.send("update");
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.delete("/delete/:id", async (req, res) => {
//   const id = req.params.id;

//   await FoodModel.findByIdAndRemove(id).exec();
//   res.send("deleted");
// });
