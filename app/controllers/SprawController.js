const db = require("../models");
const Sprawl = db.Sprawl;

exports.create = (req, res) => {

  const body=req.body;

  if (!body.Value||body.Value=="") {
    res.status(400).send({ message: "Value can not be empty!" });
    return;
  }

  
  // Create a Sprawl
  const sprawl = new Sprawl({
    Value: body.Value,
  });

  // Save Sprawl in the database
  sprawl
    .save(sprawl)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Sprawl."
      });
    });
};

// Retrieve all Sprawl from the database.
exports.findAll = (req, res) => {

    Sprawl.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Sprawl."
      });
    });
};

// Update a Sprawl by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Sprawl.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Sprawl with id=${id}. Maybe Sprawl was not found!`
          });
        } else res.send({ message: "Sprawl was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Sprawl with id=" + id
        });
      });
  };
  
  // Delete a Sprawl with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Sprawl.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Sprawl with id=${id}. Maybe Sprawl was not found!`
          });
        } else {
          res.send({
            message: "Sprawl was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Sprawl with id=" + id
        });
      });
  };
  
  // Delete all Sprawl from the database.
  exports.deleteAll = (req, res) => {
    Sprawl.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Sprawl were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Sprawl."
        });
      });
  };
