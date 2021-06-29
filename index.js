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
    {
        type: 'input',
        message: 'Which command should be run to install dependencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions for usage.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide guidelines for contributing.',
        name: 'contributing',
    },
    {
        type: 'list',
        message: 'Which license should this project have?',
        choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GLP 3.0', 'MIT', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Which command should be used to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: "What's your GitHub username?",
        name: 'github',
    },
    {
        type: 'input',
        message: "What's your email address?",
        name: 'email',
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => writeToFile('README-Example.md', generateMarkdown({...response})));
}

// Function call to initialize app
init();
