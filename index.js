const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([

    {
        name: 'Title',
        type: 'input',
        message: 'What is the title of your project?'

    },
    {
        name: 'Description',
        type: 'input',
        message: 'What is the description of your project?'

    },
    {
        name: 'InstallationInstructions',
        type: 'input',
        message: 'What are the instruction to install your project?'

    },
    {
        name: 'UsageInfo',
        type: 'input',
        message: 'Explain the usage of your project.'

    },
    {
        name: 'Licensing',
        type: 'input',
        message: 'What type of License would you like to use?'

    },
    {
        name: 'ContributionGuidelines',
        type: 'input',
        message: 'What are the guidelines to contributing in your repository?'

    },
    {
        name: 'TestInstructions',
        type: 'input',
        message: 'What are some instructions related to testing you would like to add?'

    }

]).then(data => {

let titleData = `# ${data.Title}`

let descriptionData = `

## Description
    ${data.Description}`

let tableOfContentsData;
let installationData;
let usageData;
let licenseData; 
let contributingData;
let testsData;   
let questionsData;

// See if any extra fields have been filled making a table of contents necessary
if(data.InstallationInstructions === `` && data.UsageInfo === `` && data.License === `` && data.ContributionGuidelines === `` && data.TestInstructions === ``){

    tableOfContentsData = ``;
    console.log('Shouldnt be a TOC bruh')

}else{

    tableOfContentsData = `
    
##### Table of Contents`;

    console.log('We def need a TOC my dude')

}

// Check if there are installations instructions
if(data.InstallationInstructions != ``){

    installationData = `

<a name="installation"></a>
## Installation
    
${data.InstallationInstructions}`;

    tableOfContentsData = tableOfContentsData + `
[Installation](#installation)<br>`
    console.log('installation info')

}else{

    installationData = ``;

}

// See if there is usage info
if(data.UsageInfo != ``){

    usageData = `

<a name="usage"></a>
## Usage

${data.UsageInfo}`;

    tableOfContentsData = tableOfContentsData + `
[Usage](#usage)<br>`
    console.log('usage info')

}else{

    usageData = ``;

}

// seeing if there is license data
if(data.Licensing != ``){

    licenseData = `

<a name="license"></a>
## License

${data.Licensing}`;

    tableOfContentsData = tableOfContentsData + `
[License](#license)<br>`
    console.log('license info')

}else{

    licenseData = ``;

}

// Checking for contribution guidelines
if(data.ContributionGuidelines != ``){

    contributingData =`

<a name="contributing"></a>
## Contributing

${data.ContributionGuidelines}`;

    tableOfContentsData = tableOfContentsData + `
[Contributing](#contributing)<br>`
    console.log('contributing info')

}else{

    contributingData = ``;

}

// Checking for test instructions
if(data.TestInstructions != ``){

    testsData = `

<a name="tests"></a>
## Tests

${data.TestInstructions}`;

    tableOfContentsData = tableOfContentsData + `
[Tests](#tests)`
    console.log('tests info')

}else{

    testsData = ``;

}

// Putting everything together
theData = titleData + descriptionData + tableOfContentsData + installationData + usageData + licenseData + contributingData + testsData;

    // Writing the put together data to the readme
    fs.writeFile('./README.md' , theData, function(err){

        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');

    });

// Error catching
}).catch(err => {

    console.log(err);

})