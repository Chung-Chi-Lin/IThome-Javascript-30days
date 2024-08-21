// === day10 自我挑戰 ===

// 1. 使用 Promises 完成一個非同步計數器
function asyncCounter(max, interval) {
	return new Promise((resolve, reject) => {
		let current = 0;
		const timer = setInterval(() => {
			current++;
			console.log(current);
			if (current === max) {
				clearInterval(timer);
				resolve('Counter finished');
			}
		}, interval);
	});
}

asyncCounter(5, 1000).then(message => {
	console.log(message); // 輸出: Counter finished
});
