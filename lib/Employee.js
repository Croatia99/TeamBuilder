// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role){
       this.name = name;
        this.id = id;
        this.email = email;
        this.role = role || "Employee"
    }
    getName(){
      return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}


// const newEmp = new Employee("Kevin");
// // Employee.prototype.giveName = function(name){
// //     this.name = name;
// // }
// // newEmp.giveName('Kevin')
// console.log(newEmp)
// const obj = {};
// console.log(obj);

module.exports = Employee;
