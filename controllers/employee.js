const Employee = require("./../models/employee")

module.exports = {

    employeeDetails: (req, res) => {

        Employee.find({}, (err, foundEmployee) => {
            if (err) {
                console.log(err);
            } else {
                res.render("home", {
                    foundEmployee: foundEmployee,
                })
            }

        });
    },

    enterdetails: (req, res) => {
        res.render("submit")
    },

    createEmplooye: (req, res) => {
        let newEmployee = new Employee();
        newEmployee.fName = req.body.fName
        newEmployee.lName = req.body.lName
        newEmployee.age = req.body.age
        newEmployee.gender = req.body.gender
        newEmployee.number = req.body.number
        newEmployee.email = req.body.email

        newEmployee.save((err, data) => {
            if (err) {
                console.log("if block" + err.number);
                res.write(
                    '<script>window.alert("Email & Phone Number alredy exits");window.location="/submit";</script>' + err
                  );
            } else {
                console.log("else");
                res.redirect("/")
            }
        })

    },

    deleteEmployee: (req, res) => {
        const id = req.body.checkbox;
        console.log(id);
        Employee.findByIdAndRemove(id, (err) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/")
            }
        })
    }

}