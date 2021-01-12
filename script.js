let numberOne = 0;
let numberTwo = 1;
let numberNew;

let sequence;
for (sequence = 1; sequence < 11; sequence++) {
  numberNew = numberOne + numberTwo;
  numberOne = numberTwo;
  numberTwo = numberNew;
  console.log(numberNew);
}
