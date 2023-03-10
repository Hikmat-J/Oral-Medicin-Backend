const db = require("../models");
const Edge = db.Edges;

exports.create = (req, res) => {

  const body=req.body;

  if (!body.Value||body.Value=="") {
    res.status(400).send({ message: "Value can not be empty!" });
    return;
  }

  
  // Create a Edge
  const edge = new Edge({
    Value: body.Value,
  });

  // Save Edge in the database
  edge
    .save(edge)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Edge."
      });
    });
};

// Retrieve all Edge from the database.
exports.findAll = (req, res) => {

    Edge.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Edge."
      });
    });
};

// Update a Edge by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Edge.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Edge with id=${id}. Maybe Edge was not found!`
          });
        } else res.send({ message: "Edge was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Edge with id=" + id
        });
      });
  };
  
  // Delete a Edge with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Edge.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Edge with id=${id}. Maybe Edge was not found!`
          });
        } else {
          res.send({
            message: "Edge was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Edge with id=" + id
        });
      });
  };
  
  // Delete all Edge from the database.
  exports.deleteAll = (req, res) => {
    Edge.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Edge were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Edge."
        });
      });
  };
