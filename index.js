const {prompt} = require('inquirer');
const {writeFile} = require('fs');
const {promisify} = require('util');

const genReadMe = require("./utils/generateMarkdown");
const questions = require('./utils/questions');

const writeFileAsync = promisify(writeFile);

console.log("I started");

const promptUser = () => prompt(questions);

const init = async () => {
  try {
    const answers = await promptUser();
    console.log(JSON.stringify(answers, null, '\t'));
    const readme = genReadMe(answers);
    await writeFileAsync('README.md', readme);
    console.log("done with readme");
  } catch (error) {
    console.error(error.message);
  }
}

init();