const prompt = require('prompt-sync')({ sigint: true });

let roll = Number(prompt("Enter number 1-6")); 
let dice = Math.ceil((Math.random()*6)+1);
console.log("Roll: " + roll);
if (roll === 6){
    console.log(roll)
} else {
    console.log("roll again")
}


