var express = require("express");
var app = express();

app.set("port", process.env.PORT || 5001);

app.use(express.static(__dirname + "/public"));

// views is directory for all template files
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("pages/index");
});

app.get("/db", function (request, response) {
  let results = [{ id: "1234", name: "Tom" }];

  response.render("pages/db", { results: results });
});

app.listen(app.get("port"), function () {
  console.log("Node app is running on port", app.get("port"));
});

//my super elegant changes made for testing the Heroku scratch org
