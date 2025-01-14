const rows = 5;
const col = 4;
let start = 0;

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= col; j++) {
    if (j == 1 || j == col) {
      start += "*";
    } else if (i == 1 || i == rows) {
      start += "*";
    } else {
      start += " ";
    }
  }
  start += "\n";
}
console.log(start);
