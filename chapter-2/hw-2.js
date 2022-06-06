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
// 3 Task
{
    let chees = '#';
    let cheesDesk = ' ';
    let num = 9;
    for (let i = 0; i < num; i++) {
        if (num % 2 === 0) {
            console.log(cheesDesk += chees + ' #');
        } else {
            console.log(cheesDesk += chees);
        }
    }
}