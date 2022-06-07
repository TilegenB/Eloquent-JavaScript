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
    let size = 8;
    let board = '';
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 === 0) {
                board += ' ';
            } else {
                board += '#';
            }
        }
        board += '\n';
    }
    console.log(board);
}