{
	// access modifiers
	class BankAccount {
		public readonly id: number;
		public name: string;
		protected _balance: number;

		constructor(id: number, name: string, balance: number) {
			this.id = id;
			this.name = name;
			this._balance = balance;
		}

		public addDeposit(amount: number) {
			this._balance += amount;
		}

		public getBalance() {
			return this._balance;
		}
	}

	class StudentAccount extends BankAccount {
		constructor(id: number, name: string, _balance: number) {
			super(id, name, _balance);
		}
		reduceBalance(amount: number) {
			this._balance -= amount;
		}
	}

	const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
	// goribManusherAccount.balance = 0;
	goribManusherAccount.addDeposit(20);
	const myBalance = goribManusherAccount.getBalance();
	console.log(myBalance);

    const student = new StudentAccount(123456, "Moksed", 20000);
    
	student.addDeposit(500);
	console.log(student.getBalance());
	student.reduceBalance(1500);
	console.log(student.getBalance());

	//
}
