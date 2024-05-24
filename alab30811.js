// The initial numbers that must be verified.
const n1 = 1; //n1 divided by 5
const n2 = 15; //n2 divided by 5
const n3 = 20; //n2 divided by 5
const n4 = 7; //n2 divided by 5

//let merci = 9
//let sarai = 8
//let robert = 3

//let allNumbers = (merci+sarai+robert);


// Check one: add up to 50 
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

//let allNumbers = (n1, n2, n3, n4 /5);
console.log(isSum50)

let joy =  n1 > n4
console.log(joy)

let jolin = ((n1 - n2 )* n3) % n4;

console.log(jolin)

//Part 2




let sum = 0;

for (let i = 0; i < 5; i++) {

   if (i % 2 === 0) continue;

   sum += i;

}

console.log(sum);

let i = 0;

while (i < 3) {

   console.log(i);

   i++;}