/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program 
stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the 
new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/


let GuestList:Array<string> = ["Zubaida","Romail","Adan"];

//step 1 the person who can't make it

let GuestWhoCantMake:string="Romail";
console.log(`${GuestWhoCantMake}can't make it to dinner`);

//step invite new Guest

let Newguest:string="Hassan";
let indexofGuestWhoCantMake:number=GuestList.indexOf(GuestWhoCantMake)
console.log(indexofGuestWhoCantMake);
if(indexofGuestWhoCantMake ! == -1)
{
   GuestList[indexofGuestWhoCantMake] =Newguest;
}
//console.log(GuestList[2]);

//step 3

console.log("Second set  of invitation:");
GuestList.forEach((Guest:string)=>
{
    console.log(`Dear ${Guest}, you are invited to dinner`);
    
}
)
export{GuestList}



















