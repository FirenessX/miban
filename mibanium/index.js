var port = 4004;

var express = require("express");
var app = express();
app.use(express.static("final"));
app.get("/", function (req, res) {
    res.redirect("localhost:4004");
});
app.listen(port, function () {
    console.log("PORT: ", port);
});