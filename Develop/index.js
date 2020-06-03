const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "Please enter a project title",
    name: "title",
  },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, "", function(error);{
        if(err){console.log(error)
        else console.log("success")
    }
    ))
  console.log(generateMarkdown(response));
}

function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("README.md", response);
  });
}

init();
