/* alert('Hello World') */
console.log('Hello World'); /* search mdn console for documentations */
// var, let, const  do not use var as its a global variable, always use const unless you are sure you want to change//
// string, numbers, boolean, null, undefined, symbol  no technical like float or decimal just numbers, typeof of null shows object but is bogus //
// "const y = undefined;"" == "let z;"" //

const name= 'Slicky Slim Shady';
const repeat = 'What';
const repeat2= 'Who'

// Concatenation
console.log('Hi my name is ' + repeat + ' Hi my name, Hi my name is ' + repeat2 + 'Hi my name, Hi my name is ' + name);
console.log(`Hi my name is ${repeat} Hi my name, Hi my name is ${repeat2} Hi my name, Hi my name is ${name}`);
console.log(name.substring(0,6).toUpperCase()); //toLowerCase() Case sensitive and doesnt autofill
console.log(repeat.split('h')); // if '' every letter will be seperated

//Constructor const numbers = new Array(1,2,3);
const fruits =['apples','oranges','pears']; //learn typescript'
fruits[3]='grapes'; // can add just not change
fruits.push('blackberry'); //pop remove latest
fruits.unshift('mangoes'); //.isArray(') to check if array .indexOf('') dhows where in the string

const person = {
    firstname: 'Slicky',
    lastname: 'Shady',
    age: 30, 
    hobbies: ['music','movies','sports'],
    address: {
        Street: '50 main st',
        City: 'Boston',
        State: 'MA'
    }
}

//do not use alert(person) it will show [object,object]
console.log(person.firstname, person.lastname); //person.address.city
const {firstname,lastname,address:{City}} = person; //remember the :
console.log(firstname,City);

person.email = 'a@a.com'; //email added



