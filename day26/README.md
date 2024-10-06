# 【Day 26】高階函數：map、filter、reduce

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

今天來到了第 26 天，我們要探討高階函數中的三個非常重要的工具：`map`、`filter` 和 `reduce`。這些方法讓我們能夠更優雅地處理數組，省去冗長的迴圈和臨時變數。別擔心，今天的內容雖然稍微進階一點，但我會帶著你一步步走過去，保證你學會這些“魔法”！

## 什麼是高階函數？
高階函數（Higher-Order Function）是可以接受其他函數作為參數，或者將函數作為返回值的函數。這種設計模式讓我們能夠把邏輯分離，代碼更模組化。

## map()
### 基本概念
`map()` 方法會創建一個新的數組，這個數組的每一個元素都由原數組中的元素經過指定的回調函數處理後產生。

```javascript
const numbers = [1, 2, 3, 4, 5];

// 使用 map 將數組中的每個元素乘以 2
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```
這段代碼將每個 `numbers` 中的數字都乘以 2。`map` 是一個純粹的轉換操作，它會根據原數組生成一個新的數組，原數組不會改變。

## filter()
### 基本概念
`filter()` 方法會創建一個新的數組，這個數組包含了原數組中所有通過回調函數測試的元素。

```javascript
const numbers = [1, 2, 3, 4, 5];

// 使用 filter 選擇出所有偶數
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
```
這個例子中，我們使用 filter 選出數組中所有的偶數。filter 是用來篩選數據的，它不會改變原來的數組。

## reduce()
### 基本概念
`reduce()` 是一個功能非常強大的方法，它可以對數組中的每一個元素進行處理，並將其結果累積成一個最終的值。這個方法常常被用來求和、乘積，甚至可以用來做更加複雜的數據處理。

```javascript
const numbers = [1, 2, 3, 4, 5];

// 使用 reduce 將數組中的元素累加
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 15
```
在這個例子中，`reduce` 將數組中的每個數字相加，`acc`是累加器，`curr` 是當前處理的數組元素，最終返回的就是累加結果。

## 高階函數的組合使用
高階函數最強大的地方是可以進行組合，讓我們能夠一行代碼搞定非常複雜的邏輯。

### map + filter + reduce
```javascript
const numbers = [1, 2, 3, 4, 5];

// 先篩選出偶數，然後將它們乘以 2，最後將結果累加
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((acc, curr) => acc + curr, 0);

console.log(result); // 12 (2*2 + 4*2)
```
這裡，我們首先用 filter 篩選出偶數，接著用 map 將這些偶數乘以 2，最後用 reduce 將它們累加。這種鏈式調用讓代碼非常直觀、清晰。

## 實際應用範例
### 使用 map 進行數據轉換

```javascript
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 700 }
];

// 使用 map 將產品價格增加 10%
const updatedPrices = products.map(product => ({
  name: product.name,
  price: product.price * 1.1
}));

console.log(updatedPrices);
// [{ name: 'Laptop', price: 1100 }, { name: 'Phone', price: 550 }, { name: 'Tablet', price: 770 }]
```
這裡我們使用 `map` 為每個產品的價格增加了 10%。

### 使用 filter 進行數據篩選

```javascript
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 700 }
];

// 使用 filter 選擇價格高於 600 的產品
const expensiveProducts = products.filter(product => product.price > 600);

console.log(expensiveProducts);
// [{ name: 'Laptop', price: 1000 }, { name: 'Tablet', price: 700 }]
```
這裡我們使用 `filter` 篩選出了價格高於 600 的產品。

### 使用 `reduce` 進行數據累加
```javascript
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 700 }
];

// 使用 reduce 計算產品的總價
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

console.log(totalPrice); // 2200
```
這裡我們使用 `reduce` 計算所有產品的總價格。

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1：使用 `map` 將數組中的每個數字乘以 2
```javascript
const numbers = [1, 2, 3, 4, 5];

// 使用 map 進行處理
const doubled = numbers.map(num => num * 2);

console.log(doubled); // 預期輸出: [2, 4, 6, 8, 10]
```

### 挑戰 2: 使用 filter 篩選出數組中的偶數
```javascript
const numbers2 = [1, 2, 3, 4, 5];

// 使用 filter 進行篩選
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // 預期輸出: [2, 4]
```

### 挑戰 3: 使用 reduce 計算數組中所有數字的總和
```javascript
const numbers3 = [1, 2, 3, 4, 5];

// 使用 reduce 進行計算
const total = numbers.reduce((acc, num) => acc + num, 0);

console.log(total); // 預期輸出: 15
```

## 總結

在今天的學習中，我們了解了 `map`、`filter` 和 `reduce` 這三個強大的高階函數。它們不僅讓代碼更簡潔，而且讓我們能夠在處理數組時寫出更具表現力的邏輯。這些技巧絕對是你未來開發中不可或缺的工具！

歡迎在討論區與我互動，明天我們將深入探討異步處理的簡化方法！