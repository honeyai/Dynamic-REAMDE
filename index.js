
// TODO: Include packages needed for this application
import {generateMarkdown} from "./utils/generateMarkdown";

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
  },
  {
    type: 'editor',
    name: 'description',
    message: 'Explain the what, why, and how of your project.',
  },
  {
    type: 'editor',
    name: 'installation',
    message: 'Provide the instructions to install your app.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Give examples and instructions on how to use your app.',
  },
  {
    type: 'input',
    name: 'collab',
    message: 'List your collaborators if any, with their Github profiles. List like so: name link, name link, etc',
  },
  {
    type: 'input',
    name: 'third party',
    message: 'List any third party assets and their links. List any tutorials too. List like so: Asset link, Asset link, etc',
  },
  {
    type: 'list',
    name: 'licenses',
    message: "Choose which license you're using",
    choices: ['MIT license', 'GPL'],
    default: questions[0],
  },
  {
    type: 'input',
    name: 'username',
    message: 'Provide your github username',
  }
];


prompt(
    questions
  )
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      throw new Error
    } else {
      // Something else went wrong
    }
  });
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
