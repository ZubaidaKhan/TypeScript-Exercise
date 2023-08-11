//Adding Comments: Choose two of the programs you’ve written, 
//and add at least one comment to each. If you don’t have anything specific to write
 //because your programs are too simple at this point, just add your name 
 //and the current date at the top of each program file. Then write one sentence describing what the program does.


//There is a three method to comment the code or line
//first we use //(double slashs) to comment the single line
//Second we use /* at starting point and close it with ending tag */
//thir we use a /* without ending tag that comment the whole code



//let uppercaseName:string = PersonName.toUpperCase();

//here we comment a variable that cause an error in log to execute the file without variable name

console.log(uppercaseName);

// step 3 show name in titlecase

let words:string[] = PersonName.split(" ");

/*let titlecaseName: string = ""

for (let i = 0 ; i < words.length; i++) {
    titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
};
*/
console.log(titlecaseName);