var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var campgrounds = [
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_960_720.jpg", description: "Enjoy big skies next to the peaceful Salmon Creek."},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_960_720.jpg", description: "Hike to granite mountain vistas in a quiet location few find."},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg", description: "The night sky is yours to view with aurora borealis to spur your imagination."},
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_960_720.jpg", description: "Enjoy big skies next to the peaceful Salmon Creek."},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_960_720.jpg", description: "Hike to granite mountain vistas in a quiet location few find."},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg", description: "The night sky is yours to view with aurora borealis to spur your imagination."}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res) {
    res.send("You hit the post route!");
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
    campgrounds.push(newCampground);

    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(3000, function(){
    console.log("The YelpCamp server has started on port 3000. Press Ctrl-C to quit.");
});
