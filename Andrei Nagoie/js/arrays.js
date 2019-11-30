//-----ARRAYS-----
//
// var list = [["tiger", "fox", "bird"]];
// console.log(list[0][2]);
//
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
//
// array.shift(); //deletes 1st element
// array.sort();//sorts elements
// array.push("Kiwi");//pushes Kiwi to the end
// array.reverse();//reverse order
// array.splice(3,3);//removes specific element
//
// console.log(array);
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(array2[1][1]);



//Advanced arrays

// var array = [1, 2, 10, 16];

//forEach
// const double = [];
// const newArray = array.forEach((num) => {
//     double.push(num * 2);
// });
// console.log(double);
//
// map, filter, reduce
//

//map
// const mapArray = array.map((num) => {
//     return num * 4; // you always have to return smth., that's how map works
// });
//
// console.log(mapArray);
// const mapArray = array.map(num => num * 4);//short syntaxis for only 1 parameter
//

//filter
// const filterArray = array.filter(num => {
//     return num > 5;
// });
// console.log(filterArray);
// const filterArray = array.filter(num => num > 5); //short filter
// console.log(filterArray);
//

//reduce
//The reduce() method is used to apply a function to each
// element in the array to reduce the array to a single value.
//
// accumulator — the accumulator accumulates all of the callbacks
// returned values.
//let sum = arr.reduce((acc, val) => acc + val, 100);
// const reduceArray = array.reduce((accumulator, num) => {
//     return accumulator + num;
// }, 5);
//
// console.log(reduceArray);
//
//
//example
//Using the reduce() method,
// how would you sum up the population of every country except China?
// let data = [
//     {
//         country: 'China',
//         pop: 1409517397,
//     },
//     {
//         country: 'India',
//         pop: 1339180127,
//     },
//     {
//         country: 'USA',
//         pop: 324459463,
//     },
//     {
//         country: 'Indonesia',
//         pop: 263991379,
//     }
// ];
// let sum = data.reduce((acc, val) => {
//     return val.country === 'China' ? acc : acc + val.pop;
// }, 0);
//
// console.log(sum);

//--------HOMEWORK-------
// Complete the below questions using this array:
// const array = [
//     {
//         username: "john",
//         team: "red",
//         score: 5,
//         items: ["ball", "book", "pen"]
//     },
//     {
//         username: "becky",
//         team: "blue",
//         score: 10,
//         items: ["tape", "backpack", "pen"]
//     },
//     {
//         username: "susy",
//         team: "red",
//         score: 55,
//         items: ["ball", "eraser", "pen"]
//     },
//     {
//         username: "tyson",
//         team: "green",
//         score: 1,
//         items: ["book", "pen"]
//     },
//
// ];
//
//Create an array using forEach that has all the usernames with a "!" to each of the usernames
//es5
// const arr = [];
// const newArray = array.forEach(function (el) {
//     arr.push(el.username + " !");
// });
// console.log(arr);
//es6
// const arr = [];
// const newArray = array.forEach(el => {
//     arr.push(`${el.username}!`);
// });
// console.log(arr);
//
//Create an array using map that has all the usernames with a "? to each of the usernames
//es5
// const newMapArray = array.map(function(el) {
// return el.username + "?"
// });
// console.log(newMapArray);
//es6
// const newMapArray = array.map(el =>  `${el.username}?`);
// console.log(newMapArray);
//
//Filter the array to only include users who are on team: red
//es5
// const filterArray = array.filter(function (el){
// return el.team === "red"});
// console.log(filterArray);
//es6
// const filterArray = array.filter(el => el.team === "red");
// console.log(filterArray);
//
//Find out the total score of all users using reduce
//es5
// var reduceArray = array.reduce(function (accumulator, el){
//     return accumulator + el.score;}, 0);
// console.log(reduceArray);
//es6
// const reduceArray = array.reduce((accumulator,el) => accumulator + el.score, 0);
// console.log(reduceArray);
//
// (1), what is the value of i?
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     return num * 2;
// });
//
// console.log(newArray);
//
//es5
// var finArray = array.map(function (el) {
//     return {
//        username: el.username + " ?",
//        team: el.team + " ?",
//        score: el.score + " ?",
//        items: el.items + " ?",
//     }
// });
// console.log(finArray);
//es6
// const finArray = array.map(el => {
//     return {
//        username: `${el.username}?`,
//        team: `${el.team}?`,
//        score: `${el.score}?`,
//        items: `${el.items}?`
//     }
// });
// console.log(finArray);