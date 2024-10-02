# 【Day 21】生成器與進階應用

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

在第二十一天，我們將探討 JavaScript 中非常強大且靈活的特性——生成器 (Generators)。生成器允許函數在執行過程中暫停和恢復，這使其成為處理異步操作和複雜流程控制的理想選擇。

## 生成器的基礎

### 基本語法

生成器函數是使用 `function*` 定義的，並且在函數內部使用 `yield` 關鍵字來暫停函數的執行。

```javascript
// 定義一個生成器函數，生成器函數會在每次遇到 yield 時暫停
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// 創建生成器對象
const gen = simpleGenerator();

// 每次調用 next() 方法，生成器會返回一個 { value, done } 對象
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```
在這個例子中，生成器函數 `simpleGenerator` 在每次遇到 `yield` 關鍵字時都會暫停執行，並且返回 `yield` 的值。當生成器函數執行完畢後，它會返回 `{ value: undefined, done: true }`。

### 使用 for...of 迴圈遍歷生成器
生成器對象也可以使用 `for...of` 迴圈進行遍歷。

```javascript
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

for (const value of simpleGenerator()) {
    console.log(value); // 依次輸出 1, 2, 3
}
```

## 進階應用
### 生成器處理異步流程
生成器可以通過與 `Promise` 搭配使用來處理異步操作。這樣可以讓代碼更加直觀，類似於 `a`sync/await` 的效果。

```javascript
function* asyncTask() {
    const data1 = yield fetch('https://api.example.com/data1');
    console.log('Data 1:', data1);

    const data2 = yield fetch('https://api.example.com/data2');
    console.log('Data 2:', data2);
}

// 實現一個簡單的執行器，協調 Promise 和生成器
function execute(generator) {
    const gen = generator();

    function handleResult(result) {
        if (result.done) return;
        result.value.then(res => res.json()).then(data => handleResult(gen.next(data)));
    }

    handleResult(gen.next());
}

execute(asyncTask);
```
這個例子展示了如何使用生成器來控制異步流程。雖然 `async/await` 是處理異步代碼的標準，但這種生成器的應用展示了生成器的靈活性和強大功能。

### 生成器與迭代器結合
生成器本質上是一個迭代器，因此可以用來生成序列數據。這在需要生成大量數據時非常實用。

```javascript
function* fibonacci(limit) {
    let [prev, curr] = [0, 1];
    while (limit--) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

// 使用生成器生成前 10 個 Fibonacci 數字
for (const num of fibonacci(10)) {
    console.log(num); // 依次輸出 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
}

```
在這裡，我們使用生成器實現了一個 Fibonacci 數列，通過 `for...of` 迴圈來依次取出數列中的值。

## 實際應用範例
### 控制異步流程
生成器可以用來模擬 `async/await` 的行為，特別是在需要逐步執行異步操作時非常有用。

```javascript
function* loadData() {
    const userData = yield fetch('https://api.example.com/user');
    console.log('User Data:', userData);

    const posts = yield fetch(`https://api.example.com/user/${userData.id}/posts`);
    console.log('User Posts:', posts);
}

// 這個執行器將協調 Promise 和生成器
function run(generator) {
    const gen = generator();

    function nextStep(result) {
        if (result.done) return;
        result.value.then(res => res.json()).then(data => nextStep(gen.next(data)));
    }

    nextStep(gen.next());
}

run(loadData);
```

### 生成器與無限序列
生成器非常適合生成無限序列，這是常規函數無法做到的。
```javascript
function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const seq = infiniteSequence();
console.log(seq.next().value); // 0
console.log(seq.next().value); // 1
console.log(seq.next().value); // 2
```

## 本篇自我挑戰
何謂自我挑戰，問題不怕困難，重點是要解決出問題的人(誤，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致! 回答我都會放在隔天的 GitHub 上哦!

### 挑戰 1：創建一個生成器來產生一個有限的數字序列
```javascript
function* numberSequence(limit) {
    ?
}

const sequence = numberSequence(5);
for (const num of sequence) {
    console.log(num); // 依次輸出 1, 2, 3, 4, 5
}
```

### 挑戰 2：使用生成器處理異步操作，模擬多個 API 請求
```javascript
function* fetchMultipleData() {
	?
}

function execute(generator) {
    const gen = generator();

    function handleResult(result) {
        if (result.done) return result.value;
        result.value.then(res => res.json()).then(data => handleResult(gen.next(data)));
    }

    return handleResult(gen.next());
}

execute(fetchMultipleData);
```

## 總結

在第二十一天的學習中，我們深入探討了生成器及其應用。生成器提供了一種強大的工具來控制代碼的執行流程，特別是在處理異步操作或大量數據生成時。掌握生成器能幫助你更靈活地編寫 JavaScript 代碼。

歡迎在討論區互動交流，明天我們將繼續探討 可選鏈式操作符！