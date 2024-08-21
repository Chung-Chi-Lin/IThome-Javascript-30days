# 【Day 12】事件循環概念與詳解

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

在第十二天，我們將深入探討 JavaScript 的事件循環（Event Loop）機制。事件循環是 JavaScript 處理異步操作的核心機制，使其能夠在單線程環境中高效運行。理解事件循環對於編寫高效的非阻塞 JavaScript 代碼至關重要。

**本篇些許範例不會說出執行結果，希望大家可以自己嘗試跑程式碼，也歡迎把遇到的疑問或自創題目分享出來哦!**

## 事件循環的基本概念
JavaScript 是一門單線程語言，這意味著在任何時刻都只能執行一段代碼。事件循環允許 JavaScript 處理異步事件並提供非阻塞行為，這樣就可以同時處理多個任務而不會阻塞用戶界面。

### Call Stack（調用棧）
- **基本概念**：調用棧用於存儲當前執行的函數。每當一個函數被調用時，會被添加到調用棧頂部，函數執行完成後會從棧頂移除。
- 範例:
```javascript
function first() {
	console.log('First function start');
	second();
	console.log('First function end');
}

function second() {
	console.log('Second function start');
	third();
	console.log('Second function end');
}

function third() {
	console.log('Third function');
}

first();
```


### Web APIs
- **基本概念**：瀏覽器提供的 APIs（如 DOM 操作、計時器、HTTP 請求）在調用後，將回調函數委託給 Web APIs 執行，當這些操作完成時，回調函數被推入事件隊列。
- 範例:
```javascript
console.log('Start');

setTimeout(() => {
	console.log('Timeout callback');
}, 1000);

console.log('End');
```

### Event Queue（事件隊列）
- **基本概念**：事件隊列是待處理的事件或消息列表。當調用棧為空時，事件循環會將事件隊列中的第一個回調函數推入調用棧並執行。
- 範例:
```javascript
console.log('Start');

setTimeout(() => {
	console.log('First timeout');
}, 1000);

setTimeout(() => {
	console.log('Second timeout');
}, 500);

console.log('End');
```

### Event Loop（事件循環）
- **基本概念**：事件循環不斷檢查調用棧是否為空，當空時，從事件隊列中取出第一個事件放入調用棧執行。這個循環確保了 JavaScript 代碼能夠非阻塞地運行。
- 範例:
```javascript
console.log('Start');

setTimeout(() => {
	console.log('Timeout callback');
}, 0);

console.log('End');
```

## 常見的異步模式
### 計時器（setTimeout 和 setInterval）
- **基本概念**：`setTimeout` 用於延時執行一段代碼，而 setInterval 用於重複執行代碼。
```javascript
console.log('Before timeout');

setTimeout(() => {
	console.log('Inside timeout');
}, 2000);

console.log('After timeout');
```

### Promise
- **基本概念**：Promise 是一個表示異步操作最終完成或失敗的對象，並能夠附帶處理程序。
```javascript
new Promise((resolve, reject) => {
	setTimeout(() => resolve('Promise resolved'), 1000);
}).then(message => console.log(message));

console.log('Promise created');
```

## 進階示例：微任務（Microtasks）和宏任務（Macrotasks）
JavaScript 中的任務可以分為兩類：宏任務（如 `setTimeout`、`setInterval`）和微任務（如 `Promise.then`）。
### 微任務示例
微任務總是比宏任務優先執行。
```javascript
console.log('Script start');

setTimeout(() => {
	console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
	console.log('Promise 1');
}).then(() => {
	console.log('Promise 2');
});

console.log('Script end');
```
### 微任務示例
1. Script start
2. Script end
3. Promise 1
4. Promise 2
5. setTimeout

## 實際應用場景
### 使用事件循環處理高效 I/O 操作
在服務器環境中（如 Node.js），事件循環使得可以同時處理大量的 I/O 操作而不會阻塞主線程。

### 使用 Promise 和 async/await 改善異步代碼結構
透過 `async/await`，我們可以以更清晰和同步的方式來寫異步代碼，提高代碼可讀性。
```javascript
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncFunction() {
    console.log('Script start');

    await delay(0); // 等同於 setTimeout(() => {}, 0);
    console.log('setTimeout');

    await Promise.resolve().then(() => {
        console.log('Promise 1');
    });

    console.log('Promise 2');

    console.log('Script end');
}

asyncFunction();
```
## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1: 使用 setTimeout 模擬一個倒計時器
```javascript
function countdown(seconds) {
	let ? = ?;

	const intervalId = setInterval(() => {
		console.log(counter);
		?;

		if (?) {
			clearInterval(intervalId);
			console.log('Countdown finished');
		}
	}, 1000);
}

countdown(5); // 預期輸出：5, 4, 3, 2, 1, Countdown finished
```

### 挑戰 2: 使用 Promise 和微任務模擬數據加載
```javascript
function loadData() {
	return new Promise(resolve => {
		console.log('Loading data...');
		setTimeout(() => ?(?), 2000);
	});
}

loadData().then(message => {
	console.log(message); // 預期輸出：Data loaded
	return Promise.resolve().then(() => console.log('Microtask complete'));
});
```

## 總結

在第十二天的學習中，我們深入探討了 JavaScript 的事件循環機制，這是理解 JavaScript 如何高效處理異步操作的關鍵。掌握這些概念能夠讓您更好地編寫非阻塞代碼，從而提升應用性能。

歡迎在討論區互動交流，我們將在下一篇探討非阻塞 I/O 的概念和應用！
