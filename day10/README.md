# 【Day 10】Promises 基礎與進階

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

第十天啦!! 我們將深入探討 JavaScript 中的 Promises，這是一個強大的特性，用於處理非同步操作。理解 Promises 對於現代 JavaScript 開發非常重要，它使我們能夠以更可靠的方式處理非同步流程。

## Promises 基礎

### Promises 概念
- **基本概念**：Promise 是一個代表非同步操作最終完成或失敗的對象。

### 創建 Promise
- 這個範例展示了如何創建一個 Promise 並根據條件解析或拒絕它。
```javascript
const myPromise = new Promise((resolve, reject) => {
	const success = true; // 模擬操作成功或失敗
	if (success) {
		resolve('Operation successful');
	} else {
		reject('Operation failed');
	}
});

myPromise.then(value => {
	console.log(value); // 輸出: Operation successful
}).catch(error => {
	console.log(error); // 輸出: Operation failed
});
```

### 使用 Promises 處理非同步操作
- 這個範例使用 setTimeout 模擬一個非同步請求，展示如何使用 Promise 處理延遲響應。
- 這裡需要注意的觀念，即使 .then 方法被立即設定，它也不會直接執行其內部的回調函數。回調函數會等到 Promise 被解析後才執行，即在設定的 2 秒後。
```javascript
function fetchData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve("Data fetched"), 2000);
	});
}

fetchData().then(data => {
	console.log(data); // 輸出: Data fetched
});
```

## Promises 進階
### Promises 鏈
- 概念：Promises 可以被鏈接，使得非同步操作和它們的處理程序可以以線性方式表達。

```javascript
function firstTask() {
	return new Promise(resolve => {
		resolve('First task completed');
	});
}

function secondTask(data) {
	return new Promise(resolve => {
		resolve(`${data} and second task completed`);
	});
}

firstTask().then(result => {
	console.log(result); // 輸出: First task completed
	return secondTask(result);
}).then(result => {
	console.log(result); // 輸出: First task completed and second task completed
});
```

### 錯誤處理
- 概念：使用 .catch() 方法可以攔截鏈中發生的任何錯誤。

```javascript
firstTask().then(result => {
	throw new Error('Something went wrong');
	return secondTask(result);
}).catch(error => {
	console.error(error.message); // 輸出: Something went wrong
});
```
## 實際應用範例
### 使用 Promises 管理多個非同步操作
- 這個範例演示了如何使用 Promise.all() 來同時處理多個非同步操作，並在`所有操作都完成`後獲得它們的結果。
```javascript
Promise.all([
	firstTask(),
	secondTask('Direct call')
]).then(results => {
	console.log(results); // 輸出: ['First task completed', 'Direct call and second task completed']
});
```

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1: 使用 Promises 完成一個非同步計數器
```javascript
function asyncCounter(max, interval) {
	return new Promise((resolve, reject) => {

	});
}

asyncCounter(5, 1000).then(message => {
	console.log(message); // 輸出: Counter finished
});
```

## 總結

在第十天的學習中，要告訴大家 必學 Promises 的使用和實現方式，這為處理複雜的非同步操作以及實戰中非常重要的技能力。使用 Promises 可以使我們的代碼更加可讀和易於管理，不會有波動拳的程式碼出現，特別是在處理多個非同步操作時。

歡迎在討論區互動交流，明天我們將進一步探討 async/await 基礎與進階！
