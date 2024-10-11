// === day28 自我挑戰 ===

// 1. 使用捕獲組匹配日期格式
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
const date = "2024-09-19";
const matchDate = dateRegex.exec(date);
console.log(`年: ${matchDate[1]}, 月: ${matchDate[2]}, 日: ${matchDate[3]}`);
// 預期輸出: 年: 2024, 月: 09, 日: 19

// 2. 使用正向斷言匹配特定單字
const regex = /\d+(?= kg)/;
const weight = "重量: 50 kg";
const match = regex.exec(weight);
console.log(`匹配到的重量: ${match[0]}`);
// 預期輸出: 匹配到的重量: 50