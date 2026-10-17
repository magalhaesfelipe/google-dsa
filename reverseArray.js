const arr = [100, 200, 300];

function reverse() {
  const length = arr.length; // 3
  let reversedArr = [];
  let posi = 0;

  for (let y = length - 1; y >= 0; y--) {
    // reversedArr[y] = arr[posi];
    reversedArr[posi] = arr[y];
    posi++;
  }

  console.log(reversedArr);
}

reverse();

// function reversePositive(array) {
//     const length = arr.length;
//     let reversedArr = [];

//     for (let y = 0; y < length; y++) {
//         // const index = y === 0 ? 1 : y;

//         reversedArr[y] = arr[(length - 1)  - y];
//     }

//     console.log(reversedArr)
// }

// reversePositive(arr);
