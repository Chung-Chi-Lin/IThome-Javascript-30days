// === day16 自我挑戰 ===

// 1. 創建一個 Car 類別，並使用私有字段來保護車輛的引擎狀態（如是否啟動）。
class Car {
	#engineOn = false; // 私有字段，表示引擎狀態

	startEngine() {
		if (!this.#engineOn) {
			this.#engineOn = true;
			console.log('引擎已啟動');
		} else {
			console.log('引擎已經在運行');
		}
	}

	stopEngine() {
		if (this.#engineOn) {
			this.#engineOn = false;
			console.log('引擎已停止');
		} else {
			console.log('引擎已經停止');
		}
	}

	getEngineStatus() {
		return this.#engineOn ? '引擎正在運行' : '引擎已關閉';
	}
}

const myCar = new Car();
myCar.startEngine();  // 輸出: 引擎已啟動
myCar.stopEngine();   // 輸出: 引擎已停止
console.log(myCar.getEngineStatus()); // 輸出: 引擎已關閉

// 2.創建一個 SecureVault 類別，使用私有字段來存儲和管理密碼。
class SecureVault {
	#password = '';

	constructor(password) {
		this.#password = password; // 初始化私有字段
	}

	// 驗證輸入的密碼是否正確
	verifyPassword(input) {
		return input === this.#password;
	}

	// 更新密碼
	updatePassword(oldPassword, newPassword) {
		if (this.verifyPassword(oldPassword)) {
			this.#password = newPassword;
			console.log('密碼已更新');
		} else {
			console.error('舊密碼錯誤，無法更新');
		}
	}
}

const vault = new SecureVault('mySecret123');
console.log(vault.verifyPassword('wrongPassword')); // 輸出: false
vault.updatePassword('mySecret123', 'newSecret456'); // 輸出: 密碼已更新
