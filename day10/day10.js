// === day9 自我挑戰 ===

// 1. 使用 Math 方法計算金融投資回報
// 使用 Math.pow() 方法計算本金成長過年數後的增加倍數
function calculateInvestmentReturn(initialInvestment, annualRate, years) {
	// 公式：最終金額 = 初始投資 * (1 + 年利率)^年數
	return initialInvestment * Math.pow(1 + annualRate, years);
}

const investmentReturn = calculateInvestmentReturn(1000, 0.05, 10);
console.log(`投資回報：${investmentReturn.toFixed(2)}`); // 預期輸出：依計算結果而定

// 2.使用 Math 方法進行科學計算
function calculateCircleArea(radius) {
	// 公式：面積 = π * 半徑^2
	return Math.pow(radius, 2) * Math.PI;
}

// 調用函數並計算半徑為 7 的圓的面積
const area = calculateCircleArea(7);
// 輸出結果，使用 toFixed(2) 來格式化顯示小數點後兩位
console.log(`圓面積：${area.toFixed(2)}`); // 預期輸出：153.94


// 本次練習因為包含一些公式，再實戰中如果不清楚是不要緊的查究對了~但是必須知道一些 Math 方法後就會有更多的實作方式哦!
