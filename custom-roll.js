const prompt = require('prompt-sync')({sigint: true});

let x = Number(prompt("How many sides on the dice? "));
let num1 = Math.ceil(Math.random()*x);
let num2 = Math.ceil(Math.random());

if (x <= 1) {
    console.log("pick a different number")
} else if ( x>=2 && x<=9){
    if (num1 === num2) {
        console.log("your numbers are" + num1 + "and" + num2)
    } else{
        console.log("your numbers are " + num1 + num2)
    }
}