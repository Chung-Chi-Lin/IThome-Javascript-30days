# 【Day 6】迴圈：for...of 和迭代器

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

在第六天，我們將探討 ES6 中的兩個重要特性：`for...of` 迴圈和迭代器。這些特性使我們能夠更簡潔和高效地遍歷可迭代對象，如陣列、字串、`Map` 和 `Set` 等。

## `for...of` 迴圈

### 基本概念

`for...of` 迴圈是 ES6 引入的一種新的迭代語法，它允許我們遍歷任何可迭代對象。相比傳統的 `for` 迴圈和 `for...in` 迴圈，`for...of` 迴圈更加簡潔和直觀。

### 基本用法

```javascript
const array = [1, 2, 3, 4, 5];

for (const value of array) {
	console.log(value); // 1, 2, 3, 4, 5
}
```
在這個例子中，for...of 迴圈遍歷了 array 的每一個元素，並將元素的值賦予 value 變數。

### 遍歷字串
`for...of` 迴圈也可以用來遍歷字串，以及與 forEach 不同是 for 類型可以 提前結束迴圈：
```javascript
const array = 'hello';

for (const value of array) {
	if(value === 'e') break;
	console.log(value); // h
}
```
### 遍歷 Map 和 Set

`for...of` 迴圈可以用來遍歷 Map 和 Set：
```javascript
const map = new Map([
	['key1', 'value1'],
	['key2', 'value2']
]);

for (const [key, value] of map) {
	console.log(key, value); // key1 value1, key2 value2
}

const set = new Set([1, 2, 3, 4, 5]);

for (const value of set) {
	console.log(value); // 1, 2, 3, 4, 5
}
```
延伸學習: `new Map` 、 `new Set` 簡單理解差別。
- Map：適合需要存儲和操作鍵值對的場景，能夠使用任何類型的鍵。
- Set：適合需要存儲唯一值的場景，避免重複值。

## 迭代器

### 基本概念
首先我們要先了解迭代器（Iterator）是一種設計模式，雖然 JavaScript 本身提供了內建的迭代器（如陣列、字串、Map、Set 等可迭代對象都自帶迭代器），但我們也可以自定義迭代器以擴展其應用範圍。

迭代器是一種對象，它提供了一種訪問集合元素的機制，而無需暴露集合內部的表示方式。迭代器對象實現了 Iterator 接口，包括一個 next 方法，該方法返回一個結果對象，該對象具有兩個屬性：value 和 done。
### 自定義迭代器
這裡我們用 day5 說到的 `Symbol` 並結合自定義一個迭代器，讓對象實現可迭代性：
```javascript
const iterable = {
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

for (const value of iterable) {
	console.log(value); // 1, 2, 3, 4, 5
}
```
注意: 當使用自訂義迭代需要使用 Symbol.iterator 方法才可以使用，否則會跳出 // TypeError: obj is not iterable

### 生成器函數

生成器函數是一種特殊的函數，它用來生成迭代器對象。生成器函數使用 function* 語法，並且可以在函數內部使用 yield 關鍵字來產生值。
```javascript
function* generator() {
	yield 1;
	yield 2;
	yield 3;
}

const gen = generator();

for (const value of gen) {
	console.log(value); // 1, 2, 3
}
```
或是

```javascript
function* generator() {
	yield 1;
	yield 2;
	yield 3;
}

const gen = generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```
注意: 使用 function* 創建生成器函數時會搭配 yield 去做到複雜操作，當不使用 yield 一樣會產生生成器函數但是使用時會一次運行完畢!

## 實際應用範例

### `for...of` 迴圈應用:
`for...of` 迴圈在遍歷陣列時特別有用，避免了傳統 for 迴圈中的索引操作，使代碼更加簡潔：
```javascript
const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
	console.log(fruit); // apple, banana, cherry
}
```
### 自定義迭代器的應用:
自定義迭代器可以用來創建可控的迭代過程，例如計數器：
```javascript
const counter = {
	[Symbol.iterator]() {
		let count = 0;
		return {
			next() {
				count++;
				return { value: count, done: count > 3 };
			}
		};
	}
};

for (const value of counter) {
	console.log(value); // 1, 2, 3
}
```
你可能會心想當我是 ~~XX~~ 嗎?我用一個變量 count 在每次跑函數時 count++ 不就好了? 
然而在這裡寫成迭代器的好處就是可以避免 全居汙染 以及 在某些特殊狀況判斷 的記數!

### 生成器函數的應用:
生成器函數可以用來簡化自定義迭代器的創建過程，並能夠處理更複雜的迭代邏輯：
```javascript
function* fibonacci(n) {
	let a = 0, b = 1;
	while (n-- > 0) {
		yield a;
		[a, b] = [b, a + b];
	}
}

for (const value of fibonacci(5)) {
	console.log(value); // 0, 1, 1, 2, 3
}
```

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1：使用 `for...of` 迴圈遍歷一個 `Set`

```javascript
const mySet = new Set(['apple', 'banana', 'cherry']);

// 在這裡使用 for...of 迴圈
```

### 挑戰 2：創建一個自定義迭代器，使其產生一系列數字

```javascript
const numberIterator = {
	// 在這裡創建自定義迭代器
};

for (const value of numberIterator) {
	console.log(value); // 預期輸出一系列數字
}
```

## 總結

在第六天的學習中，我們介紹了 for...of 迴圈和迭代器，對於 for 相關的迴圈用法推薦大家可以去了解哪些方法什麼場景實用，
對於作者我來說雖然常使用 forEach 去解決，但了解 for...of 效能以及用法後也更常去使用這個方法囉!

歡迎在討論區互動交流，我們將在下一篇探討 Array 和 String 的新方法！
