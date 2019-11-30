//  currying
//  is a function that takes multiple arguments one at a time.
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// curriedMultiply(3)(5);
//
// //Currying: What does the last line return? - answer 31
// const sum = (a, b) => a + b;
// const curriedSum = (a) => (b) => a + b;
// curriedSum(30)(1);
//
// //Currying: What does the last line return? - answer 17
// const sum = (a, b) => a + b;
// const curriedSum = (a) => (b) => a + b;
// const add5 = curriedSum(5);
// add5(12);

//  closures - a function ran. the function executed. It's never going to be run again.
//  BUT it's going to remember that there are references to those variable
//  so the child scope always has access to the parent scope
//  children always have access to the parents scope, but parents never have access to the children's
//Closure: What does the last line return? answer - 13
// const addTo = x => y => x + y
// var addToTen = addTo(10)
// addToTen(3)

//Compose
// const compose = (f, g) => (a) => f(g(a));
// const sum = (num) => num + 1;
// compose(sum, sum)(5);
//
//Composing: What does the last line return? - answer 16
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10);

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

