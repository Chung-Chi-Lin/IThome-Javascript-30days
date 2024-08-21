# 【Day 7】Array 和 String 的新方法

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

在第七天，我們將探討 ES6 及之後版本中引入的一些新的 Array 和 String 方法，這些方法極大地豐富了我們處理數組和字串的能力，使得代碼更加簡潔和易於維護。

## Array 的新方法

### Array.from()

- **基本概念**：`Array.from()` 方法從類似數組或可迭代對象創建一個新的，淺拷貝的數組實例。
```javascript
const set = new Set([1, 2, 3]);
const arrayFromSet = Array.from(set);
console.log(arrayFromSet); // [1, 2, 3]

const str = 'hello';
const arrayFromString = Array.from(str);
console.log(arrayFromString); // ['h', 'e', 'l', 'l', 'o']

// 延伸補充: Array.from 還提供了第二個參數使用，針對新數組做操作
const num = new Set([1, 2, 3]);
const arrayFromNum = Array.from(num, x => x * 2);
console.log(arrayFromNum); // [2, 4, 6]
```

### Array.of()

- **基本概念**：`Array.of()`  方法創建一個新的數組實例，該實例的元素由參數提供，而不管數量或類型。

```javascript
const numbers = Array.of(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]
```
PS.這邊補充可能會有的疑惑，為何不直接使用 [ ] 去宣告? 當然可以! 但面對 API 回傳或是不確定生成的陣列類型、長度，就可以去使用。
相較於使用 new Array(3) 是生成含有三個空插槽的陣列來說更為直觀易懂!

### Array.find() 和 Array.findIndex()

- **基本概念**：
  - Array.find() 返回數組中滿足提供的測試函數的`第一個元素的值`。
  - Array.findIndex() 返回數組中滿足提供的測試函數的`第一個元素的索引`。
```javascript
const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find(num => num > 3);
console.log(foundNumber); // 4

const foundIndex = numbers.findIndex(num => num > 3);
console.log(foundIndex); // 3

// 當沒有找到時的回傳
const notFoundNumber = number.find(num => num > 6);
console.log(foundNumber) // undefined
```

### Array.includes()

- **基本概念**：`Array.includes()` 方法用來判斷一個數組是否包含一個指定的值，根據情況返回 `true` 或 `false`。
```javascript
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape')); // false
```
### Array.fill()

- **基本概念**：`Array.fill()` 方法用一個固定值填充數組中從起始索引到終止索引的所有元素。
  - arr.fill(value[, start[, end]])。value 是欲填入陣列的值。要填入的元素區間為 [start, end)，意即包含 start 但不包含 end。
```javascript
const num  = new Array(3);
num.fill(1);
console.log(num); // [1, 1, 1]

const numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 2, 4);
console.log(numbers); // [1, 2, 0, 0, 5]
```
PS: 可能這時候會心想，同個元素填滿有什麼用處? 比起迴圈將每個值重新設置來說，因為 fill 有經過 js 的優化所以當初始化大型陣列時是非常有用的方法!
## String 的新方法
### String.includes()

- **基本概念**：`String.includes()` 方法用來判斷一個字串是否包含在另一個字串中，根據情況返回 `true` 或 `false`。
```javascript
const str = 'hello world';
console.log(str.includes('world')); // true
console.log(str.includes('earth')); // false

// 補充: 像在實戰中因為 includes() 並不會分辨大小寫，這邊時常搭配轉大小寫去設計哦!
```
### String.startsWith() 和 String.endsWith()

- **基本概念**：
  - `String.startsWith()` 方法用來判斷當前字串是否是以另一個給定的子字串開頭。
  - `String.endsWith()` 方法用來判斷當前字串是否是以另一個給定的子字串結尾。
```javascript
const str = 'hello world';
console.log(str.startsWith('hello')); // true
console.log(str.endsWith('world')); // true
```
### String.repeat()

- **基本概念**：`string.repeat()` 方法返回一個新字串，表示將原字串重複 n 次。
- **應用場景**: 當需要使用 js 設計網頁中大量的`圖形邊線`、`UI設計`或是`性能數據測試`都會使用到。
- 
```javascript
const str = 'repeat ';
console.log(str.repeat(3)); // 'repeat repeat repeat'
```
### String.padStart() 和 String.padEnd()

- **基本概念**：
  - String.padStart() 方法用於在當前字串開頭填充另一個字串，直到達到給定的長度。
  - String.padEnd() 方法用於在當前字串末尾填充另一個字串，直到達到給定的長度。
```javascript
const str = '5';
console.log(str.padStart(3, '0')); // '005'
console.log(str.padEnd(3, '0')); // '500'
```

## 實際應用範例
### Array.find() 和 Array.includes() 的應用
- 場景描述：在開發中，我們經常需要找到滿足某條件的元素或檢查數組中是否存在某個元素。
```javascript
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const user = users.find(user => user.name === 'Bob');
console.log(user); // { id: 2, name: 'Bob' }

const hasUser = users.map(user => user.name).includes('Alice');
console.log(hasUser); // true
```

### String.includes() 和 String.repeat() 的應用
- 場景描述：在處理字串時，檢查特定內容是否存在以及重複某段文本是常見操作。
```javascript
const phrase = 'The quick brown fox jumps over the lazy dog';
console.log(phrase.includes('quick')); // true

const separator = '-'.repeat(10);
console.log(separator); // '----------'
```

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1：使用 Array 的新方法從類似數組的對象創建真正的數組

```javascript
function convertToArray(arrayLike) {
  // 在這裡使用 Array.from() 將類似數組的對象轉換為真正的數組
}

const nodeList = document.querySelectorAll('div');
const arrayFromNodeList = convertToArray(nodeList);
console.log(arrayFromNodeList); // 預期輸出：一個包含所有 div 元素的數組
```

### 挑戰 2：使用 String 的新方法檢查字串前綴和後綴

```javascript
function checkStringEdges(str) {
  // 使用 String.startsWith() 和 String.endsWith() 檢查字串
}

const example = 'JavaScript is great!';
console.log(checkStringEdges(example)); // 預期輸出：取決於邊界條件
```

## 總結

在第七天的學習中，我們探討了 ES6 及之後版本中的一些新方法，這些方法讓我們在處理數組和字串時更加高效和簡潔。理解並善用這些方法可以顯著提升代碼的可讀性和維護性。

歡迎在討論區互動交流，我們將在下一篇探討 Number 和 Object 的新方法！
