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
    message: "Please enter a project title",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a project title",
    name: "title",
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
    console.log(response);
    //passing this data to write to file
    writeToFile("README.md", response);
  });
}

init();
