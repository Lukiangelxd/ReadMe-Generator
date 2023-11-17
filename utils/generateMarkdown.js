//Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License](https://img.shields.io/badge/License-MIT-blue.svg)";
    case "Apache":
      return "![License](https://img.shields.io/badge/License-Apache2.0-red)";
    case "GNU":
      return "![License](https://img.shields.io/badge/License-GNU-red)";
    default:
      return "";
  }
}

//Function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[MIT Link](https://www.opensource.org/licenses/MIT)"
    case "Apache":
      return "[Apache Link](https://www.apache.org/licenses/LICENSE-2.0)"
    case "GNU":
      return "[GNU Link](https://www.gnu.org/licenses/gpl-3.0.en.html)"
    default:
      return "";
  }
}


//Function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "none") {
    return `This project is licensed under the ${renderLicenseBadge(license)}, ${renderLicenseLink(license)}`
  } else {
    return "";
  }
}

//Function to generate markdown for README
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
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License 
  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions about this project, you can view it at https://github.com/${data.github}. You can also contact me at ${data.email}. 
  
`}

module.exports = generateMarkdown;
