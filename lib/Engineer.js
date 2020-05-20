// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Emp = require("./Employee.js")

class Engineer extends Emp{
    constructor(name, id, email, github){
        super(name, id, email, "Engineer");
        this.github = github;
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer