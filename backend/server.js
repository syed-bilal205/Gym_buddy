require("dotenv").config();
const express = require("express");
const workoutRouter = require("./routes/workouts");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// Connecting to data base
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Workout-Buddy",
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((e) => {
    console.log(e);
  });

// middleware
app.use(express.json());
app.use(cors());

// Rooutes
app.use("/api/workouts", workoutRouter);

app.listen(PORT, () => {
  console.log(`Server started at PORT http://localhost:${PORT}/`);
});
