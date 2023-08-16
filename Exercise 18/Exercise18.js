/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Madina Munawarah", "Paris", "Turkey", "Naran Kaghan"];
//  Step_2 Print your array in its original order.
console.log("Original order");
console.log(places);
//Step_3 Print your array in alphabetical order without modifying the actual list.
console.log('Array in alphabetical order without modifying the actual list.');
console.log(__spreadArray([], places, true).sort());
//Step_4 Show that your array is still in its original order by printing it.
console.log("Array is still in its original order by printing it.");
console.log(places);
//Step_5  Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Array in reverse alphabetical order without changing the order of the original list.");
console.log(__spreadArray([], places, true).sort().reverse());
//Step_6 Show that your array is still in its original order by printing it again.
console.log("Array is still in its original order by printing it again.");
console.log(places);
//Step_7 Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse order");
places.reverse();
console.log(places);
//Step_8  Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nBack to its original order");
places.reverse();
console.log(places);
//Step_9 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nAlphabetical order");
places.sort();
console.log(places);
//Step_10 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nSort and Reverse alphabetical order");
places.sort().reverse();
console.log(places);
