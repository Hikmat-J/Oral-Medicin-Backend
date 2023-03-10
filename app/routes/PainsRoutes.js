module.exports = app => {
    const pain = require("../controllers/PainController.js");

    var router = require("express").Router();

  
    router.post("/", pain.create);
  
    router.get("/", pain.findAll);

    router.put("/:id", pain.update);
  
    router.delete("/:id", pain.delete);
  
    router.delete("/", pain.deleteAll);
  
    app.use("/api/pains", router);
  };