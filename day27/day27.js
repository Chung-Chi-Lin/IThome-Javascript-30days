// === day26 自我挑戰 ===

// 1. 使用 `map` 將數組中的每個數字乘以 2
const numbers = [1, 2, 3, 4, 5];

// 使用 map 進行處理
const doubled = numbers.map(num => num * 2);

console.log(doubled); // 預期輸出: [2, 4, 6, 8, 10]

// 2. 使用 filter 篩選出數組中的偶數
const numbers2 = [1, 2, 3, 4, 5];

// 使用 filter 進行篩選
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // 預期輸出: [2, 4]

// 3. 使用 reduce 計算數組中所有數字的總和
const numbers3 = [1, 2, 3, 4, 5];

// 使用 reduce 進行計算
const total = numbers.reduce((acc, num) => acc + num, 0);

console.log(total); // 預期輸出: 15
