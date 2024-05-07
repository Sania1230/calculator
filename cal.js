//Modules are basically scripts written in separate files.\
import { addition } from "./add.js";
import { subtraction } from "./sub.js";
import { division } from "./divide.js";
import { multiply } from "./mul.js";
import inquirer from "inquirer";
//import * as inquirer from 'inquirer';
//let flag = false;
//while (flag == false) 
let answer = await inquirer.prompt([
    {
        name: "number1",
        type: "number",
        message: "Enter first number:",
    },
    {
        name: "number2",
        type: "number",
        message: "Enter second number:",
    },
    {
        name: "operations",
        type: "list",
        message: "Select operation:",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operations == "Addition") {
    console.log("Answer:" + addition(answer.number1, answer.number2));
}
else if (answer.operations == "Subtraction") {
    console.log("Answer:" + subtraction(answer.number1, answer.number2));
}
else if (answer.operations == "Multiplication") {
    console.log("Answer:" + multiply(answer.number1, answer.number2));
}
else if (answer.operations == "Division") {
    console.log("Answer:" + division(answer.number1, answer.number2));
}
