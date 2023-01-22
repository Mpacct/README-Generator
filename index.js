// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description for your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: "Put your project's usage and examples here:"
    },
    // {
    //     type: 'list',
    //     name: 'license',
    //     message: 'Enter the description for your project:'
    // },
    {
        type: 'input',
        name: 'contributing',
        message: 'List any developers you collaborated with on with this project and provide a link to their gitHub:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter instructions for how to run tests for your project:'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your gitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown(data), (err) => {
        err ? console.log(err) : console.log("success")
    });
}

// // TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        writeToFile("README5.md", answers)
    });
};

// Function call to initialize app
init();




