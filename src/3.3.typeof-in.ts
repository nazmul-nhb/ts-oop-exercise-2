{
	// Type Guard/Type Narrowing
	// typeof operator

	type AlphaNumeric = string | number;

	const add = (x: AlphaNumeric, y: AlphaNumeric): AlphaNumeric => {
		if (typeof x === "number" && typeof y === "string") {
			return x + y;
		} else {
			return x.toString() + y.toString();
		}
	};

	const result1 = add(2, "k");

	console.log(result1);

	// in operator ---> works for objects

	type NormalUser = {
		name: string;
		isNormal: boolean;
	};

	type AdminUser = {
		name: string;
		role: "admin";
	};

	const getUser = (user: NormalUser | AdminUser) => {
		if ("role" in user) {
			console.log(`User is ${user.role}`);
		} else {
			console.log(`User is ${user.isNormal ? "Normal" : "Abnormal"}`);
		}
	};

	const normalUser: NormalUser = { name: "mamu", isNormal: false };
	const specialUser: AdminUser = { name: "mamu", role: "admin" };

	getUser(normalUser);
	getUser(specialUser);

	//
}
