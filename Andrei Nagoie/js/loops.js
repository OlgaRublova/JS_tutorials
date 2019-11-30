//--------------LOOPS--------------
// var todos = [
//     "clean room",
//     "brush teeth",
//     "exersise",
//     "study js"
// ];
//
// function logTodos(el, i) {
//     console.log(el, i)
// }
// todos.forEach(logTodos);
//
// console.log("----------------");
//
// for (var i=0; i <todos.length; i++){
//     console.log(todos[i], i)
// }
// var countOne = 10;
// while (countOne > 4){
//     console.log("while", countOne);
//     countOne--;
// }
//

//--------------SWITCH--------------
//
// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             whatHappens = "you encounter a monster";
//             break;
//         case "back":
//             whatHappens = "you encounter a fox";
//             break;
//         case "left":
//             whatHappens = "you encounter a cat";
//             break;
//         case "right":
//             whatHappens = "you encounter a dog";
//             break;
//         default:
//             whatHappens = "please enter a valid direction"
//     }
//     return whatHappens;
// }
// function whomRosaLoves(husband) {
//     var possibleHusband;
//
//     switch (husband) {
//         case "ernesto":
//             possibleHusband = "friend - Ernesto";
//             break;
//         case "brother":
//             possibleHusband = "brother-in-law - Rogelio";
//             break;
//         case "love":
//             possibleHusband = "love of her life - Ricardo";
//             break;
//         default:
//             possibleHusband = "She stays alone with cats";
//     }
//     return possibleHusband;
// }

//--------------ADVANCED LOOPS--------------
//
// //1
// const basket = ['apples', 'oranges', 'grapes'];
// const detailedBasket = {
//     apples: 5,
//     oranges: 10,
//     grapes: 1000
// };
// for (let i =0; i < basket.length; i++){
//     console.log(basket[i]);
// }
//
//
// //2
// basket.forEach(item => {
//     console.log(item)
// });
//
//
//for of
//Iterating - arrays, strings
// for (item of basket){
//     console.log(item);
// }
//
//
//for in - loop over objects' properties
//enumerating - for objects
// for (item in detailedBasket){
//     console.log(item)
// }
//
//
//homework
//
//
// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// // Use at least 3 different types of javascript loops to write this:
// const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
// const array2 = ['a', 3, 4, 2];// should return 4
// const array3 = []; // should return 0
//
// function biggestNumberInArray(array) {
//     let maxNumber = null;
// //
// //     for (let i = 0; i < array.length; i++) {
// //         if (maxNumber === null) {
// //             maxNumber = array[0];
// //         }
// //         if (maxNumber < array[i]) {
// //             maxNumber = array[i]
// //         }
// //     }
// //     console.log(maxNumber);
// //or
//     maxNumber = Math.max(...array);//changes an array into the list of variables
//     console.log(maxNumber);
// }
// biggestNumberInArray(array);
//
// function biggestNumberInArray2(arr) {
//     let maxNumber = 0;
//     for (item of arr) {
//         if (maxNumber < item) {
//             maxNumber = item;
//         }
//     }
//     console.log(maxNumber);
// }
//
// biggestNumberInArray2(array2);
//
// function biggestNumberInArray3(arr) {
//     let maxNumber = 0;
//     arr.forEach(item => {
//         if (maxNumber < item) {
//             maxNumber = item;
//         }
//     });
//     console.log(maxNumber);
// }
//
//
// biggestNumberInArray3(array3);
//
//
// Question #2:
// // Write a function checkBasket() that lets you know if the item is in the basket or not
// amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// };
//
// function checkBasket(basket, lookingFor) {
//     for (item in basket) {
//         if (item === lookingFor) {
//             console.log( `I found ${lookingFor}`)
//         } else {
//             console.log("not found")
//         }
//     }
// }
//
// checkBasket(amazonBasket, "glasses");