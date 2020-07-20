const inquirer = require('inquirer');
fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your deployed URL:',
  },
  {
    type: 'input',
    name: 'repo',
    message: 'Enter your GITHUB REPO URL:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:',
  },
  {
    type: 'confirm',
    name: 'confirmInstall',
    message: 'Would you like to add instructions on how to INSTALL your project?',
    default: true
  },
  {
    type: 'input',
    name: 'install',
    message: 'Provide some instructions on how to INSTALL your project:',
    when: ({ confirmInstall }) => confirmInstall
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide some INSTRUCTIONS on how to USE your project:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide your e-mail for users to reach you:'
  },
  {
    type: 'checkbox',
    name: 'color',
    message: 'Choose a color for your badge!',
    choices: ['BLUE', 'RED', 'YELLOW', 'GREEN', 'PINK']
  },
  {
    type: 'checkbox',
    name: 'language',
    message: 'What LANGUAGE did you use for this project? (Check all that apply)',
    choices: [' JavaScript', ' HTML', ' CSS', ' ES6', ' jQuery', ' Bootstrap', ' Node']
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'What LICENSE did you use for this project? (Check all that apply)',
    choices: [' afl-3.0', 'apache-2.0', ' artistic-2.0', ' bsl-1.0', ' bsd-2-clause', ' bsd-3-clause', ' bsd-3-clause-clear', ' cc', ' cc0-1.0', ' cc-by-4.0', ' cc-by-sa-4.0', ' wtfpl', ' ecl-2.0', ' epl-1.0', ' eupl-1.1', ' agpl-3.0', ' gpl', ' gpl-2.0', ' gpl-3.0', ' lgpl', ' lgpl-2.1', ' lgpl-3.0', ' isc', '	lppl-1.3c', ' ms-pl', ' mit', ' mpl-2.0', ' osl-3.0', ' postgresql', ' ofl-1.1', ' ncsa', ' unlicense', ' zlib']
  },
  {
    type: 'confirm',
    name: 'confirmCredits',
    message: 'Would you like to include credits in your project README?',
    default: true
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Enter any credits you want to include:',
    when: ({ confirmCredits }) => confirmCredits
  },
  {
    type: 'confirm',
    name: 'confirmTest',
    message: 'Would you like to include screenshots of your project?',
    default: true
  },
  {
    type: 'input',
    name: 'test',
    message: 'Provide image URL link',
    when: ({ confirmTest }) => confirmTest
  },
  
])
.then(answers => {
  console.log(generateMarkdown(answers))
  fs.writeFile('README.md', generateMarkdown(answers), function (err) {
    if (err) return console.log(err);
    console.log('Congratulations! Check out your new README.md file!');
  });
})

