const db = require("../models");
const Disease = db.Disease;
const AppTime = db.AppearanceTime;
const Color = db.Color;
const Comor = db.Comorbidities;
const Edges = db.Edges;
const Image = db.Image;
const Pain = db.Pain;
const Position = db.Position;
const Sprawl = db.Sprawl;
const SpreadSpeed = db.SpreadSpeed;
const Texture = db.Texture;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  const body=req.body;
  
  // Validate request
  if (!body.Name||body.Name=="") {
    res.status(400).send({ message: "name can not be empty!" });
    return;
  }

  if (!body.Description||body.Description=="") {
    res.status(400).send({ message: "discription can not be empty!" });
    return;
  }
  if (!body.Diagnosis||body.Diagnosis=="") {
    res.status(400).send({ message: "diagnosis can not be empty!" });
    return;
  }
  // if (!body.diagnosis||body.diagnosis=="") {
  //   res.status(400).send({ message: "diagnosis can not be empty!" });
  //   return;
  // }
  if (!body.Treatment||body.Treatment=="") {
    res.status(400).send({ message: "treatment can not be empty!" });
    return;
  }
  body.ColorsSelected&&body.ColorsSelected.forEach(element => {
  Color.findById(element)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found color with id " + element });
    //else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving color with id=" + element });
  });
});

body.ComorsSelected&&body.ComorsSelected.forEach(element => {
  Comor.findById(element)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found comorbidities with id " + element });
   // else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving comorbidities with id=" + element });
  });
});

body.EdgesSelected&&body.EdgesSelected.forEach(element => {
  Edges.findById(element)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found edges with id " + element });
    //else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving edges with id=" + element });
  });
});

body.PositionsSelected&&body.PositionsSelected.forEach(element => {
  Position.findById(element)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found position with id " + element });
    //else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving position with id=" + element });
  });
});

body.SprawlsSelected&&body.SprawlsSelected.forEach(element => {
  Sprawl.findById(element)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found Sprawl with id " + element });
   // else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving Sprawl with id=" + element });
  });
});

body.TextureSelected&&body.TextureSelected.forEach(element => {
  Texture.findById(element)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found Texture with id " + element });
    //else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving Texture with id=" + element });
  });
});


body.AppTimeSelected!=undefined&&AppTime.findById(body.AppTimeSelected)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found appearanceTime with id " + body.AppTimeSelected });
    //else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving appearanceTime with id=" + body.appearanceTime });
  });



  body.PainsSelected!=undefined&&Pain.findById(body.PainsSelected)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found Pain with id " + body.PainsSelected });
    //else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving Pain with id=" + body.PainsSelected });
  });



  body.SpreadSpeedSelected!=undefined&&SpreadSpeed.findById(body.SpreadSpeedSelected)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found spreadSpeed with id " + body.SpreadSpeedSelected });
    //else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving spreadSpeed with id=" + body.SpreadSpeedSelected });
  });





  
  // Create a Disease
  const dis = new Disease({
    name:body.Name,
    discription: body.Description,
    diagnosis:body.Diagnosis,
    treatment:body.Treatment,
    color:body.ColorsSelected,
    appearanceTime:body.AppTimeSelected,
    comorbidities:body.ComorsSelected,
    edges:body.EdgesSelected,
    images:body.images,
    pain:body.PainsSelected,
    position:body.PositionsSelected,
    sprawl:body.SprawlsSelected,
    spreadSpeed:body.SpreadSpeedSelected,
    texture:body.TextureSelected
  });

  // Save Disease in the database
  dis
    .save(dis)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Disease."
      });
    });
};

// Retrieve all Disease from the database.
exports.findAll = (req, res) => {
   const title = req.query.title;
   var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Disease.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Desiase."
      });
    });
};

// Find a single Disease with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Disease.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Disease with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Disease with id=" + id });
    });
};

// Update a Disease by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Disease.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Disease with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Disease was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Disease with id=" + id
      });
    });
};

// Delete a Disease with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Disease.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Disease from the database.
exports.deleteAll = (req, res) => {
  Disease.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Disease were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Disease."
      });
    });
};

