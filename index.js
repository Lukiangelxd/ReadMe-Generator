//Packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs')

//Creates an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Provide a description of your project:',
      },
      {
          type: 'input',
          name: 'installation',
          message: 'How do you install your application?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Provide instructions and examples for how to use your application:',
        },
        {
          type: 'list',
          name: 'license',
          message: 'Choose a license for your project:',
          choices: ['MIT', 'Apache', 'GPL', 'None'],
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'Explain how others can contribute to your project:',
        },
        {
          type: 'input',
          name: 'tests',
          message: 'Provide examples and instructions for running tests:',
        },
        {
          type: 'input',
          name: 'githubUsername',
          message: 'What is your GitHub username?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?',
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
