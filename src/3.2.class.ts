{
	// Class

	class Human {
		// public name: string;
		// public quality: string;
		// public isCruel: boolean;

		// constructor(name: string, quality: string, isCruel: boolean) {
		// 	this.name = name;
		// 	this.quality = quality;
		// 	this.isCruel = isCruel;
		// }

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

	const abul = new Human("Abul", "thief", true);
	const babul = new Human("Babul", "good", false);

	abul.hurtOthers();
	babul.hurtOthers();

    // 
}
