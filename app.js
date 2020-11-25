const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var faker = require('faker');

// routes
app.get("/", function(req, res) {
    res.render("index.ejs", {"name":faker.name.findName()});
});

app.get("/cpp", function(req, res) {
    res.render("cpp.ejs", {"name":faker.name.findName()});
});

app.get("/cs", function(req, res) {
    res.render("cs.ejs", {"name":faker.name.findName()});
});

app.get("/java", function(req, res) {
    res.render("java.ejs", {"name":faker.name.findName()});
});

app.get("/python", function(req, res) {
    res.render("python.ejs", {"name":faker.name.findName()});
});


// listener
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running...");
});