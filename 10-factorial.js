// 10-factorial.js
function factorial(n) {
  if (Number.isNaN(n) || n < 0) {
    return 1;
  }
  return n === 0 ? 1 : n * factorial(n - 1);
}

const input = Number.parseInt(process.argv[2], 10);
console.log(factorial(input));
