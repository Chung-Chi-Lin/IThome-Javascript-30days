// === day14 自我挑戰 ===

// 1. 創建一個 Car 類別，並使用繼承擴展 ElectricCar 類別，添加額外的屬性和方法。
// 定義一個 Car 類別作為父類
class Car {
	constructor(brand, model) {
		this.brand = brand; // 初始化品牌
		this.model = model; // 初始化型號
	}

	// 定義一個啟動方法
	start() {
		console.log(`${this.brand} ${this.model} starts.`);
	}
}

// 定義一個 ElectricCar 類別繼承自 Car
class ElectricCar extends Car {
	constructor(brand, model, batteryLife) {
		super(brand, model); // 調用父類的 constructor，初始化品牌和型號
		this.batteryLife = batteryLife; // 初始化電池壽命
	}

	// 定義一個充電方法
	charge() {
		console.log(`${this.brand} ${this.model} is charging. Battery life: ${this.batteryLife}`);
	}
}

// 創建一個 ElectricCar 類別的實例
const tesla = new ElectricCar('Tesla', 'Model S', '100%');

// 調用實例方法
tesla.start();  // 輸出: Tesla Model S starts.
tesla.charge(); // 輸出: Tesla Model S is charging. Battery life: 100%

// 2. 使用 super 關鍵字在子類中調用父類的方法，並自定義新方法。
class animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name} breaks.`);
	}
}

class bird extends animal {
	constructor(name) {
		super(name);
	}

	speak() {
		console.log(`${this.name} chirping.`);
	}
}

const bird1 = new bird('Bird');
bird1.speak(); // 輸出: Bird chirping.
