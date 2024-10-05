# 【Day 23】Nullish 合併運算符（??）的應用與實踐

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

今天來到了第 23 天！我們承接上一篇將繼續聚焦於 Nullish 合併運算符 (`??`)，這是一個強大且實用的運算符，可以解決 JavaScript 開發中常見的空值處理問題。你或許已經遇到過這樣的情況：當一個變數是 `null` 或 `undefined` 時，你想給它一個默認值，而不是用 `||` 來處理所有假值。那麼，今天的主角 `??` 就是你最好的朋友！

## Nullish 合併運算符 (`??`)

### 基本概念
`??` 是一個 ES2020 (ES11) 中引入的運算符，用來處理空值，也就是當一個變數的值是 `null` 或 `undefined` 時，我們可以提供一個默認值來代替。注意!!! 不同於 `||`，它不會將 `0`、`false`、`''` 等其他假值視為空值。

```javascript
let result = a ?? b;
```
當 `a` 是 `null` 或 `undefined` 時，`result` 會是 `b`。否則，`result` 就是 `a`。

### 用法範例
先來看看幾個簡單的例子，讓你瞬間掌握 `??` 的強大功能！

```javascript
let user;
let defaultUser = "Guest";

console.log(user ?? defaultUser); // 輸出: Guest

user = "Alice";
console.log(user ?? defaultUser); // 輸出: Alice
```
這個例子展示了如何在變數 `user` 為 `null` 或 `undefined` 時，使用默認值 `Guest`。

### 結合上一篇說到的 `?.` (可選鏈式操作符)將 `?.` 與 `??` 的結合使用

```javascript
const obj = {
    family: {
        name: null
    }
};

// 使用 ?. 檢查 family 是否存在，並使用 ?? 提供默認值
const familyName = obj.family?.name ?? "Jacky";

console.log(familyName);  // 輸出: "Jacky"
```

## Nullish 合併運算符 vs 邏輯 OR (`||`)
很多人會問：「這不就是 `||` 嗎？有什麼區別呢？」這是個很好的問題！

來看個例子：
```javascript
let count = 0;
console.log(count || 10);  // 輸出: 10
console.log(count ?? 10);  // 輸出: 0
```
在這裡，`||` 將 `0` 視為「假值」並返回 `10`，但 `??` 只會在變數是 `null` 或 `undefined` 時返回默認值，因此結果是 `0`。

這種行為使得 `??` 特別適合處理可能會是 `0`、`false`、`''` 等有效值的情況，而不會被誤當作「空值」。

## 實際應用範例
### 1. 表單輸入的處理
在處理表單時，我們經常需要給未填寫的輸入設置默認值。`??` 可以幫助我們輕鬆處理這些情況：

```javascript
let userInput = '';  // 用戶沒有輸入值
let defaultInput = 'default text';

console.log(userInput ?? defaultInput); // 輸出: ''
```
這裡 `userInput` 雖然是空字串，但我們不會將它當作空值，因此結果是 `''` 而不是 `default text`。如果你用的是 `||`，結果就會是 `default text` 了。

### 2. 配置文件的處理
當處理配置文件時，我們希望只在配置項沒有設置（即為 `null` 或 `undefined`）時才使用默認值，而不是覆蓋掉合法的值（如 `false` 或 `0`）。這裡也是 `??` 的完美用武之地：

```javascript
let config = {
    logging: false,
    retryLimit: 0
};

let shouldLog = config.logging ?? true;
let retryCount = config.retryLimit ?? 5;

console.log(shouldLog); // 輸出: false
console.log(retryCount); // 輸出: 0
```
使用 `??`，我們可以保留 `false` 和 `0` 這些合法值，而不是將它們當作「空值」來處理。

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1：使用 ?? 來處理空值
```javascript
let userName;
let defaultName = 'Anonymous';

console.log(?);  // 輸出: Anonymous

userName = 'John';
console.log(?);  // 輸出: John
```

### 挑戰 2：使用 `??` 保留 0、false 等合法值
```javascript
let userScore = 0;
let defaultScore = 10;

console.log(?);  // 輸出: 0
```

這個挑戰會幫助你理解 `??` 和 `||`的實際區別，讓你在處理不同數值時更加得心應手。

## 總結

今天我們深入了解了 Nullish 合併運算符 (`??`)，它幫助我們更加優雅地處理 `null` 和 `undefined`，避免了使用 `||` 時誤將合法值（如 `0`、`false`、`''`）覆蓋掉的情況。這個運算符的引入，讓我們在編寫更健壯的 JavaScript 代碼時，擁有了更好的工具。

希望今天的學習能讓你更加靈活應對空值處理問題！歡迎在討論區互動交流，明天我們將繼續探討 BigInt！