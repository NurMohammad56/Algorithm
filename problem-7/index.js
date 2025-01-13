let myObj = {
  a: 10,
  b: 20,
};

console.log(`Before swap the value of a: ${myObj.a} and b: ${myObj.b}`);

function swap(x) {
  console.log(`Before swap inside the function a: ${x.a} and b: ${x.b} `);

  let temp = x.a;
  x.a = x.b;
  x.b = temp;

  console.log(`After swap inside function a: ${x.a} and b ${x.b}`);
}

swap(myObj);
console.log(`After swap a: ${myObj.a} and b ${myObj.b}`);
