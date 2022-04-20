const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

const authRoutes = require("./routes/AuthRoutes");
const userRoutes = require("./routes/UserRoutes");
const bedRoutes = require("./routes/BedRoutes");
const bloodRoutes = require("./routes/BloodRoutes");
const doctorRoutes = require("./routes/DoctorRoutes");
const foodRoutes = require("./routes/FoodRoutes");
const medicineRoutes = require("./routes/MedicineRoutes");
const oxygenRoutes = require("./routes/OxygenRoutes");
const plasmaRoutes = require("./routes/PlasmaRoutes");
const problemRoutes = require("./routes/ProblemRoutes");
const volunteerRoutes = require("./routes/VolunteerRoutes");
const legalRoutes = require("./routes/LegalRoutes");
const eduRoutes = require("./routes/EduRoutes");
const galleryRoutes = require("./routes/GalleryRoutes");
const eventRoutes = require("./routes/EventRoutes");

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/upload", express.static("./uploads"));

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", bedRoutes);
app.use("/api", bloodRoutes);
app.use("/api", doctorRoutes);
app.use("/api", bloodRoutes);
app.use("/api", plasmaRoutes);
app.use("/api", foodRoutes);
app.use("/api", medicineRoutes);
app.use("/api", oxygenRoutes);
app.use("/api", problemRoutes);
app.use("/api", volunteerRoutes);
app.use("/api", legalRoutes);
app.use("/api", eduRoutes);
app.use("/api", galleryRoutes);
app.use("/api", eventRoutes);

app.get("/", function (req, res) {
  res.send("Hello World");
});

// for sending error messages
app.use(function (err, req, res, next) {
  console.error(err);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
