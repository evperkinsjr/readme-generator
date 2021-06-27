// Required Packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions array for user input
const questions = [
    {
        type: 'input',
        message: "What's your project title?",
        name: 'title',
    },
    {
        type: 'input',
        message: 'Briefly describe your project.',
        name: 'description',
    },
];

// Function to write README file
function writeToFile(fileName, data) {}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => console.log(response.title));
}

// Function call to initialize app
init();
