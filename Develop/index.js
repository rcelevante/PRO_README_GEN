const inquirer = require('inquirer');
fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
//const promptUser = () => {
//    return 
//};
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
    when: ({ confirmAbout }) => confirmAbout
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide some instructions on how to USE your project:',
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
    when: ({ confirmAbout }) => confirmAbout
  },
])
.then(answers => {
  console.log(generateMarkdown(answers))
  fs.writeFile('README.md', generateMarkdown(answers), function (err) {
    if (err) return console.log(err);
    console.log('README > README.md');
  });
})
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
//init();
// promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });
