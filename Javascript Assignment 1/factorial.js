// 3.Write a program to find the factorial of a number.

console.log("Find the factorial of a number: \n");

var n = 4;
console.log("Enter the Number :" + n);

if (n < 0) {
  console.log(`Error! Factorial Number of negative ${n} does not exist!`);
} else if (n == 0) {
  console.log("Factorial Number of 0 is 1");
} else {
  var fac = 1;
  for (var i = 1; i <= n; i++) {
    fac *= i;
  }
  console.log(`Factorial Number of ${n} is ${fac}`);
}
