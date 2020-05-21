const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamArr = [];

const enginQs = [
  {
    name: "engName",
    type: "input",
    message: "What is your name?",
  },
  {
    name: "engId",
    type: "input",
    message: "What is your ID number?",
  },
  {
    name: "engEmail",
    type: "input",
    message: "What is your email?",
  },
  {
    name: "engGit",
    type: "input",
    message: "What is your Git address?",
  },
];

const intQs = [
  {
    name: "intName",
    type: "input",
    message: "What is your name?",
  },
  {
    name: "intId",
    type: "input",
    message: "What is your ID number?",
  },
  {
    name: "intEmail",
    type: "input",
    message: "What is your email?",
  },
  {
    name: "intSchool",
    type: "input",
    message: "What is your school?",
  },
];

const manQs = [
  {
    name: "manName",
    type: "input",
    message: "What is your name?",
  },
  {
    name: "manId",
    type: "input",
    message: "What is your ID number?",
  },
  {
    name: "manEmail",
    type: "input",
    message: "What is your email?",
  },
  {
    name: "manOff",
    type: "input",
    message: "What is your office number?",
  },
];

var buildTeam = [
  {
    type: "list",
    name: "team",
    message: "Who are you adding to you team today?",
    choices: ["Intern", "Engineer", "Nobody to add"],
  }
];

var startQ = function () {
  function managerAdd() {
    inquirer.prompt(manQs).then(function (data) {
      const manager = new Manager(
        data.manName,
        data.manId,
        data.manEmail,
        data.manOff
      );
      teamArr.push(manager);
      teamAdd();
    });
  }
  function teamAdd() {
    inquirer.prompt(buildTeam).then(function (data) {
      switch(data.team) {
        case "Intern":
          internAdd();
          break;
        case "Engineer":
          engineerAdd();
          break;
        default:
          htmlCreate();
      }
    
    });
  }

  function engineerAdd() {
    inquirer.prompt(enginQs).then((data) => {
      const engineer = new Engineer(
        data.engName,
        data.engId,
        data.engEmail,
        data.engGit
      );
      teamArr.push(engineer);
      teamAdd();
    });
  }

  function internAdd() {
    inquirer.prompt(intQs).then( (data) => {
      const intern = new Intern(
        data.intName,
        data.intId,
        data.intEmail,
        data.intSchool
      );
      teamArr.push(intern);
      teamAdd();
    });
  }

  function htmlCreate() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamArr));
  }

  managerAdd();
};

startQ();

//fs.writeFile(outputPath, html, (err)=>console.log(err||"sucess"))

//inqruier function to ask some q and make a new Manager;
//go into a menu that asks if user wants to add Intern or Engineer or be done and generate team.
//intern prompt or engineer prompt asks relevant questions and create new Intern or or Engineer, then go back to menu;
//when done, send teamArr to the premade render function that will return the html to be writtn with fs module
// Write code to use inquirer to gather information about the development team members,

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
