// Tuple
// Represent a specific record in our application
// Array like structure where each element
// represents some property of a record

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
};

// order in the array has a specific meaning
//this is a tuple
// const pepsi: [string, boolean, number] = ['brown', true, 40]

// with alias
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 0];
const water: Drink = ['clear', false, 0];


// Why?
const carSpecs: [number, number] = [400, 3354]
