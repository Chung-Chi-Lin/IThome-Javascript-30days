# 【Day 16】深入了解 JavaScript 類別中的私有字段：保護數據的最佳實踐

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

歡迎來到第十六天的 JavaScript 進階學習！今天我們將深入探討類別中的私有字段（Private Fields）。私有字段是 ES2020 引入的一項強大功能，它允許我們在類別中定義真正私有的屬性，這些屬性不能被類別外部的代碼訪問或修改。這對於保護敏感數據和保持代碼的封裝性至關重要。

本文不僅會介紹私有字段的基本概念和使用方法，還會通過具體範例和最佳實踐，幫助你深入理解並在日常開發中靈活運用這一特性。

## 私有字段的基本概念

### 什麼是私有字段？

在 JavaScript 中，私有字段使用 `#` 作為前綴來定義。這些字段只能在類別的內部訪問，無法通過類別的實例或類別外部的代碼來訪問。這與傳統的公開屬性形成了鮮明對比，確保了數據的安全性。

### 如何定義私有字段

讓我們來看看如何在類別中定義和使用私有字段：

```javascript
// 定義一個 BankAccount 類別，模擬銀行賬戶
class BankAccount {
    // 使用 # 定義私有字段
    #balance = 0;

    // 構造函數，用於初始化賬戶持有人和餘額
    constructor(owner, initialBalance) {
        this.owner = owner; // 公開屬性
        this.#balance = initialBalance; // 初始化私有字段
    }

    // 定義一個方法，用於存款
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount; // 更新私有字段
            console.log(`${this.owner} 存入了 ${amount}，當前餘額為 ${this.#balance}`);
        } else {
            console.error('存款金額必須大於 0');
        }
    }

    // 定義一個方法，用於取款
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount; // 更新私有字段
            console.log(`${this.owner} 提取了 ${amount}，當前餘額為 ${this.#balance}`);
        } else {
            console.error('取款金額無效或餘額不足');
        }
    }

    // 定義一個方法，用於檢查餘額
    checkBalance() {
        return `賬戶餘額為 ${this.#balance}`;
    }
}

// 創建 BankAccount 類別的實例
const myAccount = new BankAccount('Alice', 1000);

// 存款和取款操作
myAccount.deposit(500); // 輸出: Alice 存入了 500，當前餘額為 1500
myAccount.withdraw(200); // 輸出: Alice 提取了 200，當前餘額為 1300

// 嘗試訪問私有字段（會報錯）
console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
```

### 為什麼要使用私有字段？
使用私有字段的主要原因是為了保護類別的內部狀態，防止外部代碼直接修改這些屬性，從而避免潛在的錯誤和不一致性。這種封裝性使代碼更具可維護性和安全性。

## 私有字段的最佳實踐
### 何時應該使用私有字段？
在以下情況下，應該考慮使用私有字段：
1. 保護敏感數據：如賬戶餘額、密碼等，不應該直接暴露給外部。
2. 維護類別內部的邏輯一致性：避免外部直接修改內部狀態導致的數據錯誤。
3. 確保接口的簡單性和一致性：提供公開的接口來訪問數據，保持代碼的易用性和可讀性。

## 如何結合私有字段與公共方法
通過結合私有字段和公共方法，我們可以為外部代碼提供安全的訪問和操作方式，而不必暴露私有字段。這是一種常見的封裝模式。
```javascript
// 定義一個 Employee 類別，用於管理員工信息
class Employee {
    #salary = 0; // 定義私有字段

    constructor(name, salary) {
        this.name = name; // 公開屬性
        this.#salary = salary; // 初始化私有字段
    }

    // 定義公共方法，用於獲取員工薪水
    getSalary() {
        return this.#salary;
    }

    // 定義公共方法，用於增加薪水
    increaseSalary(amount) {
        if (amount > 0) {
            this.#salary += amount;
            console.log(`${this.name} 的薪水增加了 ${amount}，當前薪水為 ${this.#salary}`);
        } else {
            console.error('增加金額必須大於 0');
        }
    }
}

// 創建 Employee 類別的實例
const employee = new Employee('Bob', 5000);

// 增加薪水
employee.increaseSalary(1000); // 輸出: Bob 的薪水增加了 1000，當前薪水為 6000

// 獲取薪水
console.log(employee.getSalary()); // 輸出: 6000
```
在這個例子中，#salary 是一個私有字段，不能直接訪問。取而代之的是，我們使用 getSalary 和 increaseSalary 這樣的公共方法來進行安全的數據訪問和操作。

## 本篇自我挑戰
### 挑戰 1：創建一個 Car 類別，並使用私有字段來保護車輛的引擎狀態（如是否啟動）。
```javascript
class Car {
	#engineOn = false; // 私有字段，表示引擎狀態

	startEngine() {
		if (!this.#engineOn) {
			this.#engineOn = true;
			console.log('引擎已啟動');
		} else {
			console.log('引擎已經在運行');
		}
	}

	stopEngine() {
		if (this.#engineOn) {
			this.#engineOn = false;
			console.log('引擎已停止');
		} else {
			console.log('引擎已經停止');
		}
	}

	getEngineStatus() {
		return this.#engineOn ? '引擎正在運行' : '引擎已關閉';
	}
}

const myCar = new Car();
myCar.startEngine();  // 輸出: 引擎已啟動
myCar.stopEngine();   // 輸出: 引擎已停止
console.log(myCar.getEngineStatus()); // 輸出: 引擎已關閉
```

### 挑戰 2：創建一個 SecureVault 類別，使用私有字段來存儲和管理密碼。
```javascript
class SecureVault {
	#password = '';

	constructor(password) {
		this.#password = password; // 初始化私有字段
	}

	// 驗證輸入的密碼是否正確
	verifyPassword(input) {
		return input === this.#password;
	}

	// 更新密碼
	updatePassword(oldPassword, newPassword) {
		if (this.verifyPassword(oldPassword)) {
			this.#password = newPassword;
			console.log('密碼已更新');
		} else {
			console.error('舊密碼錯誤，無法更新');
		}
	}
}

const vault = new SecureVault('mySecret123');
console.log(vault.verifyPassword('wrongPassword')); // 輸出: false
vault.updatePassword('mySecret123', 'newSecret456'); // 輸出: 密碼已更新
```

## 總結

在第十六天的學習中，我們探討了類別中的私有字段以及如何利用它們來保護數據並提高代碼的封裝性。理解並靈活運用這些概念，將幫助你編寫出更加安全和可維護的 JavaScript 代碼。

歡迎在討論區互動交流，明天我們將探討模組化！
