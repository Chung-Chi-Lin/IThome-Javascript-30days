// === day6 自我挑戰 ===

// 1. 使用 `for...of` 迴圈遍歷一個 `Set`
const mySet = new Set(['apple', 'banana', 'cherry']);

// 在這裡使用 for...of 迴圈
for (const value of mySet) {
	console.log(value) // 'apple', 'banana', 'cherry'
}
// 2.創建一個自定義迭代器，使其產生一系列數字
const numberIterator = {
	[Symbol.iterator]() {
		let step = 0;
		return {
			next() {
				step++;
				if (step <= 5) {
					return { value: step, done: false };
				}
				return { value: undefined, done: true };
			}
		};
	}
};

for (const value of numberIterator) {
	console.log(value); // 1, 2, 3, 4, 5
}
