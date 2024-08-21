# 【Day 9】Math 的新方法

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

在第九天，我們將探討 ES6 中引入的一些新的 Math 方法。這些方法增強了 JavaScript 在數學計算方面的能力，使得處理數學問題更為直接和高效。

## Math 的新方法

### Math.trunc()、Math.floor()、Math.ceil()
1. `Math.trunc()`: 
- 直接移除小數部分，只保留整數部分。這意味著對於正數和負數，它只截斷小數點後的數字，不進行任何四捨五入或進位。
```javascript
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4
```
2. `Math.floor()`: 
- 對正數，Math.floor() 與 Math.trunc() 行為相同，都是截斷小數部分。
- 對負數，Math.floor() 則會取比實際值更小的最接近整數，即向下取整。
```javascript
console.log(Math.floor(4.3)); // 4
console.log(Math.floor(4.3)); // 5
```
3. `Math.ceil()`: 
- 對正數，Math.ceil() 向上取整，如果有小數則進位到下一個整數。
- 對負數，Math.ceil() 則將小數部分簡單移除，這與 Math.trunc() 對負數的行為相同。
```javascript
console.log(Math.ceil(4.3)); // 5
console.log(Math.ceil(-4.3)); // -4
```

### Math.sign()
- **基本概念**：`Math.sign()` 方法用來判斷一個數字是正數、負數還是零，它返回 1（正數）、-1（負數）、0（零）、-0（-0）、NaN（非數值）。

```javascript
console.log(Math.sign(5)); // 1
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0
console.log(Math.sign('hello')); // NaN
```
### Math.pow()
- **基本概念**：`Math.pow()` 方法返回基數（base）的指數（exponent）次冪。

```javascript
console.log(Math.pow(7, 2)); // 49
console.log(Math.pow(4, 0.5)); // 2 (平方根)

// 補充:當指數是負數時，結果是基數的倒數的正數次冪。
console.log(Math.pow(4, -2)); //  等於 1 / (4 × 4) = 0.0625。
```
### Math.sqrt()
- **基本概念**：`Math.sqrt()` 方法返回一個數的平方根。

```javascript
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(25)); // 5
```
## 實際應用範例
### 使用 Math.trunc() 和 Math.sign() 進行數值格式化和判斷
- 場景描述：在金融應用中，我們需要格式化顯示金額時，常常需要將小數點後數值截斷，並判斷金額的正負。
```javascript
const amount = 1234.56;
console.log(`金額整數部分：${Math.trunc(amount)}`); // 金額整數部分：1234
console.log(`金額正負判斷：${Math.sign(amount) > 0 ? '正' : '負'}`); // 金額正負判斷：正
```

### 使用 Math.pow() 和 Math.sqrt() 進行科學計算
- 場景描述：在科學和工程計算中，我們經常需要進行冪次運算和開方運算。
```javascript
const area = Math.pow(5, 2) * Math.PI; // 圓面積計算
console.log(`圓面積：${area.toFixed(2)}`); // toFixed(取小數點幾位)並無條件進位。圓面積：78.54

const resistance = Math.sqrt(144); // 電阻計算，假設平方和為144
console.log(`電阻：${resistance}`); // 電阻：12
```

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1: 使用 Math 方法計算金融投資回報
```javascript
function calculateInvestmentReturn(initialInvestment, annualRate, years) {
    return 
}

const investmentReturn = calculateInvestmentReturn(1000, 0.05, 10);
console.log(`投資回報：${investmentReturn.toFixed(2)}`); // 預期輸出：依計算結果而定
```
### 挑戰 2: 使用 Math 方法進行科學計算
```javascript
function calculateCircleArea(radius) {
	return
}

const area = calculateCircleArea(7);
console.log(`圓面積：${area.toFixed(2)}`); // 預期輸出：153.94
```

## 總結

在第九天的學習中，我們探討了 Math 對象的新方法，雖然看似不常使用到，但對於需要 數據運算的公司 或是 css 計算範圍，這些方法在處理數學運算時提供了更

多的靈活性和直接性。掌握這些方法對於提升開發效率和應對複雜的計算需求非常有幫助。

歡迎在討論區互動交流，我們將在下一篇探討關於數據處理的主題！
