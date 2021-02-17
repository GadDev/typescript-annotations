let apples: number = 8;

let speed: string = 'string';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;
//built in Objects
let now: Date = new Date();



//Array
let colors: string[] = ['red', 'green', 'yellow'];
let myNumbers: number[] = [1, 2, 3];
let truth: boolean[] = [true, false];

//Classes
class Car {}
let car: Car = new Car();


// Object literal
// annotation =>> : {x: number; y: number}
let point: {x: number; y: number} = {
	x: 10,
	y: 46
}

//function 
// annotations =>> : (i: number) => void
const logNumber: (i: number) => void = (i: number) => {
	console.log(i)
}


//When to use annotations
// 1. Functions that returns the 'any' type

const json = '{"x": 10, "y": 20}';
//typescript cannot predict the types
const coords: { x: number, y: number} = JSON.parse(json);
console.log(coords); // { x:10, y: 20 }


//2. When we declare a variable on one line and initialize it later

let words = ['hello', 'world', 'ami']
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
	if(words[i] === 'green') {
		foundWord = true
	}
}

//3. When we want a variable to have a type that can't inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
	if(numbers[i] > 0) {
		numberAboveZero = numbers[i]
	}
}

