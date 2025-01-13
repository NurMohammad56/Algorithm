const rows = 5;
const col = 6;
let start = "";

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < col; j++) {
    start += "*";
  }
  start += "\n";
}
console.log(start);
