const db = require("../models");
const AppTime = db.AppearanceTime;

exports.create = (req, res) => {

  const body=req.body;
  if (!body.Value||body.Value=="") {
    res.status(400).send({ message: "Value can not be empty!" });
    return;
  }
  // Create a Appearance Time
  const appTime = new AppTime({
    Value: body.Value,
  });

  // Save Appearance Time in the database
  appTime
    .save(appTime)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Appearance Time."
      });
    });
};

// Retrieve all Appearance Time from the database.
exports.findAll = (req, res) => {

  AppTime.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Appearance Time."
      });
    });
};

// Update a Appearance Time by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    AppTime.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Appearance Time with id=${id}. Maybe Appearance Time was not found!`
          });
        } else res.send({ message: "Appearance Time was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Appearance Time with id=" + id
        });
      });
  };
  
  // Delete a Appearance Time with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    AppTime.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Appearance Time with id=${id}. Maybe Appearance Time was not found!`
          });
        } else {
          res.send({
            message: "Appearance Time was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Appearance Time with id=" + id
        });
      });
  };
  
  // Delete all Appearance Time from the database.
  exports.deleteAll = (req, res) => {
    AppTime.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Appearance Time were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Appearance Time."
        });
      });
  };
