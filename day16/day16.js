// === day15 自我挑戰 ===

// 1. 創建一個 Product 類別，並使用 getter 和 setter 控制產品價格屬性的讀取和設置。
// 定義一個 Product 類別
class Product {
	constructor(name, price) {
		this.name = name;      // 初始化產品名稱
		this._price = price;   // 初始化產品價格，作為私有屬性
	}

	// 定義一個 getter 用於獲取價格
	get price() {
		return this._price;
	}

	// 定義一個 setter 用於設置價格，並添加驗證
	set price(newPrice) {
		if (newPrice > 0) {
			this._price = newPrice;
		} else {
			console.error('價格必須大於 0');
		}
	}
}

const laptop = new Product('Laptop', 1500);

// 使用 getter 獲取價格
console.log(laptop.price); // 輸出: 1500

// 使用 setter 設置新價格
laptop.price = 1200;        // 設置成功
console.log(laptop.price); // 輸出: 1200

// 嘗試設置無效價格
laptop.price = -100;        // 輸出: 價格必須大於 0

// 2.創建一個 MathHelper 類別，並使用靜態方法實現幾個常用的數學計算，如求和、乘積和階乘。
// 定義一個 MathHelper 類別，用於存放數學計算工具方法
class MathHelper {
	// 定義一個靜態方法，用於計算兩個數字的和
	static sum(a, b) {
		return a + b;
	}

	// 定義一個靜態方法，用於計算兩個數字的乘積
	static multiply(a, b) {
		return a * b;
	}

	// 定義一個靜態方法，用於計算一個數字的階乘
	static factorial(n) {
		if (n <= 1) return 1; // 當 n 為 0 或 1 時，返回 1
		return n * MathHelper.factorial(n - 1); // 遞迴計算 n 的階乘
	}
}

// 使用 MathHelper 類別的靜態方法進行計算
console.log(MathHelper.sum(5, 3)); // 輸出: 8
console.log(MathHelper.multiply(4, 2)); // 輸出: 8
console.log(MathHelper.factorial(5)); // 輸出: 120
