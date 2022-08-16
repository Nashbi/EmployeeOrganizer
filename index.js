// Including packages needed to produce this work
const fs = require('fs');
const path = require('path');
var inquirer = require('inquirer');

//Questions for management 

const questionsForManagement = () => { 
    inquirer.prompt ( [

{
    type: "input",
    message: "What is the team manager's name?",
    name: "Manager Name",
},  
{
    type: "input",
    message: "What is the team manager's name?",
    name: "Manager Name",
}, 
{
    type: "input",
    message: "What is the manager's ID?",
    name: " Manager Employee ID",
}, 
{
    type: "input",
    message: "What is the manager's email address?",
    name: "Manager Email Address",
}, 
{
    type: "input",
    message: "What is the manager's office number?",
    name: " Manager Office number",
}, 

]).then(data => {

})
};

//Follow up questions for students 

const followUpQuestions = () => {
    inquirer.prompt (
    [

    {
        type: "input",
        message: "What is the employee's name?",
        name: "Employee Email",
    }, 

    {
        type: "input",
        message: "What is the employee ID",
        name: "Employee ID",
    }, 

    {
        type: "input",
        message: "What is the employee github?",
        name: "Employee github",
    }, 

    {
        type: "input",
        message: "What is the team member's role",
        name: "Employee role",
    }, 

])};

questionsForManagement();

followUpQuestions ();










