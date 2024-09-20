// === day18 自我挑戰 ===

// 1. 使用 Proxy 和 Reflect 創建一個對象的日誌記錄系統
// 創建一個目標對象，模擬一個簡單的數據存儲
const store = {
	items: []
};

// 創建一個代理，攔截對象的操作並記錄日誌
const logHandler = {
	get(target, prop) {
		console.log(`讀取屬性: ${prop}`);
		return Reflect.get(target, prop);
	},
	set(target, prop, value) {
		console.log(`設置屬性: ${prop} = ${value}`);
		return Reflect.set(target, prop, value);
	}
};

// 創建代理對象
const proxyStore = new Proxy(store, logHandler);

// 測試代理對象
proxyStore.items.push('item1'); // 記錄: 設置屬性: items = item1
console.log(proxyStore.items); // 記錄: 讀取屬性: items

// 2. 創建一個動態 API，使用 Proxy 來自動生成對象的方法

// 定義一個目標對象，模擬一個簡單的 API
const api = {
	getUser: () => ({ id: 1, name: 'Alice' })
};

// 創建一個代理，攔截對象的方法調用並自動生成新的方法
const apiHandler = {
	get(target, prop) {
		if (prop in target) {
			return target[prop];
		} else {
			// 如果方法不存在，則自動生成一個返回占位符的函數
			return () => `API 方法 ${prop} 尚未實現`;
		}
	}
};

// 創建代理對象
const proxyApi = new Proxy(api, apiHandler);

// 測試代理對象
console.log(proxyApi.getUser()); // 輸出: { id: 1, name: 'Alice' }
console.log(proxyApi.getOrder()); // 輸出: API 方法 getOrder 尚未實現
