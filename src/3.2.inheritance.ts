{
	// Inheritance in Class

	class Criminal {
		// parameter properties
		constructor(
			public name: string,
			public age: number,
			private isInnocent: boolean
		) {}

		finalTrial() {
			console.log(
				`${this.name} will ${
					this.isInnocent ? "soon" : "never"
				} be released`
			);
		}
	}

	const abul = new Criminal("Abul", 33, true);
	const babul = new Criminal("Babul", 45, false);

	abul.finalTrial();
	babul.finalTrial();

	class Mafia extends Criminal {
		constructor(
			name: string,
			age: number,
			isInnocent: boolean,
			public location: string
		) {
			super(name, age, isInnocent);
		}

		operates() {
			console.log(`${this.name} operates in ${this.location}`);
		}
	}

	const mokbul = new Mafia("Mokbul", 45, false, "USA");

	mokbul.operates();
	mokbul.finalTrial();
	//
}
