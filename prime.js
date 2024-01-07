let arr = [5, 11, 9, 20, 19, 15, 2, 6, 18];
let prime = [];
isPrime = (arr) => {
  if (arr == 2) return true;
  if (arr % 2 == 0) return false;
  for (let i = 3; i * i <= arr; i += 2) {
    if (arr % i == 0) {
      return false;
    }
  }
  return true;
};
for (let i = 0; i < arr.length; i++) {
  if (isPrime(arr[i])) {
    prime.push(arr[i]);
  }
}
console.log(prime);
