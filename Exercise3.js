// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var PersonName = "Zubaida Ramzan";
// step 1 show in lower case:
var lowercaseName = PersonName.toLowerCase();
console.log(lowercaseName);
// step 2 show name in uppercaset
var uppercaseName = PersonName.toUpperCase();
console.log(uppercaseName);
// step 3 show name in titlecase
var words = PersonName.split(" ");
var titlecaseName = "";
for (var i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
