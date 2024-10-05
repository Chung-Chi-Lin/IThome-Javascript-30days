// === day22 自我挑戰 ===

// 1. 安全訪問一個嵌套的物件
const book = {
    title: 'JavaScript Mastery',
    author: {
        name: 'John Doe',
        contact: {
        email: 'john@example.com'
        }
    }
};

// 使用可選鏈式操作符來安全訪問 contact 屬性
const authorEmail = book?.author?.contact?.email;
console.log(authorEmail || '電子郵件不可用'); // 'john@example.com'

// 2. 安全調用一個可選的函數
const myObject = {
    greet() {
        console.log('Hello, World!');
    }
};

// 使用可選鏈式操作符來安全調用函數
myObject.greet?.(); // Hello, World!
myObject.sayGoodbye?.(); // 不會拋出錯誤
