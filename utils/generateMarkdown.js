// Year
let year = new Date().getFullYear();
// Readme Template
const generateREADME = (answers) => {
  //project links
  let thirdPartyLinks = '';

  if (answers.thirdParty) {
    thirdPartyLinks = answers.thirdParty.split(',').join('<br>')
  };

  return `
  # ${answers.title.toUpperCase()}
  [![project-top-language](https://img.shields.io/github/languages/top/${answers.username
    .trim()
    .toLowerCase()}/${answers.title.trim()}?color=blueviolet)](https://github.com/${answers.username.trim().toLowerCase()}/${answers.title.trim()})
  [![license](https://img.shields.io/badge/License-${answers.license
    .toUpperCase()
    .split('-')
    .join('v')}-brightgreen.svg)](https://choosealicense.com/licenses/${answers.license}/)

  ## Table of Content
  * [Third Party Links](#Third-Party-Links)
  * [Project Objective](#Project-Objective)
  * [Technologies](#Technologies)
  * [Installation](#Installion)
  * [Usage](#Usage)
  * [Collaborators and References](#Collaborators and References)
  * [License](#License)
  #

  ##  Project Links
  https://github.com/${answers.username.trim().toLowerCase()}/${answers.title.trim()}<br>`;
    // ${thirdParty}
    
    // ## Project Objective
    // ${answers.objective}
    
    // ## User Story
    // ${answers.userStory}

    // ## Technologies 
    // \`\`\`
    // ${answers.tech}
    // \`\`\`
    
    // ## Installation
    // ${answers.installation}

    // ## Usage 
    // ${answers.usage}
    
    // ## Credits and Reference
    // ${answers.collab}
   
    // ## License
    // This project is [${answers.license.toUpperCase()}](https://choosealicense.com/licenses/${answers.license}/) licensed.<br />
    // Copyright © ${year} [${answers.authorName.trim().toUpperCase()}](https://github.com/${answers.username.trim().toLowerCase()})
    
    // <hr>
    // <p align='center'><i>
    // This README was generated with ❤️ by ${answers.authorName.trim().toUpperCase()}
    // </i></p>
}

module.exports = generateREADME;