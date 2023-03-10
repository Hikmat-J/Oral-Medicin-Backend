module.exports = app => {
    const texture = require("../controllers/TextureController.js");
  
    var router = require("express").Router();
  
    router.post("/", texture.create);
  
    router.get("/", texture.findAll);

    router.put("/:id", texture.update);
  
    router.delete("/:id", texture.delete);
  
    router.delete("/", texture.deleteAll);
  
    app.use("/api/textures", router);
  };