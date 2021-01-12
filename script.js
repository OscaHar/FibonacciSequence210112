let numberOne = 0;
let numberTwo = 1;
let numberNew;
let printSequence = "0 1 ";

let sequence = 16;
let i;
for (i = 1; i < sequence; i++) {
  numberNew = numberOne + numberTwo;
  numberOne = numberTwo;
  numberTwo = numberNew;
  printSequence += `${numberNew} `;
}
console.log(printSequence);
