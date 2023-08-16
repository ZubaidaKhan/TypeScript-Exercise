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
const str1:string="Hello world";
const str2:string="hello world";
console.log(str1===str2);//false
console.log(str1!==str2);//true

//Step_2 Tests using the lower case function
const text1:string="Hello world";
const text2:string="hello world";
console.log(text1.toLowerCase()===text2);//true

//Step_3  Numerical tests involving equality and inequality, greater than and 
//less than, greater than or equal to, and less than or equal to.
let num1:number=25;
let num2:number=8;
console.log(num1===num2);//false
console.log(num1!==num2);//true
console.log(num1>num2);//true
console.log(num1<num2);//false
console.log(num1>=num2);//true
console.log(num1<=num2);//false

//Step_4 Tests using "and" and "or" operators
const x:number=10;
const y:number=15;
const z:number=20;
console.log(x<y && y<z);//true,both
console.log(x<y || y>z);//true,at least one
console.log(x>y && y<z);//false
console.log(x>y || y>z);//false

//Step_5 Test whether an item is in a array
const items:string[]=["banna","Apple","Orange"];
console.log(items.includes("apple"));
console.log(items.includes("kivi"));
//Step_6 Test whether an item is not in a array
const colors:string[]=["yellow","green","Orange"];
console.log(!colors.includes("purple"));//true
console.log(!colors.includes("green"));//false



































