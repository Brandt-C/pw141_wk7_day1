console.log("HELLO, is anyone there??")


// this is a single-line comment

/*  
This is 
a 
luti-line
comment
*/

// Python vs JS data types
/*
  - strings?  -- same thing
  -  Booleans?  --same thing, no cap-letters
  -int?float   -- numeric
*/

//SYNTAX-- snake_case is standard for python
// and camelCase is standard for JS but either one is valid
myVariable = 9087;
my_variable = 987234;
myvar4 = 92837;
x = 987

//we want to to be MORE specific about variable declaration/definiton
// rather than less , more to come on that later!
var x = 876


console.log(x)

var teach = "Brandt";

console.log(teach);
console.log(typeof teach)

var bool1 = true;
var bool2 = false;

console.log(bool1)
console.log(typeof bool2)

// lists and dictionaries
// arrays and objects

// array
 var myArr= [13, 345, 456, "a string", true, 'last']

 console.log(myArr[0])
 console.log(myArr[3])

 console.log(myArr)

 // Object
 var myObject = {'aKey': "A Value"};
 console.log(myObject)

 console.log(myObject['aKey']) // Bracket notation ALWAYS works

 console.log(myObject.aKey) // Dot notation USUALLY works

console.log(unknownVar)
var unknownVar;
unknownVar = 987234;
console.log(unknownVar)

//  Let's talk about the RIGHT way to define variables

// let
    // allows for re-definition but not re-declaration
// const
    // doesn't all for either

let myVar2 = 45
myVar2 += 34
console.log(myVar2)

const myVar1 = 56
// myVar1 += 345


// MATH !
 
// pretty much the same as python. . . 


// add +
let myNums = 10;
let myNums1 = 50;
let myNums2 = 33;
let myNums3 = -14;

console.log(myNums + myNums2)


// Subtract -
console.log(myNums - myNums2)


// Multiply *
console.log(myNums * myNums2)

// divide /
console.log(myNums / myNums2)

// exponents **
console.log(2 ** 7)

/*
Rounding
Math.round(<value>)
Math.ceil(<value>)
Math.floor(<value>)
*/

let pie = 3.141512

console.log(Math.round(pie))
console.log(Math.floor(pie))
console.log(Math.ceil(pie))

//toFixed   -- VERY common, just remember it's out of place!


console.log(pie.toFixed(3))
console.log(pie)

console.log(Math.round(pie*100)/100) // random work-around to rounding JIC

console.log('JAVASCRIPT WTF THINGS:\n')

let test = 4.56 + '45';
console.log(test)
console.log(typeof test)

let test2 = '4' + false;
console.log(test2)
console.log(typeof test2)

let test3 = 3 + true;
console.log(test3)
console.log(typeof test3)

let test4 = 3 + false
console.log(test4)
console.log(typeof test4)

let test5 = [] + undefined;
console.log(test5)
console.log(typeof test5)

let test6 = [] + false;
console.log(test6)
console.log(typeof test6)

let test7 = [] + 45;
console.log(test7)
console.log(typeof test7)

let gwen = ('b' + 'a' + + 'a' + 'a')

console.log(gwen)

console.log("FUNCTIONS!\n")

//syntax 
//def funcname(parameters):
//  codeblock indented

//for JS  there are a variety of ways to define a function
// the most straight-forward way first:
// function <name of func>(parameters){code to execute}

function hiWorld(){ return "Hello JS world!"}
console.log(hiWorld)
console.log(hiWorld())


// THE JS VERSION OF THE PYTHON F-STRING IS WITH BACKTICKS
// DISPLAYED BELOW
let hiWorld2 = function (name){
    return `Hello ${name}`
}
console.log(hiWorld2('Buhay'))

// ANOTHER way, the arrow function

// basic syntax  () => {}
let hiWorld3 =  (n) => {
    return `Hello and welcome mr/ms/mx ${n}`
}
console.log(hiWorld3('Adrian'))

console.log(((n)=>{return `Hello and welcome mr/ms/mx ${n}`})('Rhett'))

/* conditionals!!
Python:
if elif else

JS:
if (conditional){
    code block
}else if (conditional){
    code block
}else {
    code block
}
*/

let age = 19;

if (age < 18){
console.log("You're a kid!")
} else if (age > 64) {
                console.log("you're a senior")
} else {
            console.log("you're an adult")
}

// comparison operators:
/* MOSTLY the same as python
< > <= >=  THESE are all the same BUT
and -->   &&
or -->  ||
and then there is the whole equality situation. . .. 
= is assignment just like pyhton
== is VALUE equality
=== is type and value equality
*/
console.log('4' == 4)
console.log('4' === 4)

let color = "blue";

if (color === "blue"  || color === 'black'){
    console.log("THE OR STATEMENT FIRED!")
}else if (color === "blue"  && color === 'black'){
    console.log("not gonna fire")
}

//SIDENOTE  incrementing in JS by one ++ or --.  Otherwise still +=

// LOOPS!

// The standard JS loop:
// pretty close to the index loop in python!
/*
python- 
for i in range(len(iterable)):

JS- 
for (let i = 0; i<iterable.length; i++){
    code block
}
*/

let itString = 'xyzabcde'

for (let i = 0; i < itString.length; i++){
    console.log(itString[i])
}
/* python example again:
for i in range(len(itString)):
    print(itString[i])

*/

for (let i = 0; i < itString.length; i++){
    for (let j = 1; j < 3; j++){
        console.log(itString[i], j)
    }
}

//while loop

let ind = 0;
while (ind < 20){
    console.log(ind);
    ind++;
}

// for each, for of, and for in loops. . . 


//do-while loop
// runs ONCE no matter what!
do {
    console.log('THIS IS THE FIRST STEP that is ALWAYS taken')
} while (false){
    console.log('you should not see this running, but it will. .. ONCE')
}

// arrays
let animals = ['donkey', 'eagle', 'bear', 'zebra']

for (let i = 0; i < animals.length; i++){
    console.log(animals[i])
}

// adding and removing values
animals.push('tiger', 'monkey')

console.log(animals)

// removing. . .  we DON'T have .remove()   

animals.pop()
console.log(animals)

animals.splice(1, 3, "goat")

console.log(animals)

console.log(animals.slice(1,3))

// Other methods to mention
// indexOf()  .join()
console.log(animals.join(', '))
// 'separator'.join(iterable)
console.log(animals)
// switch case statement. . .  a different conditional structure.

switch (animals[1]){
    case 'tiger' :
        console.log('nice stripes');
        break;
    case 'donkey' : 
        console.log('hee-haw');
        break;
    default :
        console.log("I don't even know what kind of animal you are!")
}



