module.exports = app => {
    const position = require("../controllers/PositionController.js");
  
    var router = require("express").Router();
  
    router.post("/", position.create);
  
    router.get("/", position.findAll);

    router.put("/:id", position.update);
  
    router.delete("/:id", position.delete);
  
    router.delete("/", position.deleteAll);
  
    app.use("/api/positions", router);
  };