const express = require("express");
const fileUpload = require('express-fileupload');
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.static('public'));
// parse requests of content-type - application/json
app.use(express.json());
app.use(fileUpload());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="/api/images/upload" method="POST" enctype="multipart/form-data">');
    res.write('<input type="file" name="image" multiple />');
    res.write('<button type="submit">Upload</button>');
    res.write('</form>');
    return res.end();
})
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/AppearanceTimeRoutes")(app);
require("./app/routes/ColorRoutes")(app);
require("./app/routes/ComorRoutes")(app);
require("./app/routes/DiseaseRoutes")(app);
require("./app/routes/EdgesRoutes")(app);
require("./app/routes/ImageRoutes")(app);
require("./app/routes/PainsRoutes")(app);
require("./app/routes/PositionRoutes")(app);
require("./app/routes/SprawlRoutes")(app);
require("./app/routes/SpreadSpeedRoutes")(app);
require("./app/routes/Textureroutes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app