// === day27 自我挑戰 ===

// 1. 使用 async/await 處理一個簡單的 API 請求
async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
}

fetchData();

// 2. 使用 Promise.all() 同時加載多個數據源
async function fetchDataFromMultipleSources() {
    const [data1, data2] = await Promise.all([
        fetch("https://api.example.com/data1").then(res => res.json()),
        fetch("https://api.example.com/data2").then(res => res.json())
    ]);

    console.log("數據來源 1:", data1);
    console.log("數據來源 2:", data2);
}
  
fetchDataFromMultipleSources();