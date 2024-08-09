// === day4 自我挑戰 ===

// 1. 使用解構賦值重構代碼
const user = {
	id: 1,
	name: 'John Doe',
	email: 'john.doe@example.com'
};

const { id, name, email } = user;

// 2.使用擴展運算符合併數組
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const array = [ ...arr1, ...arr2 ];

// 3.使用擴展運算符合併對象

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// 在這裡合併 obj1 和 obj2
const obj3 = { ...obj1, ...obj2};
