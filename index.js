// Including packages needed to produce this work
const fs = require('fs');
const path = require('path');
const inquirer = require ('inquirer');


//Questions for management 

const questionsForManagement = [

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

];

//Follow up questions for students 

const followUpQuestions = [

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
        message: "What is the team manager's name?",
        name: "Manager Name",
    }, 

    {
        type: "input",
        message: "What is the team manager's name?",
        name: "Manager Name",
    }, 

];










