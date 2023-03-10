module.exports = app => {
    const sprawl = require("../controllers/SprawController.js");
  
    var router = require("express").Router();
  
    router.post("/", sprawl.create);
  
    router.get("/", sprawl.findAll);

    router.put("/:id", sprawl.update);
  
    router.delete("/:id", sprawl.delete);
  
    router.delete("/", sprawl.deleteAll);
  
    app.use("/api/sprawls", router);
  };