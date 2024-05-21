const x= 10;
const color = x > 10 ? 'red' : 'blue'; // ? is then

console.log(color)

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

function addnum(num1,num2){
    return num1+num2;
}
console.log(addnum(5,5));

//or

const addnums = (num1,num2) => num1+num2;
console.log(addnums(5,6));

//stopped video at 59:06