module.exports = app => {
    const comor = require("../controllers/ComorController.js");
  
    var router = require("express").Router();
  
    router.post("/", comor.create);
  
    router.get("/", comor.findAll);

    router.put("/:id", comor.update);
  
    router.delete("/:id", comor.delete);
  
    router.delete("/", comor.deleteAll);
  
    app.use("/api/comor", router);
  };