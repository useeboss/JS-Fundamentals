// 9-add.js
function add(a, b) {
  return a + b;
}

const first = Number.parseInt(process.argv[2], 10);
const second = Number.parseInt(process.argv[3], 10);

console.log(add(first, second));
