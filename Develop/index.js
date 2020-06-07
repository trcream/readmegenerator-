const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "Please enter a project title",
    name: "title",
  },
  {
    type: "input",
    message: "What is your Project about?",
    name: "description",
  },
  {
    type: "input",
    status: "Please Enter Your Table of Contents",
    name: "table",
  },
  {
    type: "input",
    message: "Installation",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage",
    name: "usage",
  },
  {
    type: "input",
    message: "License",
    name: "license",
  },
  {
    type: "input",
    message: "Contributing",
    name: "contributing",
  },
  {
    type: "input",
    message: "Tests",
    name: "tests",
  },
  {
    type: "input",
    message: "Github Profile Picture Link?",
    name: "photo",
  },
  {
    type: "input",
    message: "What is your GitHub Email?",
    name: "email",
  },
];

function writeToFile(fileName, data) {
  //passing date from user to "write to file" to "generate markdown"
  fs.writeFile(fileName, generateMarkdown(data), function (error) {
    if (error) console.log(error);
    else console.log("success");
  });
  //console.log(generateMarkdown(response));
}

function init() {
  inquirer.prompt(questions).then((response) => {
    //  console.log(response);
    //passing this data to write to file
    writeToFile("README.md", response);
  });
}

init();
