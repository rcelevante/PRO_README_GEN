// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## URL
${data.github}

${data.repo}

# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Languages](#languages)
5. [Badge](#badge)
6. [Credits](#credits)
7. [License](#license)
8. [Contributing](#contributing)
9. [Test](#test)

# Description
${data.description}

# Installation
${data.install}

# Usage 
${data.usage}
Please contact me at ${data.email} if you have any questions on how to use the application.

# Languages
${data.language}

# Badge 
<img alt="Custom badge" src="https://img.shields.io/endpoint?url=${data.repo}&style?style=for-the-badge&logo=appveyor&logoColor=${data.color}&logoWidth=60">

# Credits
${data.credits}

# License
${data.license}

# Contributing
If you were one of the people who worked on this projectm kindly e-mail me at ${data.email}. Please include detailed contribution and the area on where you want me to add your part.

# Test
Screenshots:
${data.test}

`;
}

module.exports = generateMarkdown;
