function findMaxNumber(arr) {
    let maxNum = 0;
    // solution 1
    // for (let i = 0; i <= arr.length; i++) {
    //     if (arr[i] >= maxNum){
    //         maxNum = arr[i];
    //     }
    // }
    // -----------------
    // second solution
    arr.forEach((ele) => {
        if (ele >= maxNum) {
            maxNum = ele;
        }
    })
    //--------------------
    // third solution
    // return Math.max(...arr);

    return maxNum;
}

module.exports = findMaxNumber;
