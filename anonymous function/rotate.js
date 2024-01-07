let a = [10, 20, 30, 40, 50];
let b = 4;

function answer(a, b) {
  if (a.length === b || b === 0) {
    return a;
  }

  b = b % a.length;
  for (let i = 0; i < b; i++) {
    a.unshift(a.pop());
  }
  return a;
}
// console.log(answer);
