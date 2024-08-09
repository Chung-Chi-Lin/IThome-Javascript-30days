# 【Day 8】Number 和 Object 的新方法

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

在第八天，我們將探討 ES6 中為 `Number` 和 `Object` 添加的新方法，這些方法旨在提高數據處理的效率和便捷性。
在本篇因為 Number、Object 涵蓋很多種方法所以今天會注重在面對某些狀況該如何處理的教學。
## Number 常見的開發狀況和處理方法

### 處理浮點數精度問題：
- 浮點數運算常常會出現精度問題，如 0.1 + 0.2 !== 0.3。在這種情況下，可以利用 Number.EPSILON 來處理比較：

```javascript
function areNumbersClose(a, b, epsilon = Number.EPSILON) {
	return Math.abs(a - b) < epsilon;
}
console.log(areNumbersClose(0.1 + 0.2, 0.3)); // true
```

### 檢查數字的整數性：
- 判斷一個值是否為整數可以使用 Number.isInteger()，這在處理只需要整數的邏輯時特別有用：

```javascript
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.3)); // false
```

### 安全地處理大數字：
JavaScript 中的 Number 是基於 IEEE 754 標準的雙精度 64 位二進制格式。當處理超出這個範圍的數字時，可以使用 BigInt：

```javascript
const hugeNumber = BigInt(2**53) + 1n;
console.log(hugeNumber); // 9007199254740993n
```

## Object 常見的開發狀況和處理方法
### 深拷貝與淺拷貝：
- 在處理對象時，經常需要對對象進行拷貝。Object.assign() 僅能進行淺拷貝。對於深拷貝，可以使用 JSON 方法或者其他庫如 Lodash 的 _.cloneDeep()：
- **基本概念**：此方法用於將所有可枚舉屬性的值從一個或多個源對象複製到目標對象。

```javascript
const obj = { a: { b: 1 } };
const shallowCopy = Object.assign({}, obj);
const deepCopy = JSON.parse(JSON.stringify(obj));

obj.a.b = 2;
console.log(shallowCopy.a.b); // 2
console.log(deepCopy.a.b); // 1
```
### 動態屬性名：
- ES6 引入了計算屬性名，這對於動態設置或訪問對象屬性非常有用：

```javascript
const dynamicKey = 'color';
const car = {
	[dynamicKey]: 'blue',
	model: 'Ford'
};
console.log(car.color); // blue
```

### 擴展對象屬性和方法：
- 利用 Object.defineProperty() 可以精細控制對象屬性的行為，如讀寫權限、可枚舉性等：

```javascript
Object.defineProperty(car, 'year', {
	value: 2020,
	writable: false,
	enumerable: true
});
car.year = 2021; // 不會改變
console.log(car.year); // 2020
```

### 封裝和私有屬性：
- 使用 Symbol 或者閉包來實現對象的私有屬性，以防止外部代碼直接訪問或修改：

```javascript
const privateProperty = Symbol('private');
const myObject = {
	[privateProperty]: 'Secret',
	publicProperty: 'Visible'
};
console.log(myObject[privateProperty]); // 'Secret'
```

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1: 嘗試搜尋 Number 如何將字串轉換為浮點數
### 挑戰 2: 嘗試搜尋 Object 如何凍結物件使其不被修改

## 總結

第八天介紹了 Number 和 Object 的幾個重要新方法，這些工具有助於處理數字和對象，並提供了比之前版本更安全、更便捷的操作方式。這些方法使得數據操作更為直觀，減少了錯誤的發生率並優化了代碼的可讀性。

明天我們將繼續探討 ES6 中的 Math 新方法，敬請期待！
