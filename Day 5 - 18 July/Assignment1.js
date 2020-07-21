var input = [];
var num = +prompt('Please enter a positive number:');
for(var i = 1; i<=num; i++){
    input.push(i);
}
console.log(input);
let odd = input.filter(el=>el%2);
console.log(`Odd numbers in the array are: => ${odd}`);
let cube = odd.map(el=>el**3);
console.log(`Array of the cubes of odd numbers in the array => ${cube}`);