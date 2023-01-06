// Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.

console.log("Convert temperature to and from Celsius, Fahrenheit");

var temp = 60;
console.log("Enter the temperature : " + temp);

console.log("\nFahrenheit to Celsius :");
var C = (5 / 9) * (temp - 32);
console.log(`From Fahrenheit ${temp} to Celsius ${parseFloat(C).toFixed(2)}`);
console.log("Celsius to Fahrenheit :");
var F = temp * (9 / 5) + 32;
console.log(`From Celsius ${temp} to Fahrenheit ${parseFloat(F).toFixed(2)}`);
