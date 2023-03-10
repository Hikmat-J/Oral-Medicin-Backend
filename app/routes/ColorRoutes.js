module.exports = app => {
    const Color = require("../controllers/ColorController.js");
  
    var router = require("express").Router();
  
    router.post("/", Color.create);
  
    router.get("/", Color.findAll);

    router.put("/:id", Color.update);
  
    router.delete("/:id", Color.delete);
  
    router.delete("/", Color.deleteAll);
  
    app.use("/api/colors", router);
  };
  