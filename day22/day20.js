// === day20 自我挑戰 ===

// 1. 創建一個生成器來產生一個有限的數字序列
function* numberSequence(limit) {
    for (let i = 1; i <= limit; i++) {
        yield i;
    }
}

const sequence = numberSequence(5);
for (const num of sequence) {
    console.log(num); // 依次輸出 1, 2, 3, 4, 5
}

// 2. 使用生成器處理異步操作，模擬多個 API 請求
function* fetchMultipleData() {
    const user = yield fetch('https://api.example.com/user');
    const posts = yield fetch(`https://api.example.com/user/${user.id}/posts`);
    return { user, posts };
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
