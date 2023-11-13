import inquirer from 'inquirer';
import fs from 'fs';
import generateReadme from './generateReadme';

// Function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md successfully generated!')
  );
}

// Function to initialize the application
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      // Use the answers to generate your README
      const generatedReadme = generateReadme(answers);

      // Write the README file
      writeToFile('README.md', generateReadme);
    })
    .catch((error) => {
      console.error('Error during prompts:', error);
    });
}

// Array of Questions
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
    
    inquirer.prompt(questions)
      .then((answers) => {
        console.log('User Responses:', answer);

// Taking answers to generate readme
        const generatedReadme = generateReadme(answers);
      })
      .catch((error) => {
        console.error('Sorry, there has been an issue during the prompts', error);
      });

init();