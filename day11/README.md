# 【Day 11】async/await 基礎與進階

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

在第十一天，我們將深入探討 async/await，這是 ES2017（ES8）中引入的特性，旨在使異步程式碼更加直觀和可讀。相比傳統的 Promises 語法，async/await 提供了一種更清晰和同步風格的方式來編寫異步代碼。

## async/await 基礎

### async 關鍵字
- **基本概念**：`async` 關鍵字用於聲明一個異步函數。任何返回 Promise 的函數都可以被聲明為 `async` 函數。

```javascript
async function fetchData() {
	return "Data fetched";
}

fetchData().then(data => {
	console.log(data); // 輸出: Data fetched
});
```
在這個範例中，fetchData 是一個異步函數，自動返回一個 Promise，async 關鍵字使其返回值包裝在一個 Promise 內。

### await 關鍵字
- **基本概念**：`await` 關鍵字只能在 `async` 函數中使用，用於等待一個 Promise 被解決或拒絕。

```javascript
async function getData() {
	const data = await fetchData();
	console.log(data); // 輸出: Data fetched
}
```
在這個例子中，await 暫停函數的執行，直到 fetchData 返回的 Promise 被解析，然後繼續執行。

## async/await 進階
### 處理錯誤
- **基本概念**：`使用 `try...catch` 塊來捕獲異步函數中可能發生的錯誤。

```javascript
async function getDataWithErrorHandling() {
	try {
		const data = await fetchData();
		console.log(data); // 輸出: Data fetched
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
```
`try...catch` 可以讓你處理異步函數中的錯誤，這樣代碼看起來和同步代碼一樣。

### 並行執行
- **基本概念**：通過同時啟動多個 Promise 來提高效率，然後使用 Promise.all() 來等待它們全部完成。

```javascript
async function fetchAllData() {
	const promise1 = fetchData();
	const promise2 = fetchData();

	const results = await Promise.all([promise1, promise2]);
	console.log(results); // 輸出: ['Data fetched', 'Data fetched']
}
```
這樣的結構允許我們同時發出多個異步請求，而不是依次等待每一個完成後再開始下一個。

### 處理多個異步操作中的錯誤
- 進階技巧：當處理多個異步操作時，我們可能希望單獨捕捉每個操作的錯誤。

```javascript
async function fetchWithIndividualErrorHandling() {
	const promises = [fetchData(), fetchDataWithError()]; // 假設第二個函數可能會失敗

	for (const promise of promises) {
		try {
			const result = await promise;
			console.log(result);
		} catch (error) {
			console.error("Error occurred in one of the operations:", error);
		}
	}
}

fetchWithIndividualErrorHandling();
```
這個方法允許我們在處理每個異步操作時，獨立地捕獲和處理錯誤。

## 實際應用範例
### 使用 async/await 處理多個 API 請求

```javascript
async function fetchMultipleDataSources() {
	try {
		const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
		console.log('Data 1:', data1);
		console.log('Data 2:', data2);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
```
在這個例子中，我們同時從多個資料來源獲取數據，並使用 Promise.all() 確保所有請求完成後再繼續處理。

### 使用 async/await 改善用戶體驗
假設我們有一個應用需要從多個服務端點獲取數據，在數據加載時顯示一個加載動畫。

```javascript
async function loadData() {
	showLoadingAnimation(); // 顯示加載動畫
	try {
		const data = await fetchData();
		displayData(data); // 顯示數據
	} catch (error) {
		displayError(error); // 顯示錯誤信息
	} finally {
		hideLoadingAnimation(); // 隱藏加載動畫
	}
}

loadData();
```
這樣的實踐不僅提高了用戶體驗，也讓代碼更易於維護。

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1: 使用 async/await 重構一個多層嵌套的 Promise
```javascript
? function fetchDataWithDelay() {
	return ?(resolve => setTimeout( ?, 1000));
}

? function processData() {
	const data = ? fetchDataWithDelay();
	console.log(data); // 預期輸出: Delayed data
}

processData();
```

### 挑戰 2: 創建一個可以攔截錯誤的異步函數
```javascript
? function safeFetchData() {
	?
		const data = ? fetchDataWithError(); // 假設此函數可能拋出錯誤
		console.log(data);
	?
		console.error("Failed to fetch data:", error);
	?
}

safeFetchData();
```

## 總結

在第十一天的學習中，我們介紹了 async/await 是在實戰中非常重要的必備語法! 通過 async/await，我們可以編寫出更加簡潔和易於理解的異步代碼。

歡迎在討論區互動交流，我們將在下一篇探討 JavaScript 的事件循環機制！
