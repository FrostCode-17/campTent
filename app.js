var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
	res.send("This will be the landing page")
});

app.listen(port, () => {
	console.log("Server app listening on port ${port}")
})
