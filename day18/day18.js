// === day17 自我挑戰 ===

// 1. 創建一個 User 模組，並定義方法來創建和獲取用戶信息。
// user.js 模組
export function createUser(name, age) {
	return {name, age};
}

export function getUserInfo(user) {
	return `用戶名: ${user.name}, 年齡: ${user.age}`;
}

// 主模組中引入並使用 User 模組
import {createUser, getUserInfo} from './user.js';

const user = createUser('Alice', 30);
console.log(getUserInfo(user)); // 輸出: 用戶名: Alice, 年齡: 30

// 2. 將應用中的數學運算部分模組化，並優化代碼結構。

// mathOperations.js 模組
export function add(a, b) {
	return a + b;
}

export function multiply(a, b) {
	return a * b;
}

// 主模組中引入並使用 mathOperations 模組
import {add, multiply} from './mathOperations.js';

console.log(add(10, 5)); // 輸出: 15
console.log(multiply(4, 3)); // 輸出: 12
