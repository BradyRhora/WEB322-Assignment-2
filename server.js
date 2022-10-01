var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var path = require("path");
var app = express();

app.use(express.static("static"));

app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname,"/login.html"));
});

app.get("/registration", (req,res) => {
    res.sendFile(path.join(__dirname,"/registration.html"));
});

app.get("/blog", (req,res) => {
    res.sendFile(path.join(__dirname,"/blog.html"));
});

app.get("/article/:id", (req,res) => {
    res.sendFile(path.join(__dirname,"/read_more.html"));
});

app.listen(HTTP_PORT);