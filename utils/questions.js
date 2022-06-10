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
