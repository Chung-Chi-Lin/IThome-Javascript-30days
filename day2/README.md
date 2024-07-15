# 【Day 2】變量聲明：let 和 const

## 目錄

1. [ES6+ 簡介及環境設置](./day1/README.md)
2. [變量聲明：let 和 const](./day2/README.md)
3. [箭頭函數與樣板字面值](./day3/README.md)
4. [解構賦值與擴展運算符](./day4/README.md)
5. [函數參數預設值與 Symbol](./day5/README.md)
6. [迴圈：for...of 和迭代器](./day6/README.md)
7. [Array 和 String 的新方法](./day7/README.md)
8. [Number 和 Object 的新方法](./day8/README.md)
9. [Math 的新方法](./day9/README.md)
10. [Promises 基礎與進階](./day10/README.md)
11. [async/await 基礎與進階](./day11/README.md)
12. [事件循環概念與詳解](./day12/README.md)
13. [非阻塞 I/O 概念與應用](./day13/README.md)
14. [類別與繼承](./day14/README.md)
15. [靜態方法與存取器](./day15/README.md)
16. [類別中的私有字段](./day16/README.md)
17. [模組化](./day17/README.md)
18. [Proxy 和 Reflect](./day18/README.md)
19. [Set 和 WeakSet](./day19/README.md)
20. [Map 和 WeakMap](./day20/README.md)
21. [生成器與進階應用](./day21/README.md)
22. [可選鏈式操作符](./day22/README.md)
23. [Nullish 合併運算符](./day23/README.md)
24. [BigInt](./day24/README.md)
25. [全局對象：globalThis](./day25/README.md)
26. [高階函數：map、filter、reduce](./day26/README.md)
27. [簡化的異步處理](./day27/README.md)
28. [樣板字面值與標籤模板](./day28/README.md)
29. [擴展運算符的高級用法](./day29/README.md)
30. [現代 JavaScript 項目最佳實踐](./day30/README.md)

## 介紹

在第二天，我們將深入探討 JavaScript 中的變量聲明方式，主要聚焦在 let 和 const 這兩種新方式，以及它們與傳統的 var 方式的區別。這些新的聲明方式是 ES6 引入的重要特性之一，能夠幫助我們編寫更加安全，避免誤踩區域變數 及 全域變數的地雷。

## let 和 const 的基本概念
### let
- let 用於聲明一個變量，並且這個變量只在 let 命令所在的代碼塊內有效。這被稱為“塊級作用域”。
- let 變量可以重新賦值，但不能在同一作用域內重複聲明。

``` javascript
// 使用 let 聲明變量
let count = 1;
count = 2; // 可以重新賦值
```
``` javascript
// 作用在當前區塊的變數
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);// 輸出2
}

console.log(x); // 輸出1
```
### const
- const 用於聲明一個常量，聲明後不能重新賦值。這也遵循“塊級作用域”。
- const 聲明的常量必須在聲明時就賦值。
``` javascript
// 使用 const 聲明常量
const name = 'JavaScript';
// name = 'ES6'; // 這行會報錯，因為 const 不能重新賦值
```
## var vs let/const

### var 的特性
- var 聲明的變量是函數作用域或全局作用域，這意味著它的作用範圍不受代碼塊限制。
- var 變量存在“變量提升”（hoisting）現象，變量可以在聲明之前使用，但值為 undefined。

### let 和 const 的優勢
- let 和 const 是塊級作用域，只在當前代碼塊內有效，這樣可以避免全局變量污染。
- let 和 const 不存在變量提升，變量必須在聲明後使用，這樣可以避免未定義變量的錯誤。
``` javascript
// var 變量提升
console.log(a); // undefined
var a = 5;

// let 和 const 不存在變量提升
// console.log(b); // ReferenceError: b is not defined
let b = 10;

// let 和 const 的塊級作用域
if (true) {
  let x = 20;
  const y = 30;
}
// console.log(x, y); // 只作用在 if 內的區塊，所以無法呼叫成功
```
### 何謂變量提升
上方提到的變量提升很基本也很重要，所以稍微解釋一下!

因為本次文章聚焦再 ES6 等更新，更多變量提升情境可以自己嘗試去深入了解深層的原理!

以本次的宣告方法的例子來說，實際上會是
```javascript
// 上方原程式碼
console.log(a); // undefined
var a = 5;

// 實際上提升到了最上方
var a;
console.log(a); // 這時候因為還沒賦值所以會回傳 undefined
a = 5;
console.log(a); // 之後賦值了會回傳 5
```

```javascript
// let、const 並不會進行提升
console.log(a, b); // 所以這時候a、b也根本不存在，會回傳 ReferenceError: b is not defined
let a = 5;
const b = 10;
console.log(a, b); // 5, 10
```

## 實際應用範例
### 使用 let

```javascript
// 迴圈中使用 let
for (let i = 0; i < 5; i++) {
    console.log(i); // 依序打印結果 0、1、2...、4
}
// console.log(i); // ReferenceError: i is not defined
```
### 使用 const

```javascript
// 聲明常量對象
const person = {
    name: 'Alice',
    age: 25
};

// 可以修改對象的屬性
person.age = 26;

// 但不能重新賦值
// person = { name: 'Bob', age: 30 }; // TypeError: Assignment to constant variable.
```

## 最佳實踐
- 使用 const 盡可能聲明常量：這樣可以確保變量不會被意外重新賦值，從而提高代碼的可預測性和穩定性。
- 使用 let 聲明需要重新賦值的變量：這樣可以限制變量的作用範圍，減少全局變量污染。
- 避免使用 var：使用 var 容易引起作用域污染和變量提升問題，應盡量避免。
- 盡量在變量使用之前聲明變量：這樣可以提高代碼的可讀性和可維護性，避免使用未定義的變量。

```javascript
const maxItems = 10;

for (let i = 0; i < maxItems; i++) {
    // 迴圈中使用 let
    console.log(i);
}
```
## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!

- 今日挑戰：調整成正確的變數宣告，讓回傳結果是正確的!
```javascript
1.
console.log(a) // 5
const a = 5;

2.
let a;
console.log(a) // 5
a = 5;

3.
const a = 1;
for (let i = 0; i < 5; i++) {
	a += 1;
}
console.log(a) // 5

4.
let a = 1;
for (let i = 0; i < 5; i++) {
	let a = 1;
	a += 1;
}
console.log(a) // 5
```
- 反思：使用 let 宣告兩次同一個變數名稱會報錯嗎?

## 總結

在第二天的學習中，除非需要維護舊專案才需要 var，對於現況來說都已經以 let、const 去設計專案了。

也推薦大家使用 Google Chrome 的主控台去簡單使用看看不同區塊宣告變數時產生的不同效果，對於日後的排雷會有很大的幫助哦!

歡迎在討論區互動交流，明天我們將探討大大加速開發的箭頭函數與樣板字面值!

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 版權聲明

本系列文章版權歸屬於作者，禁止未經許可的轉載和商業用途。歡迎個人學習和分享。
