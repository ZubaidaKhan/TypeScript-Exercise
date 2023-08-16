/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
console.log(`\nFirst version of code`);

let Aliens_color:string='green';
if(Aliens_color == 'green')
{
    console.log(`Congratulation! You just earned 5 points `);
    
}
else if(Aliens_color == 'yellow'){
    console.log(`Congratulation! You just earned 10 points `);
}
else if(Aliens_color == 'red'){
    console.log(`Congratulation! You just earned 15 points `);
}
else {
    console.log(`Unknown alien color `);
}

console.log(`\nSecond version of code`);

Aliens_color='yellow'
if(Aliens_color == 'green')
{
    console.log(`Congratulation! You just earned 5 points `);
    
}
else if(Aliens_color == 'yellow'){
    console.log(`Congratulation! You just earned 10 points `);
}
else if(Aliens_color == 'red'){
    console.log(`Congratulation! You just earned 15 points `);
}
else {
    console.log(`Unknown alien color `);
}

console.log(`\nThird version of code`);

Aliens_color='red'
if(Aliens_color == 'green')
{
    console.log(`Congratulation! You just earned 5 points `);
    
}
else if(Aliens_color == 'yellow'){
    console.log(`Congratulation! You just earned 10 points `);
}
else if(Aliens_color == 'red'){
    console.log(`Congratulation! You just earned 15 points `);
}
else {
    console.log(`Unknown alien color `);
}
