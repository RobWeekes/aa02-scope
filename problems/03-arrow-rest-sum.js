/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the function to a variable using the const keyword and
arrow function syntax.

**Hint**: Use rest parameter syntax!   // test comment

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
***********************************************************************/

const arrowRestSum = (...numsArr) => {
  console.log(numsArr);

  let sum = 0;
  for (let i = 0; i < numsArr.length; i++){
      sum += numsArr[i];
      console.log(sum);
  }
  console.log(sum);
  return sum;
}

arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0


// FIRST TRY NOT WORKING
// const arrowRestSum = (...numsArr) => {
//   console.log(numsArr)

//   let sum = 0
//   for (let i = 0; i < numsArr.length; i++){
//       sum += numsArr[i]
//       console.log(sum)
//   }
//   return sum
// }

// arrowRestSum(3,5,6); // => 14
// arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
// arrowRestSum(0); // => 0

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  module.exports = null;
}
