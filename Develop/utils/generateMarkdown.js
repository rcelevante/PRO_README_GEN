// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}

# ${data.github}

## Description
${data.description}

## Installation
${data.install}

## Usage 
${data.usage}

## Credits
${data.credits}

## License

`;
}

module.exports = generateMarkdown;
