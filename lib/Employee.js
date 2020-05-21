// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
       this.name = name;
        this.id = id;
        this.email = email;
        
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
        return "Employee";
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
