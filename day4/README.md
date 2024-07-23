# 【Day 4】解構賦值與擴展運算符

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

在第四天，我們將探討 JavaScript 中的解構賦值和擴展運算符。這些特性是 ES6 引入的。解構賦值允許我們從數組或對象中提取值到變量中，而擴展運算符則提供了一種簡潔的方法來操作數組和對象。

## 解構賦值

### 解構賦值的基本概念

解構賦值允許我們從數組或對象中提取值，並將它們賦值給變量。這使得我們可以更加簡潔地處理數據。

### 解構數組

我們可以從數組中提取值，並將它們賦值給變量：

```javascript
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

我們還可以跳過數組中的某些元素：

```javascript
const numbers = [1, 2, 3];
const [a, , c] = numbers;

console.log(a); // 1
console.log(c); // 3
```

### 解構對象

我們也可以從對象中提取值，並將它們賦值給變量：

```javascript
const person = {
    name: 'Alice',
    age: 25,
    city: 'Taipei'
};

const { name, age, city } = person;

console.log(name); // Alice
console.log(age); // 25
console.log(city); // Taipei
```

我們還可以使用不同的變量名稱來接收值：

PS. 這邊剛開始會需要習慣一下，冒號後是將參數自訂義後的名稱，避免接收 API 時，取值錯誤！

```javascript
const person = {
    name: 'Alice',
    age: 25,
    city: 'Taipei'
};

const { name: personName, age: personAge, city: personCity } = person;

console.log(personName); // Alice
console.log(personAge); // 25
console.log(personCity); // Taipei
```

## 擴展運算符

### 擴展運算符的基本概念

擴展運算符（`...`）允許我們展開數組和對象，它可以用來做很多操作，如合併數組、複製數組、將數組轉換為參數等。

### 合併數組

使用擴展運算符，我們可以輕鬆地合併數組：

快看 ~~懶人救星啊！~~
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined); // [1, 2, 3, 4, 5, 6]
```

### 複製數組

我們也可以使用擴展運算符來複製數組：

```javascript
const arr = [1, 2, 3];
const copy = [...arr];

console.log(copy); // [1, 2, 3]
```

### 將數組轉換為參數

擴展運算符可以將數組轉換為函數的參數：

```javascript
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6
```

### 合併對象

擴展運算符同樣可以用來合併對象：

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combined = { ...obj1, ...obj2 };

console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }
```

## 實際應用範例

### 解構賦值的應用

解構賦值在函數參數中也非常有用：

```javascript
function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const person = {
    name: 'Alice',
    age: 25
};

greet(person); // Hello, my name is Alice and I am 25 years old.
```

### 擴展運算符的應用

擴展運算符可以用來輕鬆地處理函數參數：

```javascript
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
```

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1：使用解構賦值重構代碼

```javascript
const user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
};

// 在這裡使用解構賦值
```

### 挑戰 2：使用擴展運算符合併數組

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 在這裡合併 arr1 和 arr2
```

### 挑戰 3：使用擴展運算符合併對象

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// 在這裡合併 obj1 和 obj2
```

## 總結

在第四天的學習中，我們介紹了解構賦值和擴展運算符，今天的語法希望大家一定要記得因為在未來在實務上會非常長使用到！

歡迎在討論區互動交流，明天我們將探討函數參數預設值與 Symbol！
