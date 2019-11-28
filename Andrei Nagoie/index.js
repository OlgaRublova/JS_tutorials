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
