const db = require("../models");
const Color = db.Color;

exports.create = (req, res) => {

  const body=req.body;

  if (!body.Value||body.Value=="") {
    res.status(400).send({ message: "Value can not be empty!" });
    return;
  }
  
  // Create a Color
  const color = new Color({
    Value: body.Value,
  });

  // Save Color in the database
  color
    .save(color)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Color."
      });
    });
};

// Retrieve all Color from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Color.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Color."
      });
    });
};

// Update a Color by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Color.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Color with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Color was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Color with id=" + id
        });
      });
  };
  
  // Delete a Color with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Color.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Color with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Color was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };
  
  // Delete all Color from the database.
  exports.deleteAll = (req, res) => {
    Color.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Color were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Color."
        });
      });
  };
