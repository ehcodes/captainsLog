const router = require("express").Router();
// const router = express;

  const Log = require("../models/logSchema.js");

  router.get("/", async (req, res) => {
    res.send('Welcome to the <a href="/logs">Captains Log</a>');
  });

  router.get("/logs", async (req, res) => {
    try {
      const allLogs = await Log.find();
      res.render("Index", { logs: allLogs });
    } catch (error) {
      console.error(error);
    }
  });

  router.get("/logs/new", function (req, res) {
    res.render("New");
  });

  router.get("/logs/:id", async function (req, res) {
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

  router.get("/logs/:id/edit", async (req, res) => {
    try {
      const foundLog = await Log.findById(req.params.id);
      res.render("Edit", { log: foundLog });
    } catch (err) {
      console.error(err);
      res.send({ msg: err.message });
    }
  });

  router.post("/logs", async (req, res) => {
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

  router.put("/logs/:id", async (req, res) => {
    try {
      await Log.findByIdAndUpdate(req.params.id, req.body);
      return res.redirect(`/logs/${req.params.id}`);
    } catch (err) {
      res.send(
        `<p>Unable to edit log. Go back to all of the <a href="/logs">Captains Logs</a></p>`
      );
      console.error(err);
    }
  });

  router.delete("/logs/:id", async (req, res) => {
    try {
      await Log.findByIdAndRemove(req.params.id);
      res.redirect("/logs");
    } catch (err) {
      console.error(err);
    }
  });

module.exports = { logRoutes: router };
