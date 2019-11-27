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
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}
function createListElement(){
    var li = document.createElement("li");//tag we want to create
    // li.appendChild(document.createTextNode("testing"));
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; // to make input completely clean
}

button.addEventListener("click", function () {
    if (inputLength() > 0) {
        createListElement();
    }
});

input.addEventListener("keypress", function (event) {
    if (inputLength() > 0 && event.keyCode === 13)  {
        createListElement();
    }
});