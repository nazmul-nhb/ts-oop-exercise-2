{
	// Type Guard
	// instanceof

	class Human {
		// parameter properties
		constructor(
			public name: string,
			public quality: string,
			private isCruel: boolean
		) {}

		hurtOthers() {
			console.log(
				`${this.name} ${this.isCruel ? "always" : "never"} hurts other`
			);
		}
	}

	class Developer extends Human {
		constructor(name: string, quality: string, isCruel: boolean) {
			super(name, quality, isCruel);
		}

		makesWebsite() {
			console.log(`${this.name} creates nice websites!`);
		}
	}

	class Shopkeeper extends Human {
		constructor(name: string, quality: string, isCruel: boolean) {
			super(name, quality, isCruel);
		}

		sellsTabiz() {
			console.log(`${this.name} sells tabiz!`);
		}
	}

	const man1 = new Developer("Jhank", "expert", false);
	const man2 = new Shopkeeper("Sumit", "expert", true);

	// smart way to handle instanceof

	const isDeveloper = (human: Human): human is Developer => {
		return human instanceof Developer;
	};

	const isShopkeeper = (human: Human): human is Shopkeeper => {
		return human instanceof Shopkeeper;
	};

	const getHuman = (human: Human) => {
		// if (human instanceof Developer) {
		// 	human.makesWebsite();
		// } else if (human instanceof Shopkeeper) {
		// 	human.sellsTabiz();
		// }
		// if (human instanceof Developer) {
		// 	human.makesWebsite();
		// } else if (human instanceof Shopkeeper) {
		// 	human.sellsTabiz();
		// }

		if (isDeveloper(human)) {
			human.makesWebsite();
		} else if (isShopkeeper(human)) {
			human.sellsTabiz();
		}

		human.hurtOthers();
	};

	getHuman(man1);
	getHuman(man2);

	//
}
