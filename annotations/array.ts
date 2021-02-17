// Types Arrays
// Arrays where each element is some consistent type of value

// array with inference
const coffeeShopsInference = ['Starbuck', 'Costa', 'Hej'];
//or be more specific
const coffeeShops: string[] = ['Starbuck', 'Costa', 'Hej'];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corrola'], ['camaro']];

// Why types arrays?

// Help with inference when extracting values
const coffeeShop = coffeeShops[0];
const myCoffeshop = coffeeShops.pop();

// Prevent incompatible values
coffeeShops.push(100);

// Help with 'map', 'forEach', etc

coffeeShops.map((coffeeShop: string): string => {
	return coffeeShop.toLowerCase();
});

// Flexible types

const importantDates = [new Date(), '2010-10-01'];
// or
// const importantDates: (Date | string)= [new Date(), '2010-10-01'];

importantDates.push('2019-30-02');
importantDates.push(new Date());

// When to use this?

// Any time we need to represent a collection
// of records with some arbitrary sort order
