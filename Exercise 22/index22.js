/*ntentional Error: If you haven’t received an array index error
in one of your programs yet, try to make one happen. Change an index
in one of your programs to produce an index error.
 Make sure you correct the error before closing the program.*/
//Function to create an object of fruits
function createFruits(name, color, taste) {
    return {
        name: name,
        color: color,
        taste: taste,
    };
}
var fruits = [
    createFruits("Apple", "Red", "sweet"),
    createFruits("Orange", "Orange", "Citrusy"),
    createFruits("Mango", "Yellow", "sweet"),
    createFruits("Strawberry", "Red", "sweet")
];
var invalidIndex = 10;
console.log("fruits at index ".concat(invalidIndex), fruits[invalidIndex]);
fruits.forEach(function (fruit) {
    console.log("Name:".concat(fruit.name, ",\n    Color:").concat(fruit.color, ",\n    Taste:").concat(fruit.taste));
});
