const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var faker = require('faker');

// routes
app.get("/", function(req, res) {
    res.render("index.html", {"name":faker.name.findName()});
});

app.get("/cpp", function(req, res) {
    res.render("cpp.html", {"name":faker.name.findName()});
});

app.get("/cs", function(req, res) {
    res.render("cs.html", {"name":faker.name.findName()});
});

app.get("/java", function(req, res) {
    res.render("java.html", {"name":faker.name.findName()});
});

app.get("/python", function(req, res) {
    res.render("python.html", {"name":faker.name.findName()});
});


// listener
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running...");
});