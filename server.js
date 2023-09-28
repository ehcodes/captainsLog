require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

const jsxViewEngine = require("jsx-view-engine");
app.set("view engine", "jsx");
app.engine("jsx", jsxViewEngine());

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use((req, res, next) => {
  next();
});

// DB CONNECTION
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get("/logs/new", function (req, res) {
  res.send("new");
});