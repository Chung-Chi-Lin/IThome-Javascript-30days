# 【Day 22】可選鏈式操作符（Optional Chaining）

## 聯繫我

如果有任何問題或建議，歡迎隨時聯繫我：

- [GitHub](https://github.com/Chung-Chi-Lin)
- [Email](mailto:z0925955648@gmail.com)

## 介紹

歡迎來到第 22 天！越接近文章結束日越精彩越實用！來來來~今天我們要聊的是 ES2020 引入的一個極其方便的語法——可選鏈式操作符（Optional Chaining）。這個操作符可以幫助我們優雅地解決 JavaScript 中常見的「無法讀取未定義的屬性」錯誤（`Cannot read property of undefined`）。這個工具能讓我們的代碼看起來更乾淨、更健壯。

你有沒有遇過這種情況？你想要訪問一個深層嵌套的物件屬性，結果中途某個屬性是 `undefined`，導致整個訪問失敗，或是 `Dom` 上進行判斷時會發現因為取不到值而出錯，
甚至直接讓你的代碼崩潰。可選鏈式操作符就是為了這種情況而生的！

## 基本概念
可選鏈式操作符用一個簡單的 `?.` 來幫助你在物件鏈中輕鬆地檢查某個屬性是否存在。如果鏈中的某個屬性不存在，表達式會返回 `undefined`，而不會拋出錯誤。這在我們處理可能為空或未定義的數據時非常實用。

### 基本語法
讓我們看看它是如何工作的：

```javascript
const user = {
  name: 'Alice',
  address: {
    city: 'Wonderland',
  }
};

// 傳統方式，需多次檢查屬性是否存在
const city = user && user.address && user.address.city;
console.log(city); // 'Wonderland'

// 使用可選鏈式操作符
const cityNew = user?.address?.city;
console.log(cityNew); // 'Wonderland'

// 如果 user.address 不存在，不會拋出錯誤，而是返回 undefined
const postalCode = user?.address?.postalCode;
console.log(postalCode); // undefined
```
你會發現，使用可選鏈式操作符的代碼要簡潔多了，無需層層檢查每個屬性是否存在。

## 應用場景
### 1. 安全地訪問嵌套的屬性
在處理來自 API 的數據或動態數據時，我們經常會遇到一些結構不穩定的物件。這時，可選鏈式操作符就能大顯身手。

```javascript
const userProfile = {
  name: 'John',
  contactInfo: {
    email: 'john@example.com',
  }
};

// 當某些資料不確定存在時，使用可選鏈式操作符來防止錯誤
const phoneNumber = userProfile?.contactInfo?.phone;
console.log(phoneNumber); // undefined，而不是報錯
```

### 2. 與函數一起使用
可選鏈式操作符還可以用來檢查函數是否存在。這樣，你可以在保證函數存在的情況下安全地調用它。

```javascript
const userActions = {
  greet() {
    console.log('Hello!');
  }
};

// 如果 greet 方法存在，則執行
userActions.greet?.(); // 輸出: 'Hello!'

// 如果不存在，什麼也不會發生
userActions.farewell?.(); // 不會拋出錯誤
```

### 3. 安全訪問數組元素
當我們需要安全地訪問數組元素時，可選鏈式操作符也能派上用場。

```javascript
const fruits = ['apple', 'banana', 'cherry'];

// 安全地訪問數組元素，避免越界
console.log(fruits?.[1]); // 'banana'
console.log(fruits?.[5]); // undefined，而不是報錯
```

## 可選鏈式操作符的限制
儘管可選鏈式操作符非常方便，但也有它的限制：

1. 不可用於左側操作數：你不能在可選鏈中修改或賦值，`?.` 只能用來安全地讀取值，而不能用來寫入值。
2. 只能檢查 `null` 或 `undefined`：可選鏈式操作符只會檢查 `null` 或 `undefined`，如果物件存在但是 `false`、`0` 或空字串，它仍會返回該值，而不是 `undefined`。
```javascript
const value = 0;
console.log(value?.toFixed(2)); // 0.00
```
這裡 `value` 是 `0`，雖然是假值，但因為它並非 `undefined` 或 `null`，所以可選鏈式操作符並不會影響它。

## 實際應用範例
### 安全處理 API 回傳數據
在前端開發中，我們經常會遇到不確定的數據結構，特別是來自外部 API 的數據。有了可選鏈式操作符，處理這些數據變得更加輕鬆。

```javascript
async function fetchUserData(userId) {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  const data = await response.json();
  
  // 使用可選鏈式操作符安全地訪問深層次屬性
  const city = data?.address?.city;
  console.log(city || '城市信息不可用');
}

fetchUserData(123);
```

### 在大型應用中的防錯設計
在大型應用中，很多時候我們需要處理來自多個來源的數據，可選鏈式操作符能夠幫助我們防止出現未定義錯誤並保證應用不會崩潰。
```javascript
const appConfig = {
  theme: {
    darkMode: true,
    colors: {
      primary: '#000000',
    }
  }
};

// 使用可選鏈式操作符安全訪問設置屬性
const primaryColor = appConfig?.theme?.colors?.primary;
console.log(primaryColor || '預設顏色');
```

## 本篇自我挑戰
何謂自我挑戰，~~問題不怕困難，重點是要解決出問題的人(誤~~，嘗試開始! 在這裡你可以看到大家是怎麼回答題目的，甚至會看到暗藏的高手可以將簡單的題目回答的淋漓盡致!
回答我都會放在隔天的 [GitHub](https://github.com/Chung-Chi-Lin) 上哦!

### 挑戰 1：安全訪問一個嵌套的物件
```javascript
const book = {
  title: 'JavaScript Mastery',
  author: {
    name: 'John Doe',
    contact: {
      email: 'john@example.com'
    }
  }
};

// 使用可選鏈式操作符來安全訪問 contact 裡的 email 屬性
const authorEmail = book-> ???;
console.log(authorEmail || '電子郵件不可用'); // 'john@example.com'
```

### 挑戰 2：安全調用一個可選的函數
```javascript
const myObject = {
  greet() {
    console.log('Hello, World!');
  }
};

// 使用可選鏈式操作符來安全調用函數
myObject.greet?.(); // Hello, World!
myObject.sayGoodbye?.(); // 請問這裡會拋出錯誤嗎?
```

## 總結

在今天的學習中，我們深入了解了可選鏈式操作符（Optional Chaining）的強大功能。這個語法糖能幫助我們減少代碼中的錯誤，特別是在處理複雜的數據結構時，讓你的代碼更健壯、更易讀。下次你不確定某個屬性是否存在時，記得使用 ?. 來保護你的代碼。

歡迎在討論區互動交流，明天我們將繼續探索更多可選鏈式的延伸用法 Nullish 合併運算符！