# 【Day 5】函數參數預設值與 Symbol

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

在第五天，我們將探討 ES6 中的兩個重要特性：函數參數預設值和 Symbol。函數參數預設值允許我們為函數的參數設置默認值，使函數在調用時更加靈活。Symbol 是 ES6 引入的一種新的基本數據類型，主要用於對象屬性的唯一標識符。

## 函數參數預設值

### 基本概念

函數參數預設值允許我們在函數定義時為參數設置默認值，當調用函數時如果沒有傳入對應的參數，則使用這些預設值。

### 基本用法

```javascript
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet('Alice'); // Hello, Alice!
```

在這個例子中，函數 `greet` 的參數 `name` 有一個默認值 `'Guest'`。當調用 `greet` 時如果沒有傳入 `name`，則使用默認值 `'Guest'`。

### 多個參數的預設值

我們可以為多個參數設置預設值：

```javascript
function sum(a = 1, b = 1) {
    return a + b;
}

console.log(sum()); // 2
console.log(sum(5)); // 6
console.log(sum(3, 7)); // 10
```

### 動態計算預設值

函數參數預設值可以是動態計算的結果：

```javascript
function multiply(a, b = a * 2) {
    return a * b;
}

console.log(multiply(5)); // 50
console.log(multiply(3, 4)); // 12
```

在這個例子中，參數 `b` 的默認值是 `a` 的兩倍。

## Symbol

### 基本概念

Symbol 是 ES6 引入的一種新的基本數據類型，主要用於對象屬性的唯一標識符。每個由 `Symbol()` 創建的 Symbol 值都是唯一的。
雖然在一些框架相對少見，但是需要時可以用來作為避免全局命名衝突的問題。
### 創建 Symbol

我們可以使用 `Symbol()` 函數來創建一個新的 Symbol：

```javascript
const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2); // false
```

即使我們創建兩個值相同的 Symbol，它們也會是唯一且不相等的：

```javascript
const sym1 = Symbol('description');
const sym2 = Symbol('description');

console.log(sym1 === sym2); // false
```

### 用途

Symbol 主要用於對象屬性的鍵，使這些屬性不會與對象中的其他屬性發生衝突。

### 作為對象屬性鍵

```javascript
const mySymbol = Symbol('mySymbol');

const obj = {
    [mySymbol]: 'value'
};

console.log(obj[mySymbol]); // value
```

### 獲取對象的 Symbol 屬性

我們可以使用 `Object.getOwnPropertySymbols()` 獲取對象的 Symbol 屬性：

```javascript
const mySymbol = Symbol('mySymbol');

const obj = {
    [mySymbol]: 'value'
};

const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); // [ Symbol(mySymbol) ]
console.log(obj[symbols[0]]); // value
```

### 內建的 Symbol 值

JavaScript 還提供了一些內建的 Symbol 值，用於修改語言內部行為，例如 `Symbol.iterator`、`Symbol.asyncIterator` 等。

```javascript
const iterable = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

for (const value of iterable) {
    console.log(value); // 1, 2, 3
}
```

## 實際應用範例

### 函數參數預設值的應用

函數參數預設值在處理可選參數時非常有用：

```javascript
function createUser(name, age = 18) {
    return {
        name,
        age
    };
}

console.log(createUser('Alice')); // { name: 'Alice', age: 18 }
console.log(createUser('Bob', 25)); // { name: 'Bob', age: 25 }
```

### Symbol 的應用

Symbol 可用於創建對象的私有屬性，避免屬性名衝突，另外 Symbol(這裡是放描述) ，剛剛說過同個名稱也是唯一，所以提供後方()，加入描述實際上不會影響到作用或取值：

```javascript
const secret = Symbol('secret');

const user = {
    name: 'Alice',
    [secret]: 'mySecret'
};

console.log(user.name); // Alice
console.log(user[secret]); // mySecret
```

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1：使用函數參數預設值重構代碼

```javascript
function greet(name) {
    if (name === undefined) {
        name = 'Guest';
    }
    console.log(`Hello, ${name}!`);
}

// 在這裡使用函數參數預設值
```

### 挑戰 2：創建一個 Symbol 並用作對象的屬性鍵

```javascript
const mySymbol = Symbol('mySymbol');

// 在這裡創建一個對象，並將 Symbol 作為屬性鍵
```

## 總結

在第五天的學習中，我們介紹了函數參數預設值和 Symbol，並探討了它們的基本語法和應用場景。這些特性能夠讓我們的代碼更加靈活和安全。

歡迎在討論區互動交流，我們將在下一篇探討迴圈：for...of 和迭代器！
