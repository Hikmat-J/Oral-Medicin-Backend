const db = require("../models");
const Pain = db.Pain;

exports.create = (req, res) => {

  const body=req.body;

  if (!body.Value||body.Value=="") {
    res.status(400).send({ message: "Value can not be empty!" });
    return;
  }

  
  // Create a Pain
  const pain = new Pain({
    Value: body.Value,
  });

  // Save Pain in the database
  pain
    .save(pain)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Pain."
      });
    });
};

// Retrieve all Pain from the database.
exports.findAll = (req, res) => {

    Pain.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Pain."
      });
    });
};

// Update a Pain by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Pain.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Pain with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Pain was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Pain with id=" + id
        });
      });
  };
  
  // Delete a Pain with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Pain.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Pain with id=${id}. Maybe Pain was not found!`
          });
        } else {
          res.send({
            message: "Pain was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Pain with id=" + id
        });
      });
  };
  
  // Delete all Tutorials from the database.
  exports.deleteAll = (req, res) => {
    Pain.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Pain were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Pain."
        });
      });
  };
