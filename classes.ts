// Classes

// Blueprint to create an object with some fields (values)
// and methods (functions) to represent a 'thing'

class SuperHero {
	name: string;
	age: number;
	power: string;
	constructor(name: string, power: string, age: number) {
		this.age = age;
		this.name = name;
		this.power = power;
	}
	private fly(): void {
		console.log(`${this.name} is flying.`);
	}

	startFly(): void {
		this.fly();
	}

	setPower(power: string): string {
		return (this.power = power);
	}
}

// short cut constructor
class Human {
	constructor(public name: string) {}
}

class Books {
	constructor(public name: string) {}
}

class Dictionary extends Books {
	constructor(public language: string, name: string) {
		super(name);
	}
}

class Avenger extends SuperHero {
	constructor(name, power, age) {
		super(name, power, age);
	}

	saveTheWorld(): void {
		console.log(`${this.name} save the world`);
	}
}

const ironMan = new SuperHero('Ironman', 'Plaster', 40);
ironMan.startFly();

const thor = new Avenger('Thor', 'Hammer', 1500);
thor.setPower('ligthning');

const alex = new Human('alex');
console.log(alex.name);

const englishDictionary = new Dictionary('english-french', 'Collins');
console.log(englishDictionary.language);
