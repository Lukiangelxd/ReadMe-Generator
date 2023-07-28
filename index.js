// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the description of the project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'How do you use this project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How would the user run tests?',
        name: 'test',
    },
    {
        type: 'checkbox',
        message: 'Choose a license for the project.',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL'],
    },
    {
        type: 'input',
        message: 'Enter GitHub username.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter email.',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log(data)
        })
}

// Function call to initialize app
init();
