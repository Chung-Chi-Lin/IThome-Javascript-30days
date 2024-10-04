// === day20 自我挑戰 ===

// 1. 使用 Map 實現一個用戶數據儲存系統
const users = new Map();

function addUser(id, name, age) {
	users.set(id, { name, age });
}

function getUser(id) {
	return users.get(id);
}

addUser(1, 'Alice', 25);
addUser(2, 'Bob', 30);

console.log(getUser(1));  // { name: 'Alice', age: 25 }

// 一旦 userObj 不再被引用，WeakMap 中的資料會自動被回收
userObj = null;

// 2. 使用 WeakMap 追蹤對象的臨時資料
const metadata = new WeakMap();

function addMetadata(obj, data) {
	metadata.set(obj, data);
}

let userObj = { id: 1 };
addMetadata(userObj, { role: 'admin' });

console.log(metadata.get(userObj));  // { role: 'admin' }

// 一旦 userObj 不再被引用，WeakMap 中的資料會自動被回收
userObj = null;
