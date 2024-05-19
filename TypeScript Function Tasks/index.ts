//                    HomeWork Assignment

// 1. Miles-to-Kilometers Converter (Operators):
// • Create a variable named miles and assign a numeric value representing distance in miles.
// • Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 
// 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
// • Store the converted distance in kilometers in a variable named kilometers.
// • Use console.log to print a message in the following format: 
// The distance of 130 kms is equal to 209.2142 miles

let miles: number = 130;
let kilometers = miles * 1.60934;
console.log(`The distance of ${kilometers.toFixed(4)} kms is equal to ${miles} miles.`);

//                   XXXXXXXXXXXXXXXXXXXXX

// 2.Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less 
// than the dynamic number value.

import dynamicNumberInquirer from "inquirer";
const dynamicNumber = Math.floor(Math.random() * 5);
let userInput = await dynamicNumberInquirer.prompt([
    {
        message: "Enter a Number", type: "number", name: "number"

    }
])
const enteredNumber = userInput.number;
if (enteredNumber > dynamicNumber) {
    console.log(`The entered number ${enteredNumber} is greater than the dynamic number ${dynamicNumber}.`);
} else if (enteredNumber < dynamicNumber) {
    console.log(`The entered number ${enteredNumber} is less than the dynamic number ${dynamicNumber}.`);
} else {
    console.log(`The entered number ${enteredNumber} is equal to the dynamic number ${dynamicNumber}.`);
}


//                        XXXXXXXXXXXXXXXXXXXXX

// 3.Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default
// response.

import friendCheckerInquirer from "inquirer";

let friendCheckerName = await friendCheckerInquirer.prompt([
    {
        message: "Enter a Name: ", type: "string", name: "name"
    },
])
switch (friendCheckerName.name) {
    case "Areeba":
    case "Saima":
    case "Dua":
        console.log(`Hello ${friendCheckerName.name}! You are a known friend.`);
        break;
    default:
        console.log(`I'm sorry, I don't recognize this name.`);

        break;
}

//                        XXXXXXXXXXXXXXXXXXXXX

// 4.Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments.

let sumAndProduct = (value1: number, value2: number) => {
    let sum = value1 + value2;
    let product = value1 * value2;
    return { sum, product };

}
let num1 = 10;
let num2 = 5;
let output = (sumAndProduct(num1, num2));
console.log(`For Example num1=${num1} num2=${num2}: Sum=${output.sum}, Product=${output.product}`);

let num3 = 6;
let num4 = 4;
let result = (sumAndProduct(num3, num4));
console.log(`For Example num3=${num3} num4=${num4}: Sum=${result.sum}, Product=${result.product}`);

//                        XXXXXXXXXXXXXXXXXXXXX

// 5.Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.

let calculator = (num1: number, num2: number, operator: string) => {
    if (operator === "+") {
        return (num1 + num2);

    } else if (operator === "-") {
        console.log(num1 - num2);

    } else {
        return ("Invalid Operator!");
    }

}
let numberOne: number = 20;
let numberTwo: number = 5;
let operator: string = "+";
let resultOne = (calculator(numberOne, numberTwo, operator));
console.log(`${numberOne} ${operator} ${numberTwo} = ${resultOne}.`);
operator = "-";
let resultTwo = (calculator(numberOne, numberTwo, operator))
console.log(`${numberOne} ${operator} ${numberTwo} = ${resultTwo}.`);

//                         XXXXXXXXXXXXXXXXXXXXX

// 6.Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration.

let printArguments = function (arg: string) {
    console.log(arg);

}
printArguments("Hello GIAIC Students!");

function printArgumentsNormalFunction(arg: any) {
    console.log(arg);

}
printArgumentsNormalFunction("Hello PIAIC Students!");

//                         XXXXXXXXXXXXXXXXXXXXX