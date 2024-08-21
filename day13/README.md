# 【Day 13】非阻塞 I/O 概念與應用

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

在第十三天，我們將探討非阻塞 I/O（Non-blocking I/O）的概念及其應用。非阻塞 I/O 是現代應用程式，尤其是高性能網絡服務器的重要技術之一。理解這一概念有助於提升應用的響應速度和整體性能。

### I/O 是什麼？
I/O 是 "Input/Output" 的縮寫，代表輸入和輸出操作。在程式設計中，I/O 操作通常涉及與外部世界的互動，例如讀取文件、發送網絡請求或顯示數據在屏幕上。這些操作通常需要時間來完成，因此如何有效地處理它們對於應用程式的性能至關重要。

### 阻塞 I/O（Blocking I/O）
阻塞 I/O 是傳統的 I/O 模型，在這種模型中，當一個 I/O 操作（如讀取文件或網絡請求）開始時，整個程式將停止執行，直到這個操作完成為止。換句話說，程式會被「阻塞」，無法處理其他任務，直到 I/O 操作結束。

#### 阻塞 I/O 的例子
以下是使用同步方法進行阻塞 I/O 的一個範例：
```javascript
const fs = require('fs');

console.log('Start reading file...');
const data = fs.readFileSync('example.txt', 'utf8');
console.log('File content:', data);
console.log('File read complete');
```
在這個範例中，fs.readFileSync 是同步的，會阻塞程式執行，直到文件讀取完成為止。

### 非阻塞 I/O（Non-Blocking I/O）
非阻塞 I/O 允許程式在等待 I/O 操作完成的同時繼續執行其他任務。這樣可以有效利用 CPU 時間，不讓應用程式因為等待 I/O 操作而停止工作。

#### 非阻塞 I/O 的例子
以下是使用非同步方法進行非阻塞 I/O 的範例：
```javascript
const fs = require('fs');

console.log('Start reading file...');
fs.readFile('example.txt', 'utf8', (err, data) => {
	if (err) throw err;
	console.log('File content:', data);
});
console.log('This will be logged before the file content is printed');
```
在這個範例中，fs.readFile 是非同步的，不會阻塞程式執行，當文件讀取完成後，會透過回調函數處理文件內容。在這段時間內，應用程式可以繼續執行其他代碼。

### 同步與非同步的差別

同步和非同步是兩種不同的編程模式，關鍵差別在於它們如何處理任務的執行順序和時間。

- 同步：在同步操作中，任務是線性執行的，下一行代碼要等到上一行代碼執行完畢後才能執行。如果某個任務很耗時，那麼後續的任務就必須等待，這可能導致程式卡頓。
- 非同步：非同步操作允許程式繼續執行後續的任務，而不必等待當前任務完成。非同步操作通常通過回調函數、Promise 或 async/await 來處理結果。

### 阻塞與非阻塞的差別
阻塞和非阻塞通常用於描述 I/O 操作，但也可以延伸到其他操作。這兩者的差別在於操作進行時，程式是否需要等待這些操作完成。

- 阻塞：在阻塞操作中，應用程式需要等待操作完成後才能繼續執行其他任務。這是典型的同步操作特性。
- 非阻塞：在非阻塞操作中，應用程式不必等待操作完成，可以繼續執行其他任務，當操作完成後再處理結果。這是典型的非同步操作特性。

### 實際應用範例

1. 非阻塞文件讀取

以下範例展示了如何使用非阻塞 I/O 來讀取文件：

```javascript
const fs = require('fs');

console.log('開始讀取文件...');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('讀取文件錯誤:', err);
        return;
    }
    console.log('文件內容:', data);
});

console.log('這條消息將在文件內容之前顯示');
```
在這個範例中，fs.readFile 是非阻塞的，所以程式可以在文件讀取的同時繼續執行其他代碼。

2. 使用非阻塞 I/O 處理 HTTP 請求

以下範例展示了如何使用 Node.js 處理非同步 HTTP 請求：

```javascript
const http = require('http');

http.get('http://www.example.com', (res) => {
	let data = '';

	res.on('data', (chunk) => {
		data += chunk;
	});

	res.on('end', () => {
		console.log('收到的數據:', data);
	});
}).on('error', (err) => {
	console.error('HTTP 請求錯誤:', err);
});

console.log('HTTP 請求已發送，正在等待響應...');
```
這個範例展示了如何發送一個 HTTP 請求並非阻塞地處理響應數據，這使得應用程式在等待響應的同時可以處理其他任務。

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1: 使用非阻塞 I/O 模擬一個簡單的數據讀取操作，你認為正確輸出順序是如何?
```javascript
const fs = require('fs');

// 使用非阻塞 I/O 讀取文件內容
fs.readFile('example.txt', 'utf8', (err, data) => {
	if (err) {
		console.error('讀取文件錯誤:', err);
		return;
	}
	console.log('文件內容:', data);
});

console.log('讀取文件請求已發送，請等待文件內容顯示...');
```

### 挑戰 2: 使用非阻塞 I/O 模擬一個簡單的延遲操作，你認為正確輸出順序是如何?
```javascript
console.log('開始操作...');

setTimeout(() => {
	console.log('操作已完成！');
}, 2000);

console.log('操作請求已發送，等待完成...');
```

## 總結

在第十三天，我們深入探討了非阻塞 I/O 的概念及其在 Node.js 中的重要性。了解並善用非阻塞 I/O 可以顯著提升你的應用程式性能，特別是在處理大量 I/O 操作時。掌握這些概念和技巧，將使你更好地應對 JavaScript 開發中的複雜挑戰。

歡迎在討論區互動交流，我們將在下一篇探討類別與繼承的概念及應用！
