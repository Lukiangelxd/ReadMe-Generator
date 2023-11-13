function generateReadme(answers) {
    const {
      projectTitle,
      projectDescription,
      installation,
      usage,
      license,
      contributing,
      tests,
      githubUsername,
      email,
    } = answers;
  
    return `
  # ${projectTitle}
  
  ## Description
  ${projectDescription}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## License
  This project is licensed under the ${license} license.
  
  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests}
  
  ## Questions
  For questions or concerns, please contact me via GitHub:
  [GitHub - ${githubUsername}](https://github.com/${githubUsername})
  
  Or you can reach out via email:
  ${email}
    `;
  }
  
  module.exports = generateReadme;