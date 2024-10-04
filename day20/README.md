# 【Day 20】深入探討 Map 和 WeakMap

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

在第二十天，我們將深入探討 JavaScript 中的兩個非常強大的集合類型：`Map` 和 `WeakMap`。它們在處理鍵值對時非常實用。`Map` 提供了靈活的鍵值對存儲，而 `WeakMap` 則專注於處理對象鍵的場景，並優化垃圾回收機制。本文將詳細解釋這兩者的使用方式，並提供實際應用範例來幫助你理解，我認為這是非常必學延伸的重要觀念哦!

## Map 的基本概念和用法

### Map 的概念

`Map` 是一個鍵值對集合，和普通對象不同，`Map` 允許你使用任何類型的數據作為鍵（例如對象、數字、字符串）。

### Map 的基本操作

```javascript
// 創建一個新的 Map
const myMap = new Map();

// 使用 set() 方法添加鍵值對
myMap.set('name', 'John');  // 使用字串作為鍵
myMap.set(1, 'one');        // 使用數字作為鍵
myMap.set({ id: 123 }, 'User 123');  // 使用對象作為鍵

// 使用 get() 方法讀取鍵值對
console.log(myMap.get('name')); // 輸出: 'John'
console.log(myMap.get(1));      // 輸出: 'one'

// 使用 has() 方法檢查是否存在某個鍵
console.log(myMap.has('name')); // true
console.log(myMap.has('age'));  // false
```
### Map 常見方法
- set(key, value)：在 `Map` 中添加或更新鍵值對。
- get(key)：返回對應於鍵的值，如果鍵不存在，則返回 `undefined`。
- has(key)：檢查 `Map` 中是否存在特定鍵。
- delete(key)：刪除指定鍵值對。
- clear()：清空整個 `Map`。

```javascript
// 刪除鍵值對
myMap.delete('name');
console.log(myMap.has('name')); // false

// 清空 Map
myMap.clear();
console.log(myMap.size);  // 0
```
### Map 的遍歷
`Map` 可以使用 `for...of` 迴圈進行遍歷，並且它會按插入順序返回鍵值對。
```javascript
const fruitMap = new Map([
	['apple', 2],
	['banana', 5],
	['cherry', 8]
]);

// 遍歷 Map
for (const [fruit, quantity] of fruitMap) {
	console.log(`${fruit}: ${quantity}`);
}
// 輸出:
// apple: 2
// banana: 5
// cherry: 8
```
## WeakMap 的基本概念和用法
### WeakMap 的概念
`WeakMap` 和 `Map` 類似，但它只接受對象作為鍵，並且鍵是弱引用。這意味著當一個對象沒有其他引用時，它會自動被垃圾回收機制清除，這樣可以防止內存泄漏。

### WeakMap 的基本操作
```javascript
// 創建 WeakMap
const weakMap = new WeakMap();

let obj = { id: 1 };

// 使用 set() 方法添加鍵值對
weakMap.set(obj, 'User Data');

// 使用 get() 方法獲取值
console.log(weakMap.get(obj));  // 輸出: 'User Data'

// 如果 obj 不再被引用，垃圾回收會自動清理它
obj = null;

// WeakMap 會自動處理對象的清理，不會阻止垃圾回收
```
### WeakMap 和 Map 的區別
1. WeakMap 只接受對象作為鍵，而 Map 可以接受任何類型的鍵。
2. WeakMap 的鍵是弱引用，不會阻止垃圾回收。
3. WeakMap 不可遍歷，因為鍵是弱引用，隨時可能被清除。

## Map 和 WeakMap 的應用場景
### Map 的應用場景
`Map` 非常適合需要靈活存儲不同類型鍵值對的場景，尤其是當你需要使用對象或數字作為鍵時。
```javascript
// 使用 Map 儲存用戶數據
const userMap = new Map();
userMap.set(1, { name: 'Alice', age: 25 });
userMap.set(2, { name: 'Bob', age: 30 });

console.log(userMap.get(1));  // { name: 'Alice', age: 25 }
```

### WeakMap 的應用場景
`WeakMap` 最適合處理那些只需要臨時引用的對象，這樣能確保這些對象在不再使用時能自動被垃圾回收，避免內存泄漏。
```javascript
// 使用 WeakMap 追蹤臨時對象
const cache = new WeakMap();

function cacheResult(obj, result) {
	cache.set(obj, result);
}

let data = { query: 'example' };
cacheResult(data, 'Result for example');

// 當 data 不再被引用，WeakMap 中的條目會自動被垃圾回收
data = null;
```

## 實際應用範例
## 使用 Map 儲存 DOM 元素的狀態
在前端開發中，我們經常需要跟蹤 DOM 元素的狀態，`Map` 可以幫助我們使用 DOM 元素作為鍵來儲存狀態。
```javascript
const elementState = new Map();

function saveState(element, state) {
	elementState.set(element, state);
}

const button = document.querySelector('button');
saveState(button, { clicked: false });

console.log(elementState.get(button));  // { clicked: false }
```

## 使用 WeakMap 儲存對象的臨時數據
如果我們需要對象的臨時數據，而不希望它長期佔用內存，可以使用 `WeakMap`。
```javascript
const tempData = new WeakMap();

function addTempData(obj, data) {
	tempData.set(obj, data);
}

let user = { id: 1 };
addTempData(user, { tempToken: 'abc123' });

console.log(tempData.get(user));  // { tempToken: 'abc123' }

// 一旦 user 不再被引用，它會自動被垃圾回收
user = null;
```

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1：使用 Map 實現一個用戶數據儲存系統
```javascript
const users = ?;

function addUser(id, name, age) {
	?
}

function getUser(id) {
	?
}

addUser(1, 'Alice', 25);
addUser(2, 'Bob', 30);

console.log(getUser(1));  // { name: 'Alice', age: 25 }
```

### 挑戰 2：使用 WeakMap 追蹤對象的臨時資料
```javascript
const metadata = ?;

function addMetadata(obj, data) {
	?
}

let userObj = { id: 1 };
addMetadata(userObj, { role: 'admin' });

console.log(metadata.get(userObj));  // { role: 'admin' }

// 一旦 userObj 不再被引用，WeakMap 中的資料會自動被回收
userObj = null;
```

## 總結

在第二十天的學習中，我們深入探討了 Map 和 WeakMap 的使用方法和應用場景。這兩者都是強大的鍵值對集合，能夠處理複雜的數據存儲需求，並優化內存管理。今天這個在進階實戰非常實用，尤其遇到大量資料渲染或是快速查找。

歡迎在討論區互動交流，明天我們將探索生成器和進階應用！
