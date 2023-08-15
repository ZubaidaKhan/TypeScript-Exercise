/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16.
 Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program.*/
var guestList = ["Zubaida", "Romail", "Adan"];
//Removing last element that not allow for a dinner
while (guestList.length > 2) {
    var Removeguest = guestList.pop();
    console.log("Sorry,".concat(Removeguest, ",you are not allow"));
}
// Message to two guest to invite
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hello,".concat(guest, " you are invited for a dinner"));
}
//Removing last two elements and return the array empty
guestList.pop();
guestList.pop();
console.log("Guest list after dinner,".concat(guestList));
