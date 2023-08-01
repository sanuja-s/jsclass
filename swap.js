num1 = parseInt(prompt("Enter firstnumber"));
num2 = parseInt(prompt("Enter secondnumber"));

swap = num1;
num1 = num2;
num2 = swap;

console.log('first number after swap ' + num1);
console.log('second number after swap ' + num2);