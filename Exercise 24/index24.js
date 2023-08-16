/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests. Have at least one True and one False result
 for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
//Step_1 Tests for equality and inequality with strings
var str1 = "Hello world";
var str2 = "hello world";
console.log(str1 === str2); //false
console.log(str1 !== str2); //true
//Step_2 Tests using the lower case function
var text1 = "Hello world";
var text2 = "hello world";
console.log(text1.toLowerCase() === text2); //true
//Step_3  Numerical tests involving equality and inequality, greater than and 
//less than, greater than or equal to, and less than or equal to.
var num1 = 25;
var num2 = 8;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false
//Step_4 Tests using "and" and "or" operators
var x = 10;
var y = 15;
var z = 20;
console.log(x < y && y < z); //true,both
console.log(x < y || y > z); //true,at least one
console.log(x > y && y < z); //false
console.log(x > y || y > z); //false
//Step_5 Test whether an item is in a array
var item = ["banna", "Apple", "Orange"];
console.log(item.includes("apple"));
console.log(item.includes("kivi"));
var color = ["yellow", "green", "Orange"];
console.log(!color.includes("purple")); //true
console.log(!color.includes("green")); //false
