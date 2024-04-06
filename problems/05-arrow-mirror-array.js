/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

const arrowMirrorArray = (array) => {
  let newArr = [];

  array.forEach((num) =>  {
      newArr.push(num);
      console.log(newArr);
  })

  console.log(newArr);
  newArr.reverse();
  console.log(newArr);

  let combined = [...array, ...newArr];   // adds each element in sequence to new array 'combined'
  console.log(combined);
  return combined;
}

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]


// FIRST TRY NOT WORKING, NEED TO PUSH 1 ELEMENT AT A TIME WITH FOREACH LOOP
// const arrowMirrorArray = (array) => {
//       let newArr = []

//         // console.log(newArr)
//       let reversedArr = array.reverse()
//       // console.log(reversedArr)
// newArr.push(reversedArr)
// console.log(newArr)
// newArr.push(array)
// console.log(newArr)
//       // let subArr = []
//       // subArr = newArr.push(reversedArr)
//       // console.log(subArr)
//     // newArr.reverse(array)
//       // console.log(newArr)
// }

// arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
// arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  module.exports = null;
}
