const prompt = require('prompt-sync')({sigint: true});

let rigged = Number(prompt("Enter number from 1 - 6"));
let roll = Math.ceil(Math.random() * 7);

console.log("Actual roll: " + roll);
if (roll === 7) {
    console.log(rigged);
} else {
    console.log(roll);
}