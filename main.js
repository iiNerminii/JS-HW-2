//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
function favFood(){
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
    }

    for(const [key, value] of Object.entries(person3)){
        console.log(value)
    }
}

console.log(favFood())

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

    Person.prototype.printInfo = () => {
        console.log("Name: " + this.name + ", Age: " + this.age);
    }
    Person.prototype.incrementAge = () => {
        this.age++;
    }
}
var nermin = new Person('Nermin', 22)
nermin.printInfo()

var sendi = new Person('Sendi', 31)
sendi.printInfo()
sendi.incrementAge()
sendi.incrementAge()
sendi.incrementAge()
sendi.printInfo()

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function strLength(str) {
    return new Promise((resolve, reject) => {
        if(str.length > 10){
            resolve("Big word")
        } else{
            reject("Small Number");
        }
    })
}

strLength("I went to the candy store and got a chocolate bar, then I found a golden ticket!!!")
    .then(result => console.log(result))
    .catch(error => console.log(error));

strLength("is 3 small")
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Code Wars problem 1 //

/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string 
of those numbers in the form of a phone number.

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!*/

function createPhoneNumber(numbers){
    let seeCell = /^\(\d{3}\)\s{1}\d{3}\-{1}\d{4}/;
    let cellStr;  
    let len = numbers.length;
    
    let st = '(';
    let nd = '';
    let rd = '';
  
    for(let f = 0; f < 3; f++){
      st += numbers[f];
    }
  
    st += ') ';
  
    for(let s = 3; s < 6; s++){
      nd += numbers[s];
    }
    
    nd += '-';
  
    for(let t = 6; t < 10; t++){
      rd += numbers[t];
    }
  
    cellStr = st + nd + rd;
    
    if(seeCell.test(cellStr)){
      return cellStr;
    } 
  }

// Code Wars problem 2 //

/* Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

Examples: 

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 
*/

function digital_root(n) {
    return (n - 1) % 9 + 1;
  }