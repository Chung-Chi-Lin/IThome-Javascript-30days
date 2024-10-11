# 【Day 29】擴展運算符的高級用法

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

歡迎來到第 29 天！大家還記得我們在 Day4 有提到擴展運算符嗎? 今天我們將深入探討擴展運算符（spread operator）。相信大家已經知道擴展運算符 `(...)` 可以展開數組或物件，但它的用法不僅僅如此。擴展運算符是一個強大的工具，讓你的代碼更簡潔優雅。我們今天會聊聊一些進階技巧，並探索它在現代 JavaScript 中的多種應用場景。

**深入探討**
- 如何用擴展運算符處理可迭代對象。
- 如何利用擴展運算符進行數組去重。
- 如何將類數組對象（如 NodeList 或 arguments）轉換為真正的數組。
- 如何進行淺拷貝，並注意淺拷貝與深拷貝的差異。

這些應用場景是更進階的技巧，也更適合在處理大型項目、性能優化或設計模式中使用。

## 擴展運算符基礎回顧
首先，我們來簡單回顧一下擴展運算符的基本用法。它可以將數組或物件展開，並且在傳遞參數時非常方便。

### 1. 展開數組
```javascript
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); // [1, 2, 3, 4, 5]
```
這裡，我們用擴展運算符將 numbers 數組展開，並加入新元素。

### 2. 展開物件
```javascript
const person = { name: 'Alice', age: 25 };
const updatedPerson = { ...person, age: 26, city: 'Taipei' };
console.log(updatedPerson); // { name: 'Alice', age: 26, city: 'Taipei' }
```
在物件中，擴展運算符讓我們可以輕鬆合併屬性，或覆蓋現有的值。

## 進階應用：擴展運算符的妙用
接下來，我們將深入探討擴展運算符的進階用法，讓你看到它在日常開發中的多樣應用。

### 1. 用於函數參數
擴展運算符不僅能展開數組，它還可以幫助我們將數組元素當作參數傳遞給函數。
```javascript
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```
在這裡，擴展運算符將數組中的每個元素展開，作為參數傳遞給 `sum` 函數。

### 2. 合併數組
擴展運算符非常適合用來合併數組。
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
```
這樣的方式比使用 `concat` 方法更加簡潔，並且也更加直觀。

### 3. 合併物件
同樣的，擴展運算符可以用於物件合併，類似於 `Object.assign()` 的功能，但語法更簡潔。

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 3, c: 4 }
```
如果遇到重複的屬性，後面的屬性會覆蓋前面的。

### 4. 轉換 NodeList 或 Arguments 為數組
在日常開發中，我們經常需要將類數組物件（如 `NodeList` 或 `arguments`）轉換為真正的數組，這時擴展運算符就派上用場了。

```javascript
const nodeList = document.querySelectorAll('div');
const nodeArray = [...nodeList];
console.log(Array.isArray(nodeArray)); // true
```
擴展運算符讓你輕鬆將 NodeList 轉換成數組，避免手動循環。

### 5. 創建新數組或物件副本
擴展運算符還可以用來創建數組或物件的淺拷貝，這在避免原始數據被修改時非常有用。

```javascript
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]
```
通過擴展運算符，我們創建了一個新的副本，而不是修改原數組。

## 擴展運算符的限制
雖然擴展運算符非常有用，但它也有一些限制。

### 1. 只能展開可迭代對象
擴展運算符只能用於展開可迭代對象，如數組、字串或 `NodeList`。對於非可迭代對象，它會拋出錯誤。
```javascript
const notIterable = { a: 1, b: 2 };
// console.log([...notIterable]); // TypeError: notIterable is not iterable
```
如果要展開非可迭代對象，必須先將其轉換為可迭代類型。

### 2. 僅進行淺拷貝
擴展運算符僅進行淺拷貝，這意味著對於嵌套的物件或數組，它不會進行深層拷貝。

```javascript
const nestedArray = [[1], [2]];
const copyArray = [...nestedArray];
copyArray[0].push(3);
console.log(nestedArray); // [[1, 3], [2]]
```
在這個例子中，`nestedArray` 也會被修改，因為擴展運算符只做了淺拷貝。

## 實際應用場景
### 1. 拆分字串為字符陣列

```javascript
const str = "hello";
const chars = [...str];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']
```
這個應用可以幫助我們輕鬆地將字串拆分為單個字符，類似於 `split('')`。

### 2. 數組去重

擴展運算符可以結合 `Set` 來輕鬆實現數組去重。
```javascript
const numbers = [1, 2, 3, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
```
這種結合方式讓去重操作變得簡單而優雅。

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1： 使用擴展運算符合併多個數組
```javascript
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergedArray = ?;
console.log(mergedArray); // 預期輸出：[1, 2, 3, 4, 5, 6]
```

### 挑戰 2: 使用擴展運算符將函數參數動態傳遞
```javascript
function multiply(a, b, c) {
  return a * b * c;
}
const nums = [2, 3, 4];
console.log(?); // 預期輸出：24
```

## 總結

今天我們深入探討了擴展運算符在 JavaScript 中的高級用法。記住，它不僅能展開數組，還可以用在函數參數、物件、甚至類數組對象中。學會善用擴展運算符，你的代碼會變得更加優雅。

明天我們將進入最後一天，總結現代 JavaScript 的最佳實踐，幫助你提升開發效率和代碼質量！