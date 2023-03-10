module.exports = app => {
  const disease = require("../controllers/DiseaseController.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", disease.create);

  // Retrieve all disease
  router.get("/", disease.findAll);
  // Retrieve a single Tutorial with id
  router.get("/:id", disease.findOne);

  // Update a Tutorial with id
  router.put("/:id", disease.update);

  // Delete a Tutorial with id
  router.delete("/:id", disease.delete);

  // Create a new Tutorial
  router.delete("/", disease.deleteAll);

  app.use("/api/disease", router);
};
