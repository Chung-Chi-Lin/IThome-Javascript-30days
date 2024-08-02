// === day5 自我挑戰 ===

// 1. 使用函數參數預設值重構代碼
function greet(name) {
	if (name === undefined) {
		name = 'Guest';
	}
	console.log(`Hello, ${name}!`);
}

// 在這裡使用函數參數預設值

function greet(name = 'Guest') {
	console.log(`Hello, ${name}!`);
}
// 2.創建一個 Symbol 並用作對象的屬性鍵
const mySymbol = Symbol('symbolKey');

// 在這裡創建一個對象，並將 Symbol 作為屬性鍵
const symbol = {
	name: 'John',
	[mySymbol]: 'value',
}

console.log(symbol[mySymbol])
