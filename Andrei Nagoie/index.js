//Advanced arrays
// var array = [1, 2, 10, 16];

//forEach
// const double = [];
// const newArray = array.forEach((num) => {
//     double.push(num * 2);
// });
// console.log(double);

// map, filter, reduce

//map
// const mapArray = array.map((num) => {
//     return num * 4; // you always have to return smth., that's how map works
// });
//
// console.log(mapArray);
// const mapArray = array.map(num => num * 4);//short syntaxis for only 1 parameter

//filter
// const filterArray = array.filter(num => {
//     return num > 5;
// });
// console.log(filterArray);
// const filterArray = array.filter(num => num > 5); //short filter
// console.log(filterArray);

//reduce
// const reduceArray = array.reduce((accumulator, num) => {
//     return accumulator + num;
// }, 5);
//
// console.log(reduceArray);

//--------HOMEWORK-------
// Complete the below questions using this array:
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

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

//Create an array using map that has all the usernames with a "? to each of the usernames
//es5
// const newMapArray = array.map(function(el) {
// return el.username + "?"
// });
// console.log(newMapArray);
//es6
// const newMapArray = array.map(el =>  `${el.username}?`);
// console.log(newMapArray);

//Filter the array to only include users who are on team: red
//es5
// const filterArray = array.filter(function (el){
// return el.team === "red"});
// console.log(filterArray);
//es6
// const filterArray = array.filter(el => el.team === "red");
// console.log(filterArray);

//Find out the total score of all users using reduce
//es5
// var reduceArray = array.reduce(function (accumulator, el){
//     return accumulator + el.score;}, 0);
// console.log(reduceArray);
//es6
// const reduceArray = array.reduce((accumulator,el) => accumulator + el.score, 0);
// console.log(reduceArray);

// (1), what is the value of i?
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     return num * 2;
// });
//
// console.log(newArray);

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








//-------------TUTORIAL EXSERSICES-----------
//  closures - a function ran. the function executed. It's never going to be run again.
//  BUT it's going to remember that there are references to those variable
//  so the child scope always has access to the parent scope
//  children always have access to the parents scope, but parents never have access to the children's

//ES8
// const first = () => {
//     const greet = "Hi";
//     const second = () => {
//         const name = "Bobby";
//         alert(greet);
//     };
//     return second;
// };
// const newFunc = first();
// newFunc();

//  currying is a function that takes multiple arguments one at a time.
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// curriedMultiply(3)(5);

// //Currying: What does the last line return? - answer 31
// const sum = (a, b) => a + b;
// const curriedSum = (a) => (b) => a + b;
// curriedSum(30)(1);

// //Currying: What does the last line return? - answer 17
// const sum = (a, b) => a + b;
// const curriedSum = (a) => (b) => a + b;
// const add5 = curriedSum(5);
// add5(12);


//Closure: What does the last line return? answer - 13
// const addTo = x => y => x + y
// var addToTen = addTo(10)
// addToTen(3)

//Compose
// const compose = (f, g) => (a) => f(g(a));
// const sum = (num) => num + 1;
// compose(sum, sum)(5);

//Composing: What does the last line return? - answer 16
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10);


//Avoiding Side Effects, functional purity


//es5 vs. es6


// Object properties
//es.5
// var a = 'test';
// var b = true;
// var c = 789;
//
// var okObj = {
//     a: a,
//     b: b,
//     c: c
// };
//es6
// const a = 'test', b = true, c = 789;
// obj = {
//     a,
//     b,
//     c
// };

// Destructuring
//es5
// var person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };
//
// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;
//
//es6
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };
// const {firstName, lastName, age, eyeColor} = person;

// Template strings
//es5
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
//es6
// let firstName = "Elena",
//     city = "Los Angeles";
//
// let message = `Hello ${firstName}, have I met you before? I think we met in ${city} last summer, no???`;
// console.log(message);

// default arguments
//es5
// // default age to 10;
// function isValidAge(age) {
//     return age
// }
//es6
//const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"
// const symbol = Symbol('This is my first Symbol');
// console.log(symbol);
// Arrow functions
//es5
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }
//es6
// const whereAmI = (username, location) => {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// };
//
// console.log(whereAmI());

//ternary
// function isUserValid(bool) {
//     return bool;
// }
// var answer = isUserValid(true) ? "You may enter" : "Access denied";
// var automatedAnswer = "Your account # is " + ( isUserValid(false) ? "1234" : "Not available");

//switch
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

//-----loops-----
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

//-----facebook-----
// var database = [
//     {
//         username: "andrei",
//         password: "supersecret"
//
//     },
//     {
//         username: "sally",
//         password: "777"
//
//     },
//     {
//         username: "ingrid",
//         password: "123"
//
//     },
// ];
// var newsfeed = [
//     {
//         username: "Bob",
//         timeline: "So tired"
//     },
//     {
//         username: "elena",
//         timeline: "so happy"
//     },
//     {
//         username: "meggy",
//         timeline: "in the future"
//     }
// ];
//
// var userNamePrompt = prompt("What is your username?");
// var passwordPrompt = prompt("What is your password?");
//
// function isUserValid(user, pass) {
//     for (var i = 0; i < database.length; i++) {
//         if (database[i].username === user &&
//             database[i].password === pass) {
//             return true;
//         }
//     }
//     return false;
// }
//
// function signIn(user, pass) {
//     if (isUserValid(user, pass)) {
//         console.log(newsfeed);
//     } else {
//         console.log("sorry, something is wrong");
//     }
// }
//
// signIn(userNamePrompt, passwordPrompt);

//-----OBJECTS-----
//
// var database = [obj1 = {
//     username: "Olga",
//     password: "password"
// }];
//
// var newsfeed = [{
//     username: "Olga",
//     timeline: "then"
// }, {
//     username: "elena",
//     timeline: "now"
// }, {
//     username: "meggy",
//     timeline: "in the future"
// }];

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

//-----FUNCTIONS-----
//
//
// function checkDriverAge(){
//     var age = prompt("What is your age?");
//
//     if (Number(age) < 18) {
//         alert("Sorry, you are too young to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }
// checkDriverAge();
//
// var checkDriverAge2 = function(){
//
//     var age = prompt("What is your age?");
//
//     if (Number(age) < 18) {
//         alert("Sorry, you are too young to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// };
// checkDriverAge2();
//
// var checkDriverAge2 = function(age){
//
//
//     if (Number(age) < 18) {
//         alert("Sorry, you are too young to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// };
// checkDriverAge2(56);

//SHOPPING LIST
// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function () {
//     console.log("click!")
// });
//
//
// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");
// var deleteBtns = document.getElementsByClassName("delete");
// var items = ul.getElementsByTagName("li");
//
//
//
// //add event listener to first 6 btns in HTML file
// for(var i = 0; i < deleteBtns.length; i++){
//     deleteBtns[i].addEventListener("click", removeParent, false);
// }
//
// //from StackOverflow:
// function removeParent(evt) {
//     // evt.target.removeEventListener("click", removeParent, false);
//     evt.target.parentNode.remove();
// }
//
// //click on a list item and it strike throughs the text
// function getEventTarget(e){
//     e = e || window.event;
//     return e.target || e.srcElement;
// }
//
//
// ul.onclick = function(event){
//     var target = getEventTarget(event);
//     target.classList.toggle("done");
// };
//
// function inputLength() {
//     return input.value.length;
// }
//
// function createListElement() {
//     var li = document.createElement("li");//tag we want to create
//     // li.appendChild(document.createTextNode("testing"));
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = ""; // to make input completely clean
// }
//
// function addListAfterClick() {
//     if (inputLength() > 0) {
//         createListElement();
//     }
// }
//
// function addListAfterKeypress(event) {
//     if (inputLength() > 0 && event.keyCode === 13) {
//         createListElement();
//     }
// }
//
// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);
//
