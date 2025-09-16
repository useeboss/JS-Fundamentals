// 5-to_integer.js
const arg = process.argv[2];
const num = Number.parseInt(arg, 10);

if (Number.isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}
