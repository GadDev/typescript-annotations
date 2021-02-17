const profile = {
	name: 'alex',
	age: 38,
	coords: {
		lat: 0,
		lng: 0,
	},
	setAge(age: number): void {
		this.age = age;
	},
};

const { age }: { age: number } = profile;

const {
	coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
