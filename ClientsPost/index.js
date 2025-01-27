const express = require ("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const postRoute = require("./route/user.route")

mongoose
  .connect(
    "mongodb+srv://itz_tycon:3M7tE5tm7aPi6B15@axiacohort7.wdev4.mongodb.net/cohort8?retryWrites=true&w=majority&appName=AxiaCohort7"
  )
  .then(() => {
    console.log("Connected to database.");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.use(postRoute);

app.listen(5000, () => {
  console.log("app is running on port: 5000 ");
});
