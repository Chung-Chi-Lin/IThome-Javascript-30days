// === day12 自我挑戰 ===

// 1. 使用 setTimeout 模擬一個倒計時器
function countdown(seconds) {
	let counter = seconds;

	const intervalId = setInterval(() => {
		console.log(counter);
		counter -= 1;

		if (counter < 0) {
			clearInterval(intervalId);
			console.log('Countdown finished');
		}
	}, 1000);
}

countdown(5); // 預期輸出：5, 4, 3, 2, 1, Countdown finished


// 2. 使用 Promise 和微任務模擬數據加載
function loadData() {
	return new Promise(resolve => {
		console.log('Loading data...');
		setTimeout(() => resolve('Data loaded'), 2000);
	});
}

loadData().then(message => {
	console.log(message); // 預期輸出：Data loaded
	return Promise.resolve().then(() => console.log('Microtask complete'));
});
