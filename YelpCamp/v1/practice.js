/* Variables */
var express = require("express");
var app = express();

/* Setter */
app.set("view engine", "ejs");

/* Variables */
var express = require("express");
var app = express();

/* Setter */
app.set("view engine", "ejs");

/* Variables */
var express = require("express");
var app = express();

/* Setter */
app.set("view engine", "ejs");

/* Variables */
var express = require("express");
var app = express();

/* Setter */
app.set("view engine", "ejs");

/* Getter */
app.get("/", function (req, res) {
    res.render("landing");
});

/* Listen */
app.listen(3000, function() {
    console.log("The app is running on port 3000. Press Ctrl-C to quit.");
});

/* Poster */
app.post("/campgrounds", function (req, res) {

});