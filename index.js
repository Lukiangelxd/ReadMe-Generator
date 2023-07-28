// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of the project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use this project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How would the user run tests?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose a license for the project.',
        name: 'license',
        choices: ['MIT', 'Apache', 'GNU'],
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
function writeToFile(fileName, data) {
fs.writeFile(fileName, generateMarkdown(data), 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File written successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log(data)
            writeToFile("README.md", data)
        })
}

// Function call to initialize app
init();
