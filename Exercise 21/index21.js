//They think of something you could store in a TypeScript Object. Write a program that creates Objects 
//containing these items.
var Bouquet = {
    name: "Spring delight",
    price: 300,
    description: "Beautifull arrangement of flowers"
};
//Array of object
var bouquets = [];
bouquets.push(Bouquet);
bouquets.push({
    name: "Summer bills",
    price: 340,
    description: "Beautifull arrangement of summer flowers"
});
var bouquet3 = {
    name: "Red hot",
    price: 340,
    description: "Beautifull arrangement of red roses"
};
bouquets.push(bouquet3);
console.log(bouquets);
function displayBouquets(bouquets) {
    for (var _i = 0, bouquets_1 = bouquets; _i < bouquets_1.length; _i++) {
        var i = bouquets_1[_i];
        console.log("\n        title:".concat(i.name, ",\n        price:").concat(i.price, "\n        description:").concat(i.description, "\n        _______________\n"));
    }
}
displayBouquets(bouquets);
