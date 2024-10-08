// === day13 自我挑戰 ===

// 1. 使用非阻塞 I/O 模擬一個簡單的數據讀取操作，你認為正確輸出順序是如何?
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

// 1. '如果成功' > '讀取文件請求已發送，請等待文件內容顯示...' > '文件內容: ...'
// 2. '如果失敗' > '讀取文件請求已發送，請等待文件內容顯示...' > '讀取文件錯誤: ...'

// 2. 使用非阻塞 I/O 模擬一個簡單的延遲操作，你認為正確輸出順序是如何?
console.log('開始操作...');

setTimeout(() => {
	console.log('操作已完成！');
}, 2000);

console.log('操作請求已發送，等待完成...');

// 1. '開始操作...' > '操作請求已發送，等待完成...' > '操作已完成！'
