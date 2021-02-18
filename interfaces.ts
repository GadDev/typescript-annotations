// Interfaces
// Create a new type, describing the property
// names and value types of an object

// IMPROVE BY USING INTERFACES
interface Hero {
	name: string;
	age: number;
	power: boolean;
	dob: Date
	scream(): string
}

const Thor = {
	name: 'Thor',
	age: 2000,
	power: true,
	dob: new Date(),
	scream() {
		return "Asssssgardddddd!"
	}
};

//Example of long types annotations ====> NOT THE BEST
// const printHero = (hero: { name: string, age: number, hasPower: boolean}): void => {
// 	console.log(`Name: ${hero.name}, has ${hero.age} years old, has power => ${hero.hasPower}`)
// }

const printHero = (hero: Hero): void => {
	console.log(
		`Name: ${hero.name}, has ${hero.age} years old, has power => ${hero.power}`
	);
};

printHero(Thor);

