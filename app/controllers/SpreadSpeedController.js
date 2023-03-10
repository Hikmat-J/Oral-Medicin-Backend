const db = require("../models");
const SpreadSpeed = db.SpreadSpeed;

exports.create = (req, res) => {

  const body=req.body;

  if (!body.Value||body.Value=="") {
    res.status(400).send({ message: "Value can not be empty!" });
    return;
  }
  
  // Create a Spread speed
  const spr = new SpreadSpeed({
    Value: body.Value,
  });

  // Save Spread speed in the database
  spr
    .save(spr)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Spread Speed."
      });
    });
};

// Retrieve all Spread speeds from the database.
exports.findAll = (req, res) => {

    SpreadSpeed.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Spread speeds."
      });
    });
};

// Update a Spread speed by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    SpreadSpeed.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Spread speed with id=${id}. Maybe Spread speed was not found!`
          });
        } else res.send({ message: "Spread speed was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Spread speed with id=" + id
        });
      });
  };
  
  // Delete a Spread speed with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    SpreadSpeed.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Spread speed with id=${id}. Maybe Spread speed was not found!`
          });
        } else {
          res.send({
            message: "Spread speed was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Spread speed with id=" + id
        });
      });
  };
  
  // Delete all Spread speeds from the database.
  exports.deleteAll = (req, res) => {
    SpreadSpeed.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Spread speeds were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Spread speeds."
        });
      });
  };
