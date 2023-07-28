//Packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs')

//Creates an array of questions for user input
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
        choices: ['MIT', 'Apache', 'GNU', 'none'],
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

//function to write README file
function writeToFile(fileName, data) {
    let outPutDirectory = "dist"
    if (!fs.existsSync(outPutDirectory)){
        fs.mkdirSync(outPutDirectory);
    }
    fs.writeFile(`${outPutDirectory}/${fileName}`, generateMarkdown(data), 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('README successfully made!');
        }
    });
}

//function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile("README.md", data)
        })
}

//Call to initialize app
init();
