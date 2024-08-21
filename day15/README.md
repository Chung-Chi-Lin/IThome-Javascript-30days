# 【Day 15】靜態方法與存取器

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

歡迎來到第十五天的學習！今天我們將深入探討 ES6+ 引入的類別中的靜態方法（Static Methods）與存取器（Getters & Setters）。這些特性在面向對象編程中非常有用，能夠幫助我們更好地組織代碼和保護數據。靜態方法讓我們可以在不創建實例的情況下調用類別方法，而存取器則提供了一種控制對象屬性訪問和更新的方式。

## 靜態方法（Static Methods）

### 基本概念

靜態方法是屬於類別本身，而不是某個實例的。這意味著你可以直接通過類別名稱來調用靜態方法，而不需要創建類別的實例。靜態方法通常用於創建工具方法、輔助函數或不需要依賴於實例的邏輯。

### 靜態方法的使用

讓我們通過一個例子來了解如何定義和使用靜態方法：

```javascript
// 定義一個 MathUtil 類別，用於存放數學工具方法
class MathUtil {
    // 定義一個靜態方法，用於計算兩個數字的和
    static add(a, b) {
        return a + b;
    }

    // 定義一個靜態方法，用於計算兩個數字的乘積
    static multiply(a, b) {
        return a * b;
    }
}

// 使用類別名稱直接調用靜態方法，而不需要創建實例
console.log(MathUtil.add(5, 3)); // 輸出: 8
console.log(MathUtil.multiply(4, 2)); // 輸出: 8
```

在這個例子中，MathUtil 類別包含了兩個靜態方法 add 和 multiply，它們分別用於加法和乘法運算。這些方法可以直接通過類別名稱調用，無需實例化 MathUtil 類別。

### 靜態方法的應用場景

靜態方法通常用於：
- 創建工具方法（如計算、格式化等）
- 創建輔助函數
- 不依賴於實例的邏輯

## 存取器（Getters & Setters）
### 基本概念
存取器是類別中用來控制屬性讀取和設置的一種方法。`getter` 方法用於獲取屬性的值，`setter` 方法用於設置屬性的值。這樣做的好處是可以在屬性訪問和更新時添加額外的邏輯，如驗證數據或觸發其他行為。

### 使用存取器
讓我們來看看如何定義 `getter` 和 `setter`，並理解它們的作用：
```javascript
// 定義一個 Person 類別，用於管理人的信息
class Person {
	constructor(name, age) {
		this._name = name; // 使用下劃線作為私有屬性的命名約定
		this._age = age;
	}

	// 定義一個 getter 用於獲取 name 屬性
	get name() {
		return this._name;
	}

	// 定義一個 setter 用於設置 name 屬性
	set name(newName) {
		if (typeof newName === 'string' && newName.length > 0) {
			this._name = newName; // 只有當新名稱有效時才進行設置
		} else {
			console.error('無效的名稱');
		}
	}

	// 定義一個 getter 用於獲取 age 屬性
	get age() {
		return this._age;
	}

	// 定義一個 setter 用於設置 age 屬性
	set age(newAge) {
		if (typeof newAge === 'number' && newAge > 0) {
			this._age = newAge; // 只有當新年齡有效時才進行設置
		} else {
			console.error('無效的年齡');
		}
	}
}

// 創建一個 Person 類別的實例
const john = new Person('John', 30);

// 使用 getter 獲取屬性值
console.log(john.name); // 輸出: John

// 使用 setter 設置新屬性值
john.name = 'Johnny'; // 設置成功
console.log(john.name); // 輸出: Johnny

// 嘗試設置無效的屬性值
john.age = -5; // 輸出: 無效的年齡
```
在這個例子中，我們定義了一個 `Person` 類別，並為 `name` 和 `age` 屬性設置了 `getter` 和 `setter` 方法。這使得我們能夠控制這些屬性的訪問和更新過程，並添加數據驗證邏輯。

### 存取器的應用場景
存取器通常用於：
- 控制對象屬性的讀取和設置
- 添加數據驗證邏輯
- 在屬性變更時觸發其他操作

## 實際應用範例
### 結合靜態方法與存取器進行對象管理
我們來看看如何將靜態方法與存取器結合，實現一個更複雜的例子：
```javascript
// 定義一個 Account 類別，用於模擬銀行賬戶
class Account {
    constructor(owner, balance) {
        this.owner = owner;     // 設置賬戶所有者
        this._balance = balance; // 設置初始賬戶餘額，作為私有屬性
    }

    // 定義一個靜態方法，用於將錢轉帳到另一個賬戶
    static transfer(source, target, amount) {
        if (source.balance >= amount) {
            source.withdraw(amount); // 從來源賬戶提取金額
            target.deposit(amount);  // 存入目標賬戶
            console.log(`轉賬成功: ${amount} 已從 ${source.owner} 轉至 ${target.owner}`);
        } else {
            console.error('餘額不足，無法轉帳');
        }
    }

    // 定義一個 getter 用於獲取賬戶餘額
    get balance() {
        return this._balance;
    }

    // 定義一個私有方法，用於提取金額
    withdraw(amount) {
        this._balance -= amount;
    }

    // 定義一個私有方法，用於存入金額
    deposit(amount) {
        this._balance += amount;
    }
}

// 創建兩個 Account 類別的實例
const aliceAccount = new Account('Alice', 1000);
const bobAccount = new Account('Bob', 500);

// 使用靜態方法進行轉帳
Account.transfer(aliceAccount, bobAccount, 200); // 輸出: 轉賬成功: 200 已從 Alice 轉至 Bob

// 獲取轉帳後的賬戶餘額
console.log(`Alice 的餘額: ${aliceAccount.balance}`); // 輸出: Alice 的餘額: 800
console.log(`Bob 的餘額: ${bobAccount.balance}`); // 輸出: Bob 的餘額: 700
```
在這個例子中，我們使用靜態方法 transfer 來模擬兩個賬戶之間的轉帳操作，同時利用存取器來保護和管理賬戶的餘額屬性。這樣的設計使得代碼更具可讀性和擴展性。

## 本篇自我挑戰
### 挑戰 1：創建一個 Product 類別，並使用 getter 和 setter 控制產品價格屬性的讀取和設置。
```javascript
class Product {
	constructor(name, price) {
		this.name = name;
		this._price = price;
	}

	? price() {
		return this._price;
	}
	
	? price(newPrice) {
		?
	}
}

const laptop = new Product('Laptop', 1500);

console.log(laptop.price); // 輸出: 1500

laptop.price = 1200;
console.log(laptop.price);

// 嘗試設置無效價格
laptop.price = -100;        // 輸出: 價格必須大於 0
```

### 挑戰 2：創建一個 MathHelper 類別，並使用靜態方法實現幾個常用的數學計算，如求和、乘積和階乘。
```javascript
class MathHelper {
    // 定義一個靜態方法，用於計算兩個數字的和
    ? sum(a, b) {
        ?
    }

    // 定義一個靜態方法，用於計算兩個數字的乘積
    ? multiply(a, b) {
        ?
    }

    // 定義一個靜態方法，用於計算一個數字的階乘
    ? factorial(n) {
        ?
    }
}

// 使用 MathHelper 類別的靜態方法進行計算
console.log(MathHelper.sum(5, 3)); // 輸出: 8
console.log(MathHelper.multiply(4, 2)); // 輸出: 8
console.log(MathHelper.factorial(5)); // 輸出: 120
```

## 總結

在第十五天的學習中，我們學習了如何使用靜態方法和存取器來提升代碼的結構和可讀性。理解這些概念並熟練運用，將幫助你在面向對象編程中編寫出更加乾淨、可維護的代碼。

歡迎在討論區互動交流，我們將在下一篇探討類別中的私有字段！
