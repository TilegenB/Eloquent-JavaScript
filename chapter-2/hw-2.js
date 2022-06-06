// 1 Task
let lattice = '#';
let result = '';
for (let i = 0; i < 8; i++) {
    result += lattice;
    console.log(result);
}
// 2 Task
let num = 100;
for (let i = 0; i < num; i++) {
    if (i % 3 === 0) {
        console.log('Fizz ' + [i]);
    } else if (i % 5 === 0) {
        console.log(`Buzz ${[i]}`);
    } else if (i % 3 && i % 5) {
        console.log(`FizzBuzz ${[i]}`);
    }
}
// 3 Task Error
/* 
 # # # #
# # # #
 # # # #
# # # #
 # # # #

*/
{
let lattice = '#';
for (let y = 1; y < 9; y++) {
    if (y % 2 === 0) {
        console.log(lattice);
    }
}
}

{
let size = 8;
let cheesSym = '#';
let cheesDesk = '';
for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
        cheesDesk += ` ${cheesSym} ${cheesSym} ${cheesSym} ${cheesSym}`;
    } else {
        cheesDesk += `\n ${cheesSym}`;
    }
}
console.log(cheesDesk);
}