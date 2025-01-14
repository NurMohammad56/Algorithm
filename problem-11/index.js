const num = 5;
let start = "";

for (let i = num; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    start += "*";
  }
  start += "\n";
}

console.log(start);
