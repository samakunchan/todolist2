var http = require("http");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var server = http.createServer(app);
var io = require("socket.io").listen(server);

//Middleware//////////
app.use(bodyParser.urlencoded({ extended: false }));
/////////////////////

var tableau = [];

app.get("/", function (request, response) {
    response.render(__dirname + "/index.ejs", {theList : tableau});
    console.log("Le GET");
});
app.get("/supprimer/:id", function (request, response) {
    tableau.splice(request.params.id, 1);
    response.redirect("/");
});
app.post("/", function (request, response) {
    tableau.push(request.body.list);
    response.render(__dirname + "/index.ejs", {theList : tableau});
});

server.listen(1010);

