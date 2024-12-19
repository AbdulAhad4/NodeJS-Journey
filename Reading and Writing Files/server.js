const prompt = require('prompt-sync')();
const fs = require('fs');

let name = prompt('What is your name? ');
let age = prompt("How old are you?")
let gender = prompt("What is your sex?")

fs.writeFile("information.txt", `Name = ${name}, Age = ${age}, Gender = ${gender}`, () => {
    console.log('Patient information saved successfully');    
})

fs.readFile("information.txt", (e, d) => {
    console.log(d.toString());
     
})