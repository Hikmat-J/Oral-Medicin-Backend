module.exports = app => {
    const edge = require("../controllers/EdgeController.js");
  
    var router = require("express").Router();
  
    router.post("/", edge.create);
  
    router.get("/", edge.findAll);

    router.put("/:id", edge.update);
  
    router.delete("/:id", edge.delete);
  
    router.delete("/", edge.deleteAll);
  
    app.use("/api/edges", router);
  };