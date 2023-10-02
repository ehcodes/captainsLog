require("dotenv").config();
const Log = require("./src/models/logSchema.js");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const jsxViewEngine = require("jsx-view-engine");
const methodOverride = require("method-override");

app.set("views", "src/views");

app.set("view engine", "jsx");

app.engine("jsx", jsxViewEngine());

app.use(express.static("public"));

app.use(methodOverride("_method"));

app.use((req, res, next) => {
  next();
});

app.use(express.urlencoded({ extended: false }));

// DB CONNECTION
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// ROUTES
app.get("/", async (req, res) => {
  try {
    const allLogs = await Log.find();
    res.render("Index", { logs: allLogs });
  } catch (error) {
    console.error(error);
  }
});

app.get("/logs/new", function (req, res) {
  res.render("New");
});

app.get("/logs/:id", async function (req, res) {
  try {
    const foundLog = await Log.findById(req.params.id);
    res.render("Show", {
      log: foundLog,
    });
  } catch (err) {
    res.send(err);
    console.error(err);
  }
});

// post data to db
app.post("/logs", async (req, res) => {
  if (req.body.shipIsWrecked === "on") {
    req.body.shipIsWrecked = true;
  } else {
    req.body.shipIsWrecked = false;
  }
  try {
    const newLog = await Log.create(req.body);
    return res.redirect("/logs");
  } catch (err) {
    res.send(`error in adding ${req.body}`);
    console.error(err);
  }
});

app.listen(3000, () => {
  console.log(Date());
  console.log(`listening on port 3000`);
  console.log(`http://localhost:3000/`);
});
