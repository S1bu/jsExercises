/*
1. Variable ---> conatiner that stores a single value of any data type ,so it can be used later on

2. Value --> is the data thats being held or stored inside a varibale

3. Data type -->the kind of data your value is (example: 1 is a number )

4. Initialization --> when you stire the value in the variable

5. Tell me the difference between let, var, and const.

let --> localy scoped(only declared inside a function)
var --> globally scoped(can be declared outside a function)
const --> your variable won't change

6. What is a variable scope? --> its the accessiblityor visibilty  of a varibale (Block scope , function scope,Global scope)


7. When can you decide when to use a for or while, forEach and do while loop?

for loop--> to iterate(repeat) a block of code for certain number of times
while loop-->to iterate(repeat) a block of code for an unknown number of times
forEach--> when you want to do something with every item in an array
dowhile-->  to iterate(repeat) a block of code once

8. Define hoisting and variable scoping?
ihoisting -->intepreter that moves the declaration of function and places it before the functions execution

variable scoping-->determining the accessablilty of a variable
*/
function fullName(name,surname) {
    console.log(name,surname)
}

console.log(fullName('Sibusiso','Dyan'))
 