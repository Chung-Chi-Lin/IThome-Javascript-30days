// === day8 自我挑戰 ===

// 1. 嘗試搜尋 Number 如何將字串轉換為浮點數
const str = "3.14";
const num = parseFloat(str);
console.log(num); // 3.14


// 2.嘗試搜尋 Object 如何凍結物件使其不被修改
const obj = { name: "Alice", age: 25 };
Object.freeze(obj);
obj.age = 26; // 這行無效，因為對象已經被凍結
console.log(obj.age); // 25
