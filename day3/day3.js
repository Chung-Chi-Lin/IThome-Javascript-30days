// === day3 教學程式碼 ===
function i18n(strings, ...values) {
	console.log(strings); //
	console.log(values[0]);
	const translations = {
		'Hello, ': 'Hola, ',
		'world!': 'mundo!'
	};
	return strings.reduce((result, string, i) => {
		return result + (translations[string] || string) + (values[i] || '');
	}, '');
}

const name = 'John';
const where = 'keelung';
const greeting = i18n`Hello, ${name}! Welcome to the ${where}!`;
console.log(greeting); // Hola, John! Welcome to the mundo!

// === day2 自我挑戰 ===
// 調整成正確的變數宣告，讓回傳結果是正確的!

// 1.
const a = 5;
console.log(a) // 5

// 2.
let a;
a = 5;
console.log(a) // 5

// 3.
let a = 1;
for (let i = 0; i < 5; i++) {
	a += 1;
}
console.log(a) // 5

// 4.
const a = 5;
for (let i = 0; i < 5; i++) {
	let a = 1;
	a += 1;
}
console.log(a) // 5

// 反思：使用 let 宣告兩次同一個變數名稱會報錯嗎?
// 會，除非在不同層級或區塊宣告，但不建議宣告重複名稱
