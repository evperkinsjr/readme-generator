// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === 'BSD 2-Clause') {
    return `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
  } else if (license === 'BSD 3-Clause') {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)`;
  } else if (license === 'GLP 3.0') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else {
    return '';
  }
}

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  return (license === 'None') ? '' : `* [License](#license)`;
}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  return (license === 'None') ? '' : `\n## License
  This project is licensed under the terms of the ${license} license.\n<p>&nbsp</p>`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  <p>&nbsp</p>

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  ${renderLicenseLink(data.license)}
  * [Tests](#tests)
  * [Questions](#questions)
  <p>&nbsp</p>

  ## Installation
  To install the required dependencies, run the following command:
  
  ${data.installation}
  <p>&nbsp</p>

  ## Usage
  ${data.usage}
  <p>&nbsp</p>

  ## Contributing
  ${data.contributing}
  <p>&nbsp</p>

  ${renderLicenseSection(data.license)}

  ## Tests
  To run tests, use the following command:

  ${data.tests}
  <p>&nbsp</p>

  ## Questions
  If you have any questions, contact me at ${data.email}.

  See more of my work at [${data.github}](https://github.com/${data.github}/).`;
}

module.exports = generateMarkdown;
