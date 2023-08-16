//They think of something you could store in a TypeScript Object. Write a program that creates Objects 
//containing these items.

const Bouquet=
{
    name:"Spring delight",
    price:300,
    description:"Beautifull arrangement of flowers"


}
//Array of object
let bouquets:Array<typeof Bouquet>=[];
bouquets.push(Bouquet);
bouquets.push({
    name:"Summer bills",
    price:340,
    description:"Beautifull arrangement of summer flowers"
});

let bouquet3=
{
    name:"Red hot",
    price:340,
    description:"Beautifull arrangement of red roses"
}
bouquets.push(bouquet3);
console.log(bouquets);

function displayBouquets(bouquets:Array<typeof  Bouquet>)
{
    for(let i of bouquets)
    {
        console.log(`
        title:${i.name},
        price:${i.price}
        description:${i.description}
        _______________\n`);
        
    }
}
displayBouquets(bouquets);