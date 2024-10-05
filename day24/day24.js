// === day23 自我挑戰 ===

// 1. 使用 ?? 來處理空值
let userName;
let defaultName = 'Anonymous';

console.log(userName ?? defaultName);  // 輸出: Anonymous

userName = 'John';
console.log(userName ?? defaultName);  // 輸出: John

// 2. 使用 `??` 保留 0、false 等合法值
let userScore = 0;
let defaultScore = 10;

console.log(userScore ?? defaultScore);  // 輸出: 0
