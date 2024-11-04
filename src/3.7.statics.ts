{
	// Statics

	class Counter {
		static count: number = 0;

		static increment() {
			return (Counter.count += 1);
		}

		decrement() {
			return (Counter.count -= 1);
		}
	}

	// const counter1 = new Counter();

	// console.log(counter1.increment()); // --> same memory
	console.log(Counter.increment()); 

	const counter2 = new Counter();

	console.log(counter2.decrement()); // --> same memory
	console.log(counter2.decrement()); // --> same memory

	//
}
