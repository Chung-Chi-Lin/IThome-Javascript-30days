console.log("Hello World!");

// === day30 自我挑戰 ===

// 1. 優化一段代碼
// 以下代碼存在性能問題，請進行優化
function processItems(items) {
    for (let i = 0; i < items.length; i++) {
        console.log(items.length); // 每次都計算 items.length
    }
}

// 回答:
function processItems(items) {
    const len = items.length; // 緩存 items.length
    for (let i = 0; i < len; i++) {
        console.log(len); // 避免重複計算 items.length
    }
}