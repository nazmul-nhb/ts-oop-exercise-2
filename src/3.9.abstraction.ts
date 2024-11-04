{
	// Abstraction
	// 1. using interface
	// 2. using abstract keyword

    // getting an idea from the interface
	interface Vehicle1 {
		startEngine(): void;
		stopEngine(): void;
		move(): void;
	}

	// real implementation using class
	class Car1 implements Vehicle1 {
		startEngine(): void {
			console.log(`I am starting the car engine`);
		}
		stopEngine(): void {
			console.log("I am stopping the car engine");
		}
		move(): void {
			console.log(`I am moving the car`);
		}
		test() {
			console.log(`I am just testing`);
		}
	}

	const toyotaCar = new Car1();
	toyotaCar.startEngine();

	// abstract class

	// idea using 'abstract' keyword
	abstract class Car2 {
		abstract startEngine(): void;
		abstract stopEngine(): void;
		abstract move(): void;
		test() {
			console.log(`I am just testing`);
		}
	}

	// const hondaCar = new Car2(); // --> not allowed
	// hondaCar.startEngine();

	class ToyotaCar extends Car2 {
		startEngine(): void {
			console.log("I am starting the Toyota engine");
		}
		stopEngine(): void {
			console.log("I am stopping the Toyota engine");
		}
		move(): void {
			console.log("I am moving my Toyota");
		}
    }
    
    const toyota = new ToyotaCar();

    toyota.startEngine()
    toyota.test()

	//
}
