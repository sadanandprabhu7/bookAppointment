const express = require("express");
const path = require("path");
const bodyParser = require("body-parser"); // geting express package or framwork
const cors = require("cors");

const Appointment = require("./model/main");
const adminRoutes = require("./routes/main");

book = express();
book.use(cors());

book.use(bodyParser.json({ extended: false }));

book.use(adminRoutes);

Appointment.sync()
  .then((result) => {
    console.log(result);

    book.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
