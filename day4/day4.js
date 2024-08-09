// === day3 自我挑戰 ===

// 1. 使用箭頭函數重寫傳統函數
// 傳統函數
function multiply(a, b) {
	return a * b;
}

const multiple = (a, b) => a * b;
// 2.使用樣板字面值創建多行字符串
const lastName = "john";
const poem = `hello my name is ${lastName}`;

// 3.自行設計使用標籤模板實現自定義處理
function highlight(strings, ...values) {
	return strings.reduce((result, string, i) => `${result}${string}<b>${values[i] || ''}</b>`, '');
}

const name = 'Alice';
const age = 25;
const message = highlight`Name: ${name}, Age: ${age}`;
console.log(message); // Name: <b>Alice</b>, Age: <b>25</b><b></b>
