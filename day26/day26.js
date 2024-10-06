// === day25 自我挑戰 ===

// 1. 使用 `globalThis` 在瀏覽器和 Node.js 中共享變量
// 創建一個全局變量
globalThis.sharedVar = 'This is shared!';

// 訪問這個變量
console.log(globalThis.sharedVar); // 輸出: 'This is shared!' 在任何環境中運行

// 2. 使用 `globalThis` 設計一個跨環境的實用工具
(function() {
    globalThis.myLogger = function(message) {
        globalThis.console.log(`Log: ${message}`);
    };
})();

myLogger('Cross-platform logging'); // 輸出: 'Log: Cross-platform logging'