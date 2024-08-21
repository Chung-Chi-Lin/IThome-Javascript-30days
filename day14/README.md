# 【Day 14】類別與繼承

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

歡迎來到第十四天的學習！今天我們將深入探討 ES6 引入的類別（Class）和繼承（Inheritance）機制。這些特性不僅讓我們的代碼更結構化，還能更直觀地進行面向對象編程。讓我們一起來學習這些新特性，並了解如何在實際開發中應用它們。

## 類別（Class）

### 基本概念

在 ES6 之前，我們常使用函數來模擬類別的行為。然而，ES6 引入了 `class` 語法，讓我們可以更簡單直觀地定義和管理對象及其行為。雖然底層仍然基於原型繼承，但 `class` 提供了更貼近面向對象編程的寫法。

### 類別的基本語法

我們先來看看如何定義一個類別並創建實例：

```javascript
// 定義一個 Person 類別
class Person {
    // 使用 constructor 定義類別的建構函數，該函數在創建實例時被調用
    constructor(name, age) {
        this.name = name; // 將傳入的 name 參數賦值給實例的 name 屬性
        this.age = age;   // 將傳入的 age 參數賦值給實例的 age 屬性
    }

    // 定義類別方法，用於打印個人介紹
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// 創建一個 Person 類別的實例
const john = new Person('John', 30);

// 調用實例方法 greet
john.greet(); // 輸出: Hello, my name is John and I am 30 years old.
```

在這個例子中，我們定義了一個 Person 類別，並使用 constructor 建構函數來初始化每個實例的 name 和 age 屬性。實例的 greet 方法可以訪問這些屬性並輸出信息。

### 類別中的靜態方法

靜態方法是屬於類別本身，而不是某個實例。這意味著我們可以通過類別名稱直接調用靜態方法，而不需要創建實例。

```javascript
// 定義一個 MathUtil 類別
class MathUtil {
    // 定義靜態方法 add，用於計算兩個數字的和
    static add(a, b) {
        return a + b;
    }
}

// 使用類別名稱直接調用靜態方法
console.log(MathUtil.add(5, 3)); // 輸出: 8
```
這裡的 add 方法是靜態的，所以我們不需要實例化 MathUtil 就能使用它。

## 繼承（Inheritance）
### 基本概念
繼承是一種強大的機制，允許我們創建一個類別並基於它擴展出新的類別。這樣我們就可以重用父類的代碼，並在子類中添加新功能或重寫現有功能。

### 繼承的基本語法
我們先來看看如何使用 extends 關鍵字來實現繼承：
```javascript
// 定義一個 Animal 類別作為父類
class Animal {
    constructor(name) {
        this.name = name; // 初始化動物的 name 屬性
    }

    // 定義一個 speak 方法，子類可以重寫它
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// 定義一個 Dog 類別繼承自 Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // 調用父類的 constructor，初始化 name 屬性
        this.breed = breed; // 初始化狗的品種 breed 屬性
    }

    // 重寫父類的 speak 方法
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// 創建一個 Dog 類別的實例
const dog = new Dog('Rex', 'Golden Retriever');

// 調用實例方法 speak
dog.speak(); // 輸出: Rex barks.
```
在這個例子中，Dog 類別繼承了 Animal 類別，因此 Dog 類別可以使用 Animal 類別中的方法和屬性。同時，Dog 類別還重寫了 speak 方法，使得它有自己特有的行為。

### super 關鍵字

在子類中，我們可以使用 `super` 關鍵字調用父類的建構函數和方法。這對於擴展父類功能或重用父類邏輯非常有用。

```javascript
// 定義一個 Rectangle 類別作為父類
class Rectangle {
	constructor(width, height) {
		this.width = width;   // 初始化長方形的寬度
		this.height = height; // 初始化長方形的高度
	}

	// 定義一個方法用於計算面積
	getArea() {
		return this.width * this.height;
	}
}

// 定義一個 Square 類別繼承自 Rectangle
class Square extends Rectangle {
	constructor(sideLength) {
		super(sideLength, sideLength); // 調用父類的 constructor，將邊長作為寬和高
	}
}

// 創建一個 Square 類別的實例
const square = new Square(4);

// 調用實例方法 getArea
console.log(square.getArea()); // 輸出: 16
```
在這裡，Square 類別通過 super 調用了 Rectangle 類別的構造函數，並將邊長作為寬和高傳遞給父類。

## 實際應用範例
### 類別與繼承在實際項目中的應用
類別和繼承的概念非常適合用來構建可重用、可擴展的代碼。在前端開發中，我們可以使用這些概念來構建複雜的 UI 組件或管理應用程序狀態。

```javascript
// 定義一個 Component 類別作為父類，用於表示所有 UI 組件的基類
class Component {
    constructor(element) {
        this.element = element; // 初始化組件的元素
    }

    // 定義一個渲染方法，所有子類都可以重寫或調用它
    render() {
        console.log('Rendering component...');
    }
}

// 定義一個 Button 類別繼承自 Component
class Button extends Component {
    constructor(element, label) {
        super(element); // 調用父類的 constructor，初始化元素
        this.label = label; // 初始化按鈕的標籤
    }

    // 定義一個點擊方法，表示按鈕被點擊時的行為
    click() {
        console.log(`${this.label} button clicked.`);
    }
}

// 創建一個 Button 類別的實例
const btn = new Button('button-element', 'Submit');

// 調用實例方法
btn.render(); // 輸出: Rendering component...
btn.click();  // 輸出: Submit button clicked.
```
## 本篇自我挑戰
### 挑戰 1：創建一個 Car 類別，並使用繼承擴展 ElectricCar 類別，添加額外的屬性和方法。
```javascript
// 定義一個 Car 類別作為父類
class Car {
    constructor(brand, model) {
        ?
    }

    // 定義一個啟動方法
    start() {
        ?
    }
}

// 定義一個 ElectricCar 類別繼承自 Car
class ElectricCar extends Car {
    ?
}

```

### 挑戰 2：使用 super 關鍵字在子類中調用父類的方法，並自定義新方法。

## 總結

在第十四天的學習中，我們深入了解了類別和繼承的概念及應用。這些特性讓我們的代碼更具結構化和可讀性，特別是在需要構建複雜的應用時尤為重要。繼續探索和應用這些概念吧，明天我們將學習類別中的靜態方法與存取器！

歡迎在討論區互動交流，我們將在下一篇探討我們將探討靜態方法與存取器！
