// === day29 自我挑戰 ===

// 1. 使用擴展運算符合併多個數組
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergedArray = [...array1, ...array2, ...array3];
console.log(mergedArray); // 預期輸出：[1, 2, 3, 4, 5, 6]

// 2. 使用擴展運算符將函數參數動態傳遞
function multiply(a, b, c) {
    return a * b * c;
}
const nums = [2, 3, 4];
console.log(multiply(...nums)); // 預期輸出：24