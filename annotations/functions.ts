// type annotations for functions 
// code we add to tell Typescript what type of arguments 
// a function will receive and what type of values it will return

//type inference for functions
// Typescript tries to figure out what type 
// of value a function will return

const add = (a: number, b: number): number => {
	return a + b
}

function divide(a: number, b: number): number{
	return a / b
}

const multiply = function(a: number, b: number): number {
	return a * b
}


// use void when you are not returning anything, there will be not return value
const logger = (message: string): void => {
	console.log(message)
}


// use never when you are never returning anything, never execute the function completely
const throwError = (message: string): never => {
	throw new Error(message)
}


//destructuring with annotations
const forecast = {
	date: new Date(),
	weather: "sunny"
}

const logWeather = (forecast: {date: Date, weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather)
}

const logWeatherDestruct = ({date, weather}: {date: Date, weather: string }): void => {
	console.log(date);
	console.log(weather)
}
