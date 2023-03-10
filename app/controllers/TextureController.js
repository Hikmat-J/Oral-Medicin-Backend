const db = require("../models");
const Texture = db.Texture;

exports.create = (req, res) => {

  const body=req.body;

  if (!body.Value||body.Value=="") {
    res.status(400).send({ message: "Value can not be empty!" });
    return;
  }
  
  // Create a Texture
  const texture = new Texture({
    Value: body.Value,
  });

  // Save Texture in the database
  texture
    .save(texture)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Texture."
      });
    });
};

// Retrieve all Textures from the database.
exports.findAll = (req, res) => {

    Texture.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Textures."
      });
    });
};

// Update a Texture by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Texture.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Texture with id=${id}. Maybe Texture was not found!`
          });
        } else res.send({ message: "Texture was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Texture with id=" + id
        });
      });
  };
  
  // Delete a Texture with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Texture.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Texture with id=${id}. Maybe Texture was not found!`
          });
        } else {
          res.send({
            message: "Texture was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Texture with id=" + id
        });
      });
  };
  
  // Delete all Textures from the database.
  exports.deleteAll = (req, res) => {
    Texture.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Textures were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Textures."
        });
      });
  };
