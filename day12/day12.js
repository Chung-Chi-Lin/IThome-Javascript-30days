// === day11 自我挑戰 ===

// 1. 使用 async/await 重構一個多層嵌套的 Promise
async function fetchDataWithDelay() {
	return new Promise(resolve => setTimeout(() => resolve("Delayed data"), 1000));
}

async function processData() {
	const data = await fetchDataWithDelay();
	console.log(data); // 預期輸出: Delayed data
}

processData();


// 2. 創建一個可以攔截錯誤的異步函數
async function safeFetchData() {
	try {
		const data = await fetchDataWithError(); // 假設此函數可能拋出錯誤
		console.log(data);
	} catch (error) {
		console.error("Failed to fetch data:", error);
	}
}

safeFetchData();
