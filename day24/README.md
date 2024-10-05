# 【Day 24】BigInt 的基礎與應用

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

在今天的挑戰中，我們將介紹 `BigInt`，這是 JavaScript 在 ES2020 引入的一種新型數據類型。BigInt 的出現解決了 JavaScript 內建 `Number`類型無法準確表示超大整數的問題。它允許我們安全地處理比 `Number` 類型最大值（即 2^53 - 1）還要大的整數。

簡單來說，如果你要處理超過 JavaScript 內建數字類型所能處理的數字，BigInt 就是你的最佳夥伴！

## BigInt 的基礎知識
首先我們要先了解在 JavaScript 中，Number 類型使用的是 64 位浮點數（IEEE 754標準），這意味著它可以精確表示的整數範圍有限。具體來說，JavaScript 的 `Number` 類型可以安全地表示的整數範圍是：

`-(2^53 - 1)` 到 `2^53 - 1`，也就是 -9007199254740991 到 9007199254740991。
超過這個範圍的數字將會 失去精度，這就意味著 JavaScript 無法準確表示大於這個範圍的數字。舉個例子:

```javascript
console.log(9007199254740991); // 正常顯示: 9007199254740991
console.log(9007199254740992); // 問題出現: 9007199254740992 正確應該顯示但會丟失精度
console.log(9007199254740993); // 錯誤顯示: 9007199254740992，這是個精度問題
```

### 如何創建 BigInt？
創建 BigInt 有兩種主要方式：
1. 在數字後面加 `n` 字母來創建一個 BigInt。
2. 使用 `BigInt()` 函數將數字轉換為 BigInt。

```javascript
// 方式 1: 在數字後加 "n"
const bigInt1 = 1234567890123456789012345678901234567890n;
console.log(bigInt1); // 1234567890123456789012345678901234567890n

// 方式 2: 使用 BigInt() 函數
const bigInt2 = BigInt("1234567890123456789012345678901234567890");
console.log(bigInt2); // 1234567890123456789012345678901234567890n
```

## BigInt 的應用
### BigInt 的特性
- 精度：BigInt 可以表示非常大的整數而不會損失精度。
- 數學運算：BigInt 支持數學運算，但不能與 `Number` 混合運算。

```javascript
const bigInt1 = 100000000000000000000n;
const bigInt2 = 200000000000000000000n;

const result = bigInt1 + bigInt2;
console.log(result); // 300000000000000000000n
```

### BigInt 與 Number 不能混合運算
雖然 BigInt 和 Number 都是數值類型，但它們不能直接進行混合運算。如果這麼做，JavaScript 會拋出一個錯誤：

```javascript
const bigIntValue = 100n;
const numberValue = 20;

try {
    console.log(bigIntValue + numberValue); // 這會拋出錯誤
} catch (e) {
    console.error(e.message); // Cannot mix BigInt and other types
}
```

要解決這個問題，你需要顯式地轉換數據類型。例如，將 Number 轉換為 BigInt：
```javascript
const result = bigIntValue + BigInt(numberValue);
console.log(result); // 120n
```

## BigInt 的運算
### BigInt 支持的運算符
BigInt 支持 JavaScript 中常見的數學運算符，包括：
- 加法 `+`
- 減法 `-`
- 乘法 `*`
- 除法 `/`（會返回整數）
- 餘數 `%`

```javascript
const bigInt1 = 50n;
const bigInt2 = 3n;

console.log(bigInt1 + bigInt2); // 53n
console.log(bigInt1 - bigInt2); // 47n
console.log(bigInt1 * bigInt2); // 150n
console.log(bigInt1 / bigInt2); // 16n （注意：BigInt 的除法會向下取整）
console.log(bigInt1 % bigInt2); // 2n
```

## BigInt 的應用場景
### 1. 大數據運算
當需要處理超大數字（例如科學計算、加密算法等），BigInt 是你的好幫手。以前，如果我們需要精確計算 64 位整數或更大的數字，我們必須依賴第三方庫。現在有了 BigInt，這些運算可以直接在原生 JavaScript 中進行。

### 2. 精確度要求極高的金融計算
在處理金融系統時，我們經常需要處理精度非常高的數字。BigInt 可以幫助解決這一問題，避免由於精度丟失而出現的錯誤計算。

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1：創建一個 BigInt 並進行基本運算(因為數字較長直接提供範例)
```javascript
const bigInt1 = 100000000000000000000n;
const bigInt2 = 200000000000000000000n;

console.log(bigInt1 + bigInt2); // 預期輸出：300000000000000000000n
console.log(bigInt1 * bigInt2); // 預期輸出：20000000000000000000000000000000000000000n
```

### 挑戰 2：嘗試混合使用 BigInt 和 Number 並解決錯誤
```javascript
const bigIntValue = 100n;
const numberValue = 50;

try {
    console.log(bigIntValue + numberValue); // 這會拋出錯誤
} catch (e) {
    console.error("錯誤:", e.message);
}

// 解決方案：顯式轉換 Number 為 BigInt
const correctResult = ?;
console.log(correctResult); // 預期輸出：150n
```


## 總結

今天我們介紹了 BigInt，雖然在一般常見的狀況不常見但是它在處理大數據、科學計算和金融運算中發揮著關鍵作用。我們也了解了 BigInt 與 Number 的區別以及它們的運算規則。BigInt 雖然是個新手，但它將會在未來的 JavaScript 應用中越來越常見。

明天我們將繼續探討 JavaScript 中其他有趣且實用的特性！