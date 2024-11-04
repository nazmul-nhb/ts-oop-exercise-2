{
	// Polymorphism

	class Person {
		getSleep() {
			console.log("I am sleeping for 8 hours...");
		}
	}

	class Student extends Person {
		getSleep() {
			console.log("I am sleeping for 7 hours...");
		}
	}

	class Developer extends Person {
		getSleep() {
			console.log("I am not sleeping at all...");
		}
	}

	const person1 = new Person();
	const student1 = new Student();
	const dev1 = new Developer();

	const getSleepingHour = (arg: Person) => {
		arg.getSleep();
	};

	getSleepingHour(person1);
	getSleepingHour(student1);
    getSleepingHour(dev1);
    
    class Shape {
		getArea(): number {
			return 0;
		}
	}

	// pi* r* r
	class Circle extends Shape {
		radius: number;
		constructor(radius: number) {
			super();
			this.radius = radius;
		}

		// getArea(radius: number): number {} cannot accept params // do this instead -->

		getArea(): number {
			return Math.PI * this.radius * this.radius;
		}
	}

	// height * width
	class Rectangle extends Shape {
		height: number;
		width: number;

		constructor(height: number, width: number) {
			super();
			this.height = height;
			this.width = width;
		}

		getArea(): number {
			return this.height * this.width;
		}
	}

	const getShapeArea = (param: Shape) => {
		console.log(param.getArea());
	};

	const shape1 = new Shape();
	const shape2 = new Circle(10);
	const shape3 = new Rectangle(10, 20);

	getShapeArea(shape1);
	getShapeArea(shape2);
	getShapeArea(shape3);

	//
}
