const db = require("../models");
const Comor = db.Comorbidities;

exports.create = (req, res) => {

  const body=req.body;

  if (!body.Value||body.Value=="") {
    res.status(400).send({ message: "Value can not be empty!" });
    return;
  }

  
  // Create a Comorbidities
  const comor = new Comor({
    Value: body.Value,
  });

  // Save Comorbidities in the database
  comor
    .save(comor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Comorbidities."
      });
    });
};

// Retrieve all Comorbidities from the database.
exports.findAll = (req, res) => {

    Comor.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Comorbidities."
      });
    });
};

// Update a Comorbidities by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Comor.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Comorbidities was not found!`
          });
        } else res.send({ message: "Comorbidities was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Comorbidities with id=" + id
        });
      });
  };
  
  // Delete a Comorbidities with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Comor.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Comorbidities with id=${id}. Maybe Comorbidities was not found!`
          });
        } else {
          res.send({
            message: "Comorbidities was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Comorbidities with id=" + id
        });
      });
  };
  
  // Delete all Comorbidities from the database.
  exports.deleteAll = (req, res) => {
    Comor.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Comorbidities were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Comorbidities."
        });
      });
  };
