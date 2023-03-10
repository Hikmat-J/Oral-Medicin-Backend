module.exports = app => {
    const appTime = require("../controllers/AppTimeController.js");
  
    var router = require("express").Router();
  
    router.post("/", appTime.create);
  
    router.get("/", appTime.findAll);

    router.put("/:id", appTime.update);
  
    router.delete("/:id", appTime.delete);
  
    router.delete("/", appTime.deleteAll);
  
    app.use("/api/appTime", router);
  };