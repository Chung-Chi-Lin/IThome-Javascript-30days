# 【Day 19】Set 和 WeakSet 的深入教學

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

在第十九天，我們將深入探討 JavaScript 中的兩個重要集合類型：`Set` 和 `WeakSet`。這兩個集合對象在處理唯一值和回收方面發揮了非常重要的作用。

Set 是我在實戰中有時候會到的方法，想像圖書館中將書本放在對應的位置，再資料查找就會更快準確!

## Set 的基本概念和用法

### Set 的概念

`Set` 是一種無序且唯一的集合，專門用於存儲唯一值。這意味著在 `Set` 中，無論插入了多少次相同的值，它只會存儲一次。

### Set 的基本操作

```javascript
// 創建一個新的 Set
const mySet = new Set();

// 添加元素到 Set 中
mySet.add(1);  // 添加數字 1
mySet.add(2);  // 添加數字 2
mySet.add(1);  // 試圖再次添加 1，但 Set 會自動忽略重複的值

console.log(mySet); // 輸出: Set(2) { 1, 2 }
```
### Set 常見方法
- add(value)：將值添加到集合中。
- delete(value)：從集合中刪除指定的值。
- has(value)：檢查集合中是否存在某個值。
- clear()：清空整個集合。

```javascript
// 檢查 Set 中是否有某個值
console.log(mySet.has(1));  // true
console.log(mySet.has(3));  // false

// 刪除 Set 中的值
mySet.delete(2);
console.log(mySet);  // Set(1) { 1 }

// 清空 Set
mySet.clear();
console.log(mySet);  // Set(0) {}
```
### Set 的遍歷
`Set` 支持 `for...of` 迴圈進行遍歷，並且其值會按照插入的順序返回。
```javascript
const fruitSet = new Set(['apple', 'banana', 'cherry']);

// 使用 for...of 迴圈遍歷 Set
for (const fruit of fruitSet) {
  console.log(fruit);
}
// 輸出:
// apple
// banana
// cherry
```
## WeakSet 的基本概念和用法
### WeakSet 的概念
`WeakSet` 是一種特殊的集合，只能存儲對象，並且它對象的引用是「弱引用」。這意味著如果某個對象在其他地方沒有被引用，它會被自動垃圾回收，不會影響到內存的釋放。

### WeakSet 的基本操作
```javascript
// 創建 WeakSet
const weakSet = new WeakSet();

let obj1 = { name: 'Object 1' };
let obj2 = { name: 'Object 2' };

// 將對象添加到 WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1));  // true

// 如果對象被回收，WeakSet 也不會保留該對象
obj1 = null;  // obj1 不再被引用

// 無法遍歷 WeakSet，因為其對象是弱引用且不會保留對象的引用
```
### WeakSet 和 Set 的區別
1. WeakSet 只能存儲對象，而 Set 可以存儲任何類型的值。
2. WeakSet 是不可遍歷的，因為它的對象可能會被回收。
3. WeakSet 不會阻止垃圾回收，而 Set 會阻止對象被回收。

## Set 和 WeakSet 的應用場景
### Set 的應用場景
`Set` 非常適合用於處理不允許重複的數據集。例如，統計唯一的用戶 ID 或篩選出不重複的值。
```javascript
// 計算唯一值的例子
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);
console.log([...uniqueNumbers]);  // [1, 2, 3, 4, 5]
```

### WeakSet 的應用場景
`WeakSet`  最適合存儲只需要弱引用的對象，比如當你需要監控某些對象的存在與否，但不希望這些對象阻止垃圾回收的情況。
```javascript
// 監控對象是否已經被回收
const objectTracker = new WeakSet();

let userSession = { userId: '123' };
objectTracker.add(userSession);

userSession = null;  // 這裡對象會被回收，WeakSet 也不會保留該引用
```

## 實際應用範例
## 使用 Set 記錄唯一訪問者 ID
```javascript
const visitorIDs = new Set();

function recordVisit(id) {
  if (!visitorIDs.has(id)) {
    visitorIDs.add(id);
    console.log(`新訪客: ${id}`);
  } else {
    console.log(`重複訪問: ${id}`);
  }
}

recordVisit(101);  // 新訪客: 101
recordVisit(102);  // 新訪客: 102
recordVisit(101);  // 重複訪問: 101
```

## 使用 WeakSet 追蹤臨時對象
```javascript
const tempObjects = new WeakSet();

function addObject(obj) {
	tempObjects.add(obj);
	console.log('對象已加入追蹤');
}

let obj = { key: 'value' };
addObject(obj);

obj = null;  // 對象被回收，WeakSet 中也不再保留此對象
```

## 本篇自我挑戰
### 挑戰 1：使用 Set 檢查數組中的重複值
```javascript
function hasDuplicates(arr) {
	?
}

const arr = [1, 2, 3, 4, 5, 5];
console.log(hasDuplicates(arr));  // true
```

### 挑戰 2：使用 WeakSet 追蹤 DOM 節點
```javascript
const trackedElements = ?

function trackElement(element) {
	?
}

let div = document.createElement('div');
trackElement(div);

div = null;  // div 節點被回收，WeakSet 中也不再保留
```

## 總結

在第十九天的學習中，我們深入探討了 `Set` 和 `WeakSet` 的概念和用法。這兩個集合類型各有其應用場景，`Set` 更適合處理不重複數據，而 `WeakSet` 則是處理短期存在的對象。

歡迎在討論區互動交流，明天我們將深入探討 `Map` 和 `WeakMap` 的更多功能！
