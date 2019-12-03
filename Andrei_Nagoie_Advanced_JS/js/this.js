//Global object - window
// function a (){
//     console.log(this);   //window
// }
//
// function b() {
//     'use strict'         //can be added at the beginning of our script or 1st line of our function
//     console.log(this)    //undefined
// }

//Access to methods' objects
// const obj = {
//     name: "Billy",
//     sing() {//newer syntax
//         return 'lalala' +" " + this.name;
//     },
//     singAgain() {
//         return this.sing() +  this.name + "!";
//     }
// };
// console.log(obj.sing());
//
// function importantPerson() {
//     console.log(this.name + "!");
// }
//
// const name = "Sunny";
//
// const obj1 = {
//     name: "Cassy",
//     importantPerson: importantPerson
// };
//
// const obj2 = {
//     name: "Jacob",
//     importantPerson: importantPerson
// };
//
// obj1.importantPerson();

// const a = function () {
//     console.log("a", this);
//     const b = function () {
//         console.log('b', this);
//         const c = {
//             hi: function () {
//                 console.log("c", this)
//             }
//         };
//         c.hi();
//     };
//     b()
// };
//
// a();

//dynamic scope vs. lexical scope
// const obj = {
//     name: "Billy",
//     sing() {//newer syntax
//         console.log('a', this);
//         var anotherFunc = () => {//arrow function lexically binds this
//             console.log("b", this)
//         };
//         anotherFunc();
//     }
// };
//
//or as it was done before arrow functions came along
//
// const obj = {
//     name: "Billy",
//     sing() {//newer syntax
//         console.log('a', this);
//         var anotherFunc = function() {
//             console.log("b", this)
//         };
//         return anotherFunc.bind(this);
//     }
// };


//call(), apply(), bind()

//call() = apply()
//apply expects an array as arguments           wizard.heal.apply(archer, [50, 60]);
//call expects just arguments                   wizard.heal.call(archer, 50, 60);
//
// const wizard = {
//     name: "Merlin",
//     health: 100,
//     heal(num1, num2) {
//        return  this.health += num1 + num2;
//     }
// };
//
// const archer = {
//     name: "Robin Hood",
//     health: 10,
// };
// console.log("1", archer);
//
// wizard.heal.call(archer, 50, 60);
// console.log("2-call", archer);
//
// wizard.heal.apply(archer, [50, 100]);
// console.log("3-apply", archer);
//
//

//bind()
//bind() doesn't call a function, it returns it :
// const healArcher = wizard.heal.bind(archer, 100, 30);
// healArcher()
//
// const healArcher = wizard.heal.bind(archer, 100, 90);
// healArcher();
// console.log("4-bind", archer);

//bind() and function currying
// function multiply(a, b) {
//     return a * b;
// }
//
// let multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(4));
//
// let multiplyByTen = multiply.bind(this, 2);
// console.log(multiplyByTen(10));


//task 1
// const array = [1, 2, 3];
//
// function getMaxNumber(arr) {
//     return Math.max.apply(null, arr);
// }
//
// getMaxNumber(array);// should return 3

//task 2
// var b = {
//     name: 'jay',
//     say() {
//         console.log(this)
//     }
// };
//
// var c = {
//     name: 'jay',
//     say() {
//         return function () {
//             console.log(this)
//         }
//     }
// };
//
// var d = {
//     name: 'jay',
//     say() {
//         return () =>
//             console.log(this)
//     }
// };
// d.say()();

//task 3
// const character = {
//     name: 'Simon',
//     getCharacter() {
//         return this.name;
//     }
// };
// const giveMeTheCharacterNOW = character.getCharacter.bind(character);
// console.log( giveMeTheCharacterNOW(), "?");
