let arr = [
  "madam",
  "exit",
  "mam",
  "eye",
  "knife",
  "racecar",
  "good",
  "malayalam",
];
palindrome = (arr) => {
  return arr.filter((curr, idx, arr) => {
    const splitArr = curr.split("");
    const reversedString = splitArr.reduceRight(
      (prev, curr) => prev + curr,
      ""
    );
    if (curr === reversedString) return curr;
  });
};
console.log(palindrome(arr));
