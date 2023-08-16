/*ntentional Error: If you haven’t received an array index error 
in one of your programs yet, try to make one happen. Change an index 
in one of your programs to produce an index error.
 Make sure you correct the error before closing the program.*/

 //Function to create an object of fruits
 function createFruits(name:string,color:string,taste:string)
 {
    return{
        name,
        color,
        taste,
    }
 }
 const fruits=
 [
    createFruits("Apple","Red","sweet"),
    createFruits("Orange","Orange","Citrusy"),
    createFruits("Mango","Yellow","sweet"),
    createFruits("Strawberry","Red","sweet")
];

const invalidIndex=10;
console.log(`fruits at index ${invalidIndex}` ,fruits[invalidIndex]);

fruits.forEach((fruit)=>{
    console.log(`Name:${fruit.name},
    Color:${fruit.color},
    Taste:${fruit.taste}`);
    
})



