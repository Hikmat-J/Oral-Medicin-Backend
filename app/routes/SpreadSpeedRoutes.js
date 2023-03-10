module.exports = app => {
    const spreadSpeed = require("../controllers/SpreadSpeedController.js");
  
    var router = require("express").Router();
  
    router.post("/", spreadSpeed.create);
  
    router.get("/", spreadSpeed.findAll);

    router.put("/:id", spreadSpeed.update);
  
    router.delete("/:id", spreadSpeed.delete);
  
    router.delete("/", spreadSpeed.deleteAll);
  
    app.use("/api/spreadSpeeds", router);
  };