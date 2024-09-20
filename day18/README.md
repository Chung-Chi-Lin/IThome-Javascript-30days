# 【Day 18】深度解析 JavaScript 中的 Proxy 和 Reflect

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

歡迎來到第十八天的 JavaScript 深度學習！今天我們將探討兩個在 ES6 中引入的重要概念：`Proxy` 和 `Reflect`。這些工具為 JavaScript 提供了強大的元編程能力，使得我們可以攔截和自定義對對象的基本操作，並且可以更容易地管理這些操作。

在這篇文章中，我們會通過一些實際的範例來展示如何在日常開發中運用 `Proxy` 和 `Reflect`，從而提升代碼的靈活性和可維護性。

## Proxy 的基本概念與應用

### 什麼是 Proxy？

`Proxy` 是一個用於創建對象代理的構造函數，允許我們攔截和自定義對對象的基本操作（如屬性讀取、屬性寫入、函數調用等）。這樣，我們可以在這些操作發生時插入額外的邏輯，從而提高代碼的控制能力。

### 使用 Proxy 攔截對象的屬性讀取

以下是使用 `Proxy` 來攔截和自定義對象屬性讀取的示例：

```javascript
// 定義一個目標對象，包含一些基本屬性
const target = {
    message1: "Hello",
    message2: "World"
};

// 創建一個代理，攔截對目標對象的屬性讀取操作
const handler = {
    get: function(target, prop, receiver) {
        // 當訪問的屬性不存在時，返回自定義消息
        if (prop in target) {
            return target[prop];
        } else {
            return `屬性 ${prop} 不存在`;
        }
    }
};

// 創建代理對象
const proxy = new Proxy(target, handler);

// 測試代理對象
console.log(proxy.message1); // 輸出: Hello
console.log(proxy.message2); // 輸出: World
console.log(proxy.message3); // 輸出: 屬性 message3 不存在
```
在這個範例中，當我們嘗試讀取 message3 屬性時，代理會攔截該操作並返回一條自定義消息，因為該屬性在目標對象中並不存在。
## 使用 Proxy 攔截屬性寫入操作
`Proxy` 還可以用來攔截對象的屬性寫入操作，例如在寫入屬性時進行驗證：
```javascript
// 定義一個目標對象，包含數值屬性
const target = {
    _age: 30
};

// 創建一個代理，攔截屬性寫入操作
const handler = {
    set: function(target, prop, value) {
        // 只允許年齡屬性接受數字
        if (prop === '_age' && typeof value !== 'number') {
            throw new TypeError('年齡必須是一個數字');
        }
        // 如果驗證通過，更新屬性
        target[prop] = value;
        return true;
    }
};

// 創建代理對象
const proxy = new Proxy(target, handler);

// 測試代理對象
proxy._age = 40; // 成功更新
console.log(proxy._age); // 輸出: 40

try {
    proxy._age = 'forty'; // 嘗試寫入一個非數字
} catch (e) {
    console.error(e.message); // 輸出: 年齡必須是一個數字
}
```
### 補充: 
使用 _ 作為變量或屬性名稱的前綴是一種約定俗成的慣例，通常表示該變量或屬性是「私有的」或「不應直接訪問的」。

## Proxy 的常見應用場景
- 數據驗證：在寫入屬性之前，通過 Proxy 檢查輸入的數據是否符合要求。
- 數據保護：限制或禁止對象的某些屬性被修改。
- 動態 API：通過 Proxy 自動生成動態屬性或方法。

## Reflect 的基本概念與應用
### 什麼是 Reflect？
`Reflect` 是一個內建對象，它提供了類似 `Proxy` 處理程序的方法，用於對 JavaScript 操作進行反射（如 `get`、`set`、`deleteProperty` 等）。這些方法讓我們能夠更自然、更安全地操作對象，同時保持與原生行為的一致性。
### 使用 Reflect 來操作對象
以下是使用 Reflect 來進行對象屬性操作的示例：
```javascript
// 定義一個目標對象
const target = {
    name: "Alice",
    age: 25
};

// 使用 Reflect 來讀取屬性
console.log(Reflect.get(target, 'name')); // 輸出: Alice

// 使用 Reflect 來設置屬性
Reflect.set(target, 'age', 30);
console.log(target.age); // 輸出: 30

// 使用 Reflect 來檢查屬性是否存在
console.log(Reflect.has(target, 'name')); // 輸出: true

// 使用 Reflect 來刪除屬性
Reflect.deleteProperty(target, 'age');
console.log(target.age); // 輸出: undefined
```
### Reflect 的常見應用場景
- 操作對象屬性：Reflect 提供了簡潔且一致的方法來讀取、設置和刪除對象屬性。
- 模仿原生行為：使用 Reflect 可以確保我們自定義的邏輯與 JavaScript 原生行為保持一致，從而避免潛在的錯誤。

## 實際應用範例
## 使用 Proxy 和 Reflect 來創建一個數據驗證代理
```javascript
// 定義一個目標對象，包含用戶信息
const user = {
	name: 'Bob',
	age: 25
};

// 創建一個代理，攔截屬性寫入操作並使用 Reflect 進行數據驗證
const handler = {
	set(target, prop, value) {
		if (prop === 'age' && typeof value !== 'number') {
			throw new TypeError('年齡必須是一個數字');
		}
		// 使用 Reflect 來設置屬性，保持與原生行為一致
		return Reflect.set(target, prop, value);
	}
};

// 創建代理對象
const proxyUser = new Proxy(user, handler);

// 測試代理對象
proxyUser.age = 30; // 成功更新
console.log(proxyUser.age); // 輸出: 30

try {
	proxyUser.age = 'thirty'; // 嘗試寫入一個非數字
} catch (e) {
	console.error(e.message); // 輸出: 年齡必須是一個數字
}
```

## 本篇自我挑戰
### 挑戰 1：使用 Proxy 和 Reflect 創建一個對象的日誌記錄系統
```javascript
// 創建一個目標對象，模擬一個簡單的數據存儲
const store = {
	items: []
};

// 創建一個代理，攔截對象的操作並記錄日誌
const logHandler = {
	?(target, prop) {
		console.log(`讀取屬性: ${prop}`);
		return ?;
	},
	?(target, prop, value) {
		console.log(`設置屬性: ${prop} = ${value}`);
		return ?);
	}
};

// 創建代理對象
const proxyStore = new Proxy(store, logHandler);

// 測試代理對象
proxyStore.items.push('item1'); // 記錄: 設置屬性: items = item1
console.log(proxyStore.items); // 記錄: 讀取屬性: items

```

### 挑戰 2：創建一個動態 API，使用 Proxy 來自動生成對象的方法
```javascript
// 定義一個目標對象，模擬一個簡單的 API
const api = {
	getUser: () => ({ id: 1, name: 'Alice' })
};

// 創建一個代理，攔截對象的方法調用並自動生成新的方法
const apiHandler = {
	?(?) {
		if (?) {
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

```

## 總結

在第十八天的學習中，我們深入探討了 Proxy 和 Reflect 的使用場景和應用方式。這些工具為我們提供了更多控制代碼執行的能力，讓我們能夠在各種場景下靈活應對複雜的需求。

如果你有任何問題，或希望深入討論 Proxy 和 Reflect 的更多應用，歡迎在討論區留言！

歡迎在討論區互動交流，我們將在下一篇探討 Proxy 和 Reflect!
