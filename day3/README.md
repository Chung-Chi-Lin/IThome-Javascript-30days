# 【Day 3】箭頭函數與樣板字面值

## 目錄

1. [ES6+ 簡介及環境設置](./day1/README.md)
2. [變量聲明：let 和 const](./day2/README.md)
3. [箭頭函數與樣板字面值](./day3/README.md)
4. [解構賦值與擴展運算符](./day4/README.md)
5. [函數參數預設值與 Symbol](./day5/README.md)
6. [迴圈：for...of 和迭代器](./day6/README.md)
7. [Array 和 String 的新方法](./day7/README.md)
8. [Number 和 Object 的新方法](./day8/README.md)
9. [Math 的新方法](./day9/README.md)
10. [Promises 基礎與進階](./day10/README.md)
11. [async/await 基礎與進階](./day11/README.md)
12. [事件循環概念與詳解](./day12/README.md)
13. [非阻塞 I/O 概念與應用](./day13/README.md)
14. [類別與繼承](./day14/README.md)
15. [靜態方法與存取器](./day15/README.md)
16. [類別中的私有字段](./day16/README.md)
17. [模組化](./day17/README.md)
18. [Proxy 和 Reflect](./day18/README.md)
19. [Set 和 WeakSet](./day19/README.md)
20. [Map 和 WeakMap](./day20/README.md)
21. [生成器與進階應用](./day21/README.md)
22. [可選鏈式操作符](./day22/README.md)
23. [Nullish 合併運算符](./day23/README.md)
24. [BigInt](./day24/README.md)
25. [全局對象：globalThis](./day25/README.md)
26. [高階函數：map、filter、reduce](./day26/README.md)
27. [簡化的異步處理](./day27/README.md)
28. [樣板字面值與標籤模板](./day28/README.md)
29. [擴展運算符的高級用法](./day29/README.md)
30. [現代 JavaScript 項目最佳實踐](./day30/README.md)

## 介紹

今天我們將探討箭頭函數和樣板字面值。這兩個特性都是 ES6 引入的重要改進，能夠極大地提升代碼的簡潔性和可讀性。

箭頭函數提供了一種更簡潔的函數寫法，並且解決了 this 綁定的問題。而樣板字面值則為我們提供了更靈活的字符串處理方式，包括多行字符串和插值表達式。

## 箭頭函數語法
### 基本語法
箭頭函數使用 => 來定義。基本語法如下：

``` javascript
// 傳統函數
function sum(a, b) {
    return a + b;
}

// 箭頭函數
const sum = (a, b) => {
    return a + b;
};

// 簡化箭頭函數（當只有一個表達式時，可以省略花括號和 return 關鍵字）
const sum = (a, b) => a + b;
```
## 與傳統函數的比較
箭頭函數與傳統函數的主要區別在於 this 的綁定方式。傳統函數的 this 是動態綁定的，取決於函數的調用方式。

而箭頭函數的 this 是靜態綁定的，總是指向函數定義時的上下文。 接下來我們來談談 ~~搞不懂不想懂~~ 的 this。

## this 綁定

### 傳統函數中的 this
在傳統函數中，this 的指向取決於函數的調用方式：

``` javascript
function Person() {
    this.age = 0;

    setInterval(function growUp() {
        this.age++;
        console.log(this.age);  // NaN
    }, 1000);
}

const p = new Person();
// 這裡的 this 指向的是全局對象，因為 setInterval 是在全局上下文中調用的。
```
然而可以利用宣告變數方法儲存再變數中!
``` javascript
// 使用 self 變量解決傳統函數中的 this 問題
function Person() {
    this.age = 0;
    const self = this; // 保存 this 的引用

    setInterval(function growUp() {
        self.age++;
        console.log(self.age); // 正確輸出 age
    }, 1000);
}

const p = new Person();
```
### 箭頭函數中的 this
在箭頭函數中，this 的指向是靜態的，總是指向定義時的上下文：

``` javascript
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

const p = new Person();
// 這裡的 this 指向的是 Person 實例對象，因為箭頭函數沒有自己的 this。
```
箭頭真香我以後都只用箭頭函式! 如果這樣想那可就 麻 煩大了! 我們來看看幾個陷阱。

### 1. 在方法中使用箭頭函數

箭頭函數繼承的是定義時的上下文 `this`，而不是調用時的上下文。在物件的方法中使用箭頭函數可能會導致 `this` 綁定錯誤。

#### 範例

```javascript
const person = {
    name: 'Alice',
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Hello, my name is undefined
```

在這個例子中，`greet` 方法是一個箭頭函數，它繼承的是全局作用域的 `this`，而不是 `person` 對象的 `this`。因此，`this.name` 是 `undefined`。

### 正確做法

應該使用普通函數來定義方法，以確保 `this` 正確綁定到對象。

```javascript
const person = {
    name: 'Alice',
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Hello, my name is Alice
```

### 2. 在對象內的嵌套函數中使用箭頭函數

如果需要在對象內的嵌套函數中使用 `this`，可以使用箭頭函數來繼承外層函數的 `this`。

#### 範例

```javascript
const person = {
    name: 'Alice',
    friends: ['Bob', 'Charlie'],
    listFriends() {
        this.friends.forEach(friend => {
            console.log(`${this.name} knows ${friend}`);
        });
    }
};

person.listFriends();
// Alice knows Bob
// Alice knows Charlie
```

在這個例子中，`forEach` 回調函數是一個箭頭函數，繼承了 `listFriends` 方法中的 `this`，這樣就可以正確地訪問 `person` 對象的屬性。

### 3. 箭頭函數不適合作為構造函數

箭頭函數不能用作構造函數，使用 `new` 關鍵字調用箭頭函數會拋出錯誤。

#### 範例

```javascript
const Person = (name) => {
    this.name = name;
};

// const p = new Person('Alice'); // TypeError: Person is not a constructor
```

### 正確做法

應該使用普通函數來定義構造函數。

```javascript
function Person(name) {
    this.name = name;
}

const p = new Person('Alice');
console.log(p.name); // Alice
```

### 4. 遺漏 `return` 關鍵字

箭頭函數在只有一個表達式時，可以省略花括號和 `return` 關鍵字，但在有多個表達式或需要顯式返回值時，容易遺漏 `return`。

#### 範例

```javascript
const add = (a, b) => {
    a + b; // 沒有 return，結果是 undefined
};

console.log(add(2, 3)); // undefined
```

### 正確做法

需要顯式返回值時，務必加上 `return`。

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3)); // 5
```

或簡化為一行表達式：

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

### 箭頭函式 this 使用注意總結

箭頭函數在正確的情況下使用可以簡化代碼和避免 `this` 綁定的問題，但在以下情況中需要特別注意：
- 不要在對象的方法中使用箭頭函數。
- 在嵌套函數中使用箭頭函數來繼承外層函數的 `this`。
- 箭頭函數不能作為構造函數使用。
- 確保在多表達式的箭頭函數中正確地使用 `return`。


## 樣板字面值基礎
### 基本語法
樣板字面值使用反引號（``）來定義，可以包含多行字符串和插值表達式：

```javascript
const name = 'World';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, World!
```

### 多行字符串
使用樣板字面值可以方便地創建多行字符串：
```javascript
const multiline = `這是一個多行字符串
第一行
第二行
第三行`;
console.log(multiline);
```

### 字符串插值
樣板字面值可以在字符串中嵌入表達式，並自動替換為其計算結果：
```javascript
const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // The sum of 5 and 10 is 15.
```

## 標籤模板
### 基本概念
標籤模板是一種高級用法，可以在樣板字面值前添加一個標籤函數，該函數可以對樣板字面值的內容進行處理：

```javascript
function tag(strings, ...values) {
	console.log(strings);
	console.log(values);
	return strings[0] + values.join('');
}

const message = tag`Hello, ${name}! Welcome to ${location}.`;
console.log(message);
```

### 應用場景
標籤模板可以用於實現自定義的字符串處理邏輯，如安全轉義、國際化等。

```javascript
const maxItems = 10;

for (let i = 0; i < maxItems; i++) {
    // 迴圈中使用 let
    console.log(i);
}
```
## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!

- 今日挑戰：使用箭頭函數重寫傳統函數
```javascript
// 傳統函數
function multiply(a, b) {
	return a * b;
}

// 使用箭頭函數重寫
const multiply = (a, b) => a * b;
```
- 今日挑戰：使用樣板字面值創建多行字符串
```javascript
// 使用樣板字面值創建多行字符串
const poem = `這是一首詩
第一行
第二行
第三行`;
console.log(poem);
```
- 今日挑戰：使用標籤模板實現自定義處理
```javascript
// 自定義標籤函數
function highlight(strings, ...values) {
	return strings.reduce((result, string, i) => `${result}${string}<b>${values[i] || ''}</b>`, '');
}

const name = 'Alice';
const age = 25;
const message = highlight`Name: ${name}, Age: ${age}`;
console.log(message); // Name: <b>Alice</b>, Age: <b>25</b>
```

## 總結

在第三天的學習中，我們介紹了箭頭函數和樣板字面值，並探討了它們的基本語法和應用場景。通過這些新的特性，我們可以編寫更加簡潔和可讀的代碼。

歡迎在討論區互動交流，明天我們將探討解構賦值與擴展運算符！

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 版權聲明

本系列文章版權歸屬於作者，禁止未經許可的轉載和商業用途。歡迎個人學習和分享。
