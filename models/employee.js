const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    fName: {
        type: String,
    },
    lName: {
        type: String,
    },
    age: {
        type: String,
    },
    gender: {
        type: String,
    },
    number: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
});

module.exports = new mongoose.model("Employee", companySchema);