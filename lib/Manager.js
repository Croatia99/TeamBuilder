
var Emp = require("./Employee.js")

class Manager extends Emp{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager"
    }
}

module.exports = Manager