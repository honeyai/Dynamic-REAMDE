// Year
let year = new Date().getFullYear();
// Readme Template
const generateREADME = (answers) => {
  //project links
  let thirdPartyLinks = '';
  let title = answers.title.replace(' ', '-');
  if (answers.thirdParty) {
    thirdPartyLinks = answers.thirdParty.split(',').join('<br>')
  };

  return `# ${title.toUpperCase()}
[![project-top-language](https://img.shields.io/github/languages/top/${answers.username
  .trim()
  .toLowerCase()}/${title.trim()}?color=blueviolet)](https://github.com/${answers.username.trim().toLowerCase()}/${title.trim()})
[![license](https://img.shields.io/badge/License-${answers.license
  .toUpperCase()
  .split('-')
  .join('v')}-brightgreen.svg)](https://choosealicense.com/licenses/${answers.license}/)

## Table of Content
* [Third Party Links](#ThirdPartyLinks)
* [Project Objective](#ProjectObjective)
* [Technologies](#Technologies)
* [Installation](#Installion)
* [Usage](#Usage)
* [Collaborators](#Collaborators)
* [License](#License)
#

##  Project Links
https://github.com/${answers.username.trim().toLowerCase()}/${title.trim()}<br>

#Third Party Used:<br>
${thirdPartyLinks}
  
## Project Objective
${answers.description}

## Technologies 
\`\`\`
${answers.tech}
\`\`\`

## Installation
${answers.installation}

## Usage 
${answers.usage}

## Credits and Reference
${answers.collab}

## License
This project is [${answers.license.toUpperCase()}](https://choosealicense.com/licenses/${answers.license}/) licensed.<br />
Copyright © ${year} [${answers.author.trim().toUpperCase()}](https://github.com/${answers.username.trim().toLowerCase()})
<hr>
<p align='center'><i>
This README was generated with ❤️ by ${answers.author.trim().toUpperCase()}
</i></p>
  `;
}

module.exports = generateREADME;








