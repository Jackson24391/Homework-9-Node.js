function renderLicenseBadge(license) {
    if (license != 'no license') {
      return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)
      `;
    } else {
      return ' ';
    }
  }
  
  function renderLicenseLink(license) {
    if (license != 'no license') {
      return `[${license}](https://choosealicense.com/licenses/${license})
        `;
      } else {
        return ' ';
      }
  }
  
  function renderLicenseSection(license) {
    if (license != 'no license') {
      return `
    ## [License](#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}
        `;
      } else {
        return ' ';
      }
  }

  function generateMarkdown(data) {
    return `# ${data.title}
  
    ${renderLicenseBadge(data.license)}
  
    ## Table-of-Contents
  
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
  
    ## [Description](#table-of-contents)
  
    ${data.description}
  
    ## [Installation](#table-of-contents)
  
    ${data.installation}
  
    ## [Usage](#table-of-contents)
  
    ${data.usage}
  
    ${renderLicenseSection(data.license)}
  
    ## [Contributing](#table-of-contents)
  
    ${data.contributing}
  
    ## [Tests](#table-of-contents)
  
    ${data.tests}
  
    ## [Questions](#table-of-contents)
  
    If you have any questions you can contact me at the following links:
  
    [Email: ${data.email}]
  
    [Github](https://github.com/${data.githubName})
  `;
  }
  
  module.exports = generateMarkdown;