var express = require("express");
var app = express();
var port = 3000;

app.set("view engine", "ejs");

//rending HTML Home page
app.get("/", (req, res) => {
	res.render("landing")
});

//Camp Tent Home page: Listing all tents.
//Each Camp tents has a name and image.
app.get("/camptents", (req, res) => {
	var camptents = [
		{ name: "Red Muff", image: "https://images.unsplash.com/photo-1605620622858-ea62b0a2059c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc0fHx0ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" },
		{ name: "White Snow", image: "https://images.unsplash.com/photo-1547448271-fde9cf7d6afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHx0ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" }
	]
	
	res.render("camptents", {camptents:camptents});
});

app.listen(port, () => {
	console.log("Server app listening on port ${port}")
})
