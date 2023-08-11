/*Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name, print a message to them.
 The text of each message should be the same,
 but each message should be personalized with the person’s name.*/
var names = ['Zahra', 'Adan', 'Saira', 'Romail'];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Good morning: ".concat(name_1, ", I hope you are having a fantastic day"));
}
