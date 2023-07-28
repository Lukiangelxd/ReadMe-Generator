// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case "MIT":
          console.log("[![License](https://img.shields.io/badge/License-MIT-blue.svg)]");
          return "[![License](https://img.shields.io/badge/License-MIT-blue.svg)]";
      case "Apache":
          console.log("[![License](https://img.shields.io/badge/License-Apache2.0-red)]");
          return "[![License](https://img.shields.io/badge/License-Apache2.0-red)]";
      case "GNU":
          console.log("[![License](https://img.shields.io/badge/License-GNU-red)]");
          return "[![License](https://img.shields.io/badge/License-GNU-red)]";
      default:
          console.log("");
          return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
      case "MIT":
        console.log("(https://www.opensource.org/licenses/MIT)");
        return "[MIT Link](https://www.opensource.org/licenses/MIT)"
      case "Apache":
        console.log("(https://www.apache.org/licenses/LICENSE-2.0)");
        return "[Apache Link](https://www.apache.org/licenses/LICENSE-2.0)"
      case "GNU":
        console.log("(https://www.gnu.org/licenses/gpl-3.0.en.html)");
        return "[GNU Link](https://www.gnu.org/licenses/gpl-3.0.en.html)"
      default:
        console.log("");
        return "";
    }
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge()}${renderLicenseLink()}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## License 
  This project is licensed under the ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions about this project, you can view it at https://github.com/${data.github}. You can also contact me at ${data.email}. 
  
`}

module.exports = generateMarkdown;
