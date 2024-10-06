# 【Day 25】全局對象：globalThis

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

今天是第25天，讓我們來聊一個在 JavaScript 中非常有用但容易忽視的概念：`globalThis`。這個新特性從 ES2020 開始被引入，解決了跨環境中全局對象難以訪問的問題。`globalThis` 讓我們在不同的執行環境（如瀏覽器、Node.js、Web Workers）中，無需關心具體環境的全局對象名稱，統一地訪問全局範圍。

## 什麼是 `globalThis`？
JavaScript 中，`globalThis` 是一個指向全局對象的標準方式。

### 之前的問題
- 在瀏覽器中，全局對象是 `window`。
- 在 Node.js 中，全局對象是 `global`。
- 在 Web Workers 中，則是 `self`。

這種不一致讓開發者在處理不同環境的代碼時不得不寫出多餘的條件檢查。這是煩惱的一個來源，於是 `globalThis` 應運而生。

### 解決方案：`globalThis`
`globalThis` 提供了一個統一的方式來訪問全局對象，無論你身處哪個環境。這樣我們不需要再考慮具體的環境差異。

```javascript
console.log(globalThis); 
// 在瀏覽器中輸出 window，在 Node.js 中輸出 global
```

## `globalThis` 的應用場景
### 全局變量的訪問
在開發過程中，可能會遇到一些跨平台代碼需要同時在多個環境中運行。這時候，如果想要全局訪問一個變量，使用 `globalThis` 是最便捷的方式。

```javascript
globalThis.myGlobalValue = 'Hello, World!';
console.log(myGlobalValue); // 'Hello, World!'
```
這樣的寫法保證了無論代碼是在瀏覽器、Node.js 還是 Web Workers 中，都可以一致地訪問到全局變量。

### 使用 `globalThis` 替換傳統的全局對象
有時我們想寫出兼容多環境的代碼，而不想針對不同環境逐一設置全局變量。我們可以直接使用 globalThis，這樣不必擔心環境差異。

```javascript
function sayHello() {
    globalThis.console.log('Hello from anywhere!');
}

sayHello(); // 在任何環境下都可以使用
```
這段代碼在瀏覽器、Node.js 或其他環境下都能執行，並且訪問到正確的全局 `console` 方法。

## `globalThis` 的實際應用
### 簡化跨平台代碼
在編寫可在多個 JavaScript 執行環境中運行的代碼時，使用 globalThis 來避免環境差異的處理。

```javascript
(function() {
    globalThis.myUtility = function() {
        console.log('This utility is available globally!');
    };
})();

myUtility(); // 任何環境下都可以調用這個方法
```
這段代碼直接使用了 `globalThis`，避免了在不同環境中手動判斷並設置全局對象的麻煩。

## 減少依賴環境特定代碼
比如在 Node.js 和瀏覽器環境中，我們可能需要分別使用 `window` 或 `global` 訪問全局對象。`globalThis` 解決了這個問題。

```javascript
function getGlobal() {
    return globalThis;
}

console.log(getGlobal()); // 根據不同環境返回相應的全局對象
```
這樣，我們可以確保不管在哪裡運行代碼，都能取得全局對象。

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1：使用 `globalThis` 在瀏覽器和 Node.js 中共享變量
```javascript
// 創建一個全局變量
? = 'This is shared!';

// 訪問這個變量
console.log(globalThis.sharedVar); // 輸出: 'This is shared!' 在任何環境中運行
```

### 挑戰 2：使用 `globalThis` 設計一個跨環境的實用工具
```javascript
(function() {
    ? = function(message) {
        ?(`Log: ${message}`);
    };
})();

myLogger('Cross-platform logging'); // 輸出: 'Log: Cross-platform logging'
```

## 總結

`globalThis` 是 JavaScript 中一個相當實用的特性，尤其在需要跨平台、跨環境開發時。它讓我們的代碼變得更加一致和簡潔，避免了許多繁瑣的環境判斷。希望你在今天的學習中能掌握這個有趣的全局對象！

歡迎在討論區與我互動，我們將在下一篇探討高階函數的應用。