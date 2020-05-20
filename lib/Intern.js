
var Emp = require("./Employee.js")

class Intern extends Emp{
    constructor(name, id, email, school, role){
        super(name, id, email, "Intern");
        this.school = school;
    }
    getSchool(){
        return this.school
    }
}

module.exports = Intern