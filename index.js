// function normalFun(cb) {
//   const res = setTimeout(() => {
//     const sum = 10 + 20;
//     cb(sum);
//   }, 1000);
//   console.log(res);
// }

// normalFun(function (sum) {
//   console.log(sum);
// });

console.time("settimeout");
const setIntervalId = setTimeout(() => {
  console.timeEnd("settimeout");
  console.log(new Date().toISOString());
}, 100);

const promise = new Promise((resolve) => resolve('Hello'));
promise.then(value => console.log(value));

let sum = 0;
console.time("sum");
for (let index = 1; index < 900000000; index++) {
  sum = sum + index;
}
console.log(sum);
console.timeEnd("sum");
