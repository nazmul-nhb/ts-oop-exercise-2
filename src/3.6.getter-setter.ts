{
	// getter & setter ---> works like methods but is used like properties
	class BankAccount {
		public readonly id: number;
		public name: string;
		protected _balance: number;

		constructor(id: number, name: string, balance: number) {
			this.id = id;
			this.name = name;
			this._balance = balance;
		}

		// public addDeposit(amount: number) {
		// 	this._balance += amount;
		// }

		set deposit(amount: number) {
			this._balance += amount;
		}

		// public getBalance() {
		// 	return this._balance;
		// }

		get balance() {
			return this._balance;
		}
	}

	const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);

	// goribManusherAccount.addDeposit(20);
	goribManusherAccount.deposit = 40;

	// const myBalance = goribManusherAccount.getBalance();
	const myBalance = goribManusherAccount.balance;
	console.log(myBalance);

	//
}
