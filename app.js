const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const http = require("http");
const _ = require("lodash");

const {PORT}= require("./config/keys");
const {mongoURI} = require("./config/keys");
const employeeRoutes = require("./routes/employee");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', employeeRoutes);

mongoose.connect(mongoURI);

console.log(PORT);

app.listen(PORT, ()=>{
    console.log("Server started at port 3000.");
});