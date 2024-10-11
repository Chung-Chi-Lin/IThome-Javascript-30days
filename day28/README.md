# 【Day 28】進階正則表達式技巧

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

歡迎來到第 28 天！今天我們要來聊聊正則表達式（Regular Expression，簡稱 regex）。這是一個強大的工具，雖然初學時可能有點像外星語，但學會它後會讓你處理字串變得輕而易舉！今天，我們會探討一些進階技巧，讓你輕鬆處理各種複雜的文本匹配問題。

想像一下：你在大量文本中尋找一個特定的模式，或想驗證一個電子郵件地址、電話號碼、郵政編碼。這些需求都可以用正則表達式解決。放心，今天的內容不會讓你抓狂，跟著我一起走進這個神奇的工具吧！

## 基礎複習
在進入進階內容之前，讓我們簡單回顧一下正則表達式的基本用法。正則表達式是一種匹配字串模式的工具，它可以幫助我們找到特定的字符組合、替換文本或者進行字串拆分。

### 基本正則表達式
```javascript
const regex = /hello/;
const str = "hello world";
console.log(regex.test(str)); // true
```
在這個例子中，我們定義了一個 `regex` 模式來匹配字串 "hello"。`test()` 方法返回一個布林值，表示字串是否符合模式。

## 進階正則表達式技巧
今天的目標是進一步探討一些高級技巧，這些技巧將幫助你解決更複雜的文本處理需求。

### 1. 捕獲組（Capture Groups）
捕獲組是正則表達式中的重要特性，讓你可以提取出匹配的特定部分。

```javascript
const regex = /(\d{3})-(\d{3})-(\d{4})/;
const str = "Phone: 123-456-7890";
const match = regex.exec(str);
console.log(match[0]); // 123-456-7890
console.log(match[1]); // 123
console.log(match[2]); // 456
console.log(match[3]); // 7890
```
這裡的 `(\d{3})` 用於捕捉三個連續的數字，通過捕獲組，我們可以輕鬆提取出每段匹配到的內容。`exec()` 方法返回一個陣列，第一個元素是整個匹配的結果，後面的元素是每個捕獲組的內容。

### 2. 非捕獲組（Non-Capturing Groups）

如果你只想要匹配而不需要捕捉內容，那麼可以使用 `(?:)` 創建非捕獲組。

### 示例：處理異步操作中的錯誤
```javascript
const regex = /(?:\d{3})-(\d{3})-(\d{4})/;
const str = "Phone: 123-456-7890";
const match = regex.exec(str);
console.log(match[1]); // 456
```
這個正則表達式和前一個類似，但 `(?:\d{3})` 是一個非捕獲組，所以結果中不會包含第一段數字。

### 3. 斷言（Assertions）

斷言是一種很強大的正則技巧，它允許你定義一個條件來控制匹配的位置，而不會實際匹配該內容。

**正向斷言（Lookahead）**
正向斷言允許你匹配某個條件出現在某個位置之前。
```javascript
const regex = /\d+(?= dollars)/;
const str = "I have 100 dollars";
const match = regex.exec(str);
console.log(match[0]); // 100
```
這裡的 `(?= dollars)` 表示只匹配後面跟著 "dollars" 的數字，但實際上不會匹配 "dollars"。

**負向斷言（Negative Lookahead）**
負向斷言則匹配某個條件不出現在某個位置之前。
```javascript
const regex = /\d+(?! dollars)/;
const str = "I have 100 euros";
const match = regex.exec(str);
console.log(match[0]); // 100
```
這裡的 `(?! dollars)` 表示只匹配後面沒有跟著 "dollars" 的數字。

### 4. 動態正則（Dynamic Regex）

有時你可能需要根據變數來創建正則表達式，這時可以使用 `RegExp` 構造函數。

### 示例：處理異步操作中的錯誤
```javascript
const word = "hello";
const regex = new RegExp(word, "i"); // 創建一個不區分大小寫的正則
const str = "Hello world";
console.log(regex.test(str)); // true
```
這樣我們可以根據變數來動態生成正則表達式，這在處理動態數據時非常有用。

## 實際應用場景
### 1. 驗證電子郵件地址
電子郵件地址的格式非常複雜，但我們可以用正則表達式來驗證一個基本的電子郵件格式。
```javascript
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = "test@example.com";
console.log(emailRegex.test(email)); // true
```
這個正則表達式可以檢查一個字串是否是有效的電子郵件地址。

### 2. URL 匹配
匹配 URL 也是一個常見需求。這裡是一個基本的 URL 匹配模式：
```javascript
const urlRegex = /https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,}/;
const url = "https://www.example.com";
console.log(urlRegex.test(url)); // true
```
這裡的 https? 允許匹配 http 或 https，後面的部分匹配域名和 TLD。

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1： 使用捕獲組匹配日期格式
```javascript
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
const date = "2024-09-19";
const match = dateRegex.exec(date);
console.log(`年: ${match[1]}, 月: ${match[2]}, 日: ${match[3]}`);
// 預期輸出: 年: 2024, 月: 09, 日: 19
```

### 挑戰 2: 使用正向斷言匹配特定單字
```javascript
const regex = /\d+(?= kg)/;
const weight = "重量: 50 kg";
const match = regex.exec(weight);
console.log(`匹配到的重量: ${match[0]}`);
// 預期輸出: 匹配到的重量: 50
```

## 總結

今天我們深入探討了正則表達式的進階技巧，包括捕獲組、斷言和動態正則等。這些技巧讓你在處理文本時更加靈活和高效。雖然正則表達式可能看起來像一堆難懂的符號，但掌握它後，處理字串簡直就是一片蛋糕！

明天我們將探討擴展運算符的高級用法，別錯過！