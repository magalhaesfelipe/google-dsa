const arr = [100, 200, 300];

function reversePositive(array) {
    const length = arr.length;
    let reversedArr = [];

    for (let y = 0; y < length; y++) {
        // const index = y === 0 ? 1 : y;

        reversedArr[y] = arr[(length - 1)  - y];
    }

    console.log(reversedArr)
}

reversePositive(arr);

// function reverse(ary) {
//     const length = arr.length;

//     console.log(length);
//     let reversedArr = [];

//     for (let y = length; y > 0; y--) {
//         reversedArr[y - (y.length - 1)] = arr[y - 1];
//     }

//     console.log(reversedArr)
// }

// reverse()
