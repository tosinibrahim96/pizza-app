const gameScores = [20, 34, 55, 46, 77, 98, 99];
const favouriteThings = ['Mango', 'Apple', 'Banana'];
const voters = [{name: 'Bob', age: 22}, {name: 'Frank', age: 25}, {name: 'Alice', age: 30}];

function getLastItem <T> (arr: T[]): T {
    return arr[arr.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favouriteThings));
console.log(getLastItem(voters));
