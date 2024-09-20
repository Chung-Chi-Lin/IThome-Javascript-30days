// === day19 自我挑戰 ===

// 1. 使用 Set 檢查數組中的重複值
function hasDuplicates(arr) {
	const set = new Set(arr);
	return set.size !== arr.length;
}

const arr = [1, 2, 3, 4, 5, 5];
console.log(hasDuplicates(arr));  // true

// 2. 使用 WeakSet 追蹤 DOM 節點
const trackedElements = new WeakSet();

function trackElement(element) {
	trackedElements.add(element);
	console.log('Element tracked');
}

let div = document.createElement('div');
trackElement(div);

div = null; // div 節點被回收，WeakSet 中也不再保留
