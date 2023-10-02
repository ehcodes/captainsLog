require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const jsxViewEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const { logRoutes } = require("./src/controllers/logs.js");

app.set("views", "src/views");
app.set("view engine", "jsx");

app.engine("jsx", jsxViewEngine());

app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  next();
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use(logRoutes);

app.listen(3000, () => {
  console.log(Date());
  console.log(`listening on port 3000`);
  console.log(`http://localhost:3000/`);
});
