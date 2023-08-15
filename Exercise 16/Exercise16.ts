/*More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the
 end of your list. • Print a new set of invitation messages, one for each person in your list.*/

 let guestList:Array<string>=["Zubaida","Romail","Adan"];
 for(let guest of guestList ){
    console.log(`Hello,${guest} we found a bigger dinner table`);
    
 }
 // Sptep_2 add guest to biginning of Array
 //unshift() is an inbuilt TypeScript function that is used to add one or more elements to the beginning of an array and returns the new length of the array.
 // Parameter: This method accepts n number of similar elements.
 let NewguestAtBig:string="Ali";
 guestList.unshift(NewguestAtBig);
 console.log(guestList);

 let NewguestAtmid:string="Hania";
 let middleindex:number=guestList.length/2;

 //splice() is an inbuilt TypeScript function which is used to change the content of an array, adding new elements while removing old elements.
guestList.splice(middleindex,0,NewguestAtmid)
console.log(guestList);

//Overview. We push an element to an array in TypeScript, similarly to pushing an element in JavaScript.
// We use the push() method for this purpose. 
//In TypeScript, we can push or add one or more elements to the end of an Array.
let NewguestAtend:string="Faisal";
guestList.push(NewguestAtend);
console.log(guestList);

console.log("New set pf invitation message");

for(let guest of guestList ){
    console.log(`Dear,${guest} we are invited to dinner`);
    
 }





 

