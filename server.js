const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const cors = require('cors')
app.use(express.json());
const Post = require('./backend/models/post');

mongoose
  .connect(
    "mongodb+srv://hamza:bigo1998@cluster0.km1jj0o.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected !!!");
  })
  .catch(() => {
    console.log("Problème de connection !");
  });


app.listen(3000, () => {
  console.log("server is running on port 3000...");
});

