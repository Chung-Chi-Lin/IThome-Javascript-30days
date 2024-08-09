// === day7 自我挑戰 ===

// 1. 使用 Array 的新方法從類似數組的對象創建真正的數組
function convertToArray(arrayLike) {
	// 在這裡使用 Array.from() 將類似數組的對象轉換為真正的數組
	return Array.from(arrayLike);
}

const nodeList = document.querySelectorAll('div');
const arrayFromNodeList = convertToArray(nodeList);
console.log(arrayFromNodeList); // 預期輸出：一個包含所有 div 元素的數組

// 2.使用 String 的新方法檢查字串前綴和後綴
function checkStringEdges(str) {
	// 使用 String.startsWith() 和 String.endsWith() 檢查字串
	// 注意這裡的 大小寫、符號也要匹配才會回傳。 再開發時如果不去特別判斷大小寫，也可以將字串統一轉大寫等方法
	return str.startsWith('JavaScript') && str.endsWith('great!');
}

const example = 'JavaScript is great!';
console.log(checkStringEdges(example)); // 預期輸出：取決於邊界條件
