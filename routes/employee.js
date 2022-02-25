const express = require("express");
const employee = require("../controllers/employee");

const app = express();

app.get("/", employee.employeeDetails);

app.get("/submit", employee.enterdetails)

app.post("/submit", employee.createEmplooye);

app.post("/delete", employee.deleteEmployee)

module.exports = app;