var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = 3000;

//Tell express to use body-parser
app.use(bodyParser.urlencoded({ extended: true}));//Pass in an object extended: true.
app.set("view engine", "ejs");

var camptents = [
	{ name: "Red Muff", image: "https://images.unsplash.com/photo-1605620622858-ea62b0a2059c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc0fHx0ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" },
	{ name: "White Snow", image: "https://images.unsplash.com/photo-1547448271-fde9cf7d6afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHx0ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" }
]

//rending HTML Home page
app.get("/", (req, res) => {
	res.render("landing")
});

//Show all Camping Tents.
app.get("/camptents", (req, res) => {
	res.render("camptents", {camptents:camptents});
});

//Send a post to make a new camp tent
app.post("/camptents", (req, res) => {
	// get data from user and add to camptents array
	var name = req.body.name;
	var image = req.body.image;
	var newCamptents = { name: name, image: image }
	camptents.push(newCamptents)
	//redireact back to camptents home page
	res.redirect("/camptents");
});

//Shows the form which submits a post request to /camptents
app.get("/camptents/new", (req, res) => {
	res.render("new.ejs");
});

app.listen(port, () => {
	console.log("Server app listening on port ${port}")
})
