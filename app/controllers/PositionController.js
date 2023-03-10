const db = require("../models");
const Position = db.Position;

exports.create = (req, res) => {

  const body=req.body;

  if (!body.Value||body.Value=="") {
    res.status(400).send({ message: "Value can not be empty!" });
    return;
  }

  
  // Create a Position
  const position = new Position({
    Value: body.Value,
  });

  // Save Position in the database
  position
    .save(position)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Position."
      });
    });
};

// Retrieve all Position from the database.
exports.findAll = (req, res) => {

    Position.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Position."
      });
    });
};

// Update a Position by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Position.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Position with id=${id}. Maybe Position was not found!`
          });
        } else res.send({ message: "Position was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Position with id=" + id
        });
      });
  };
  
  // Delete a Position with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Position.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Position with id=${id}. Maybe Position was not found!`
          });
        } else {
          res.send({
            message: "Position was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Position with id=" + id
        });
      });
  };
  
  // Delete all Position from the database.
  exports.deleteAll = (req, res) => {
    Position.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Position were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Position."
        });
      });
  };
