let arr = [2, 4, 6, 89, 45, 19, 20];
sum = (arr) => {
  let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
  return sum;
};
console.log(sum(arr));
