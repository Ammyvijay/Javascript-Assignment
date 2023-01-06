// 1. Write a program to find whether a given year is a leap year or not.

console.log("Given year is leap year or not : \n");

var year = 2104;
console.log("Enter the year : " + year);

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(year + " is a leap year!");
} else {
  console.log(year + " is not a leap year!");
}
