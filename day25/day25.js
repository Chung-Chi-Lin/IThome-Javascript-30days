// === day24 自我挑戰 ===

// 1. 創建一個 BigInt 並進行基本運算(因為數字較長直接提供範例)
const bigInt1 = 100000000000000000000n;
const bigInt2 = 200000000000000000000n;

console.log(bigInt1 + bigInt2); // 預期輸出：300000000000000000000n
console.log(bigInt1 * bigInt2); // 預期輸出：20000000000000000000000000000000000000000n

// 2. 嘗試混合使用 BigInt 和 Number 並解決錯誤
const bigIntValue = 100n;
const numberValue = 50;

try {
    console.log(bigIntValue + numberValue); // 這會拋出錯誤
} catch (e) {
    console.error("錯誤:", e.message);
}

// 解決方案：顯式轉換 Number 為 BigInt
const correctResult = bigIntValue + BigInt(numberValue);
console.log(correctResult); // 預期輸出：150n
