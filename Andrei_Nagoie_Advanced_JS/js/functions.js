// function cannot be determined and called inside a loop, only called

//TASK 1-HIGHER ORDER FUNCTION
// const giveAccessTo = (name) =>
//     'Access Granted to ' + name;
//
// function authenticate(person) {
//     let array = [];
//     // you can add checks here for person.level
//     for (let i = 0; i < 50000; i++) {
//         array.push(i)
//     }
//     return giveAccessTo(person);
// }
//
// function letPerson(person, fn) { // ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
//     if (person.level === 'admin') {
//         return fn(person);
//     } else if (person.level === 'user') {
//         return fn(person);
//     }
// }
//
// letPerson({level: 'user', name: 'Tim'}, authenticate);

//TASK 2
// function multiplyBy(num1) {
//     return function (num2) {
//         return num1 * num2;
//     };
// }
//
// const multiplyByTwo = multiplyBy(2);
// console.log(multiplyByTwo(4));
//
// const multiplyByTen = multiplyBy(10);
// console.log(multiplyByTen(3));
//
//OR
//
// const multiplyBy = (num1) => (num2) => num1 * num2;
// const multiplyByTwo = multiplyBy(2);
// console.log(multiplyByTwo(4));
//
// const multiplyByTen = multiplyBy(10);
// console.log(multiplyByTen(3));


//CLOSURES - lexical scoping
//A closure can not only access the variables defined in its outer function
// but also the arguments of the outer function.
//
//

//
//
// const boo = (string) => (name) => (name2) =>
//         console.log(`${string} ${name} ${name2}`);
//
// const booString = boo("hi");
// const booStringName = booString;
//

//Closures - Memory efficient
// function heavyDuty(index) {
//     const bigArray = new Array(7).fill("Elena");//every time we call this function we create this memory
//     console.log("created");
//     return bigArray[index];
//
// }
// heavyDuty(3);//data is stored into the created memory
// heavyDuty(3);
// heavyDuty(3);
// heavyDuty(3);
//
// const getHeavyDuty = heavyDuty2();
// getHeavyDuty(7);
// getHeavyDuty(1);
// getHeavyDuty(2);
//
// function heavyDuty2() {
//     const bigArray = new Array(7).fill("Elena");//every time we call this function we create this memory
//     console.log("created again");
//     return function (index) {
//         return bigArray[index];
//     };
// }
//
// heavyDuty2();

//Closures - Encapsulation
// const makeNuclearButton = () => {
//     let timeWithoutDestruction = 0;
//     const passTime = () => timeWithoutDestruction++;
//     const totalPeaceTime = () =>  timeWithoutDestruction;
//     const launch = () => {
//         timeWithoutDestruction = -1;
//         return "hello";
//     };
//     setInterval(passTime, 1000);
//     return {
//         totalPeaceTime: totalPeaceTime
//     }
// };
// const ohno = makeNuclearButton();
// console.log(ohno.totalPeaceTime());


//closures - exercise 1
// function callMeMaybe() {
//     const callMe = "Hi! I'm now here";
//
//     setTimeout(function () {
//         console.log(callMe);
//     }, 0);
//
// }
// callMeMaybe();

//closures - exercise 2
// let view;
// function initialize() {
//     let called = 0;
//     return function(){
//         if (called > 0){
//             return;
//         }else {
//             view = "hello";
//             called++;
//             console.log("view has been set")
//
//         }
//     }
// }
//
// const startOnce = initialize();
// startOnce();
// startOnce();
// console.log(view);

//closures - exercise 3
// const array = [1,2,3,4];
// for(var i=0; i<array.length; i++) {
//     (function(closureI) {
//         setTimeout(function () {
//             console.log("I'm at index " + array[closureI])
//         }, 1000);
//     }) (i);
// }

//CLOSURES - MY EXAMPLES

//EX. 1
// function person() {
//     let name = 'Peter';
//
//     return function displayName() {
//         console.log(name);
//     };
// }
// let peter = person();
// peter(); // prints 'Peter'

//EX. 2
// function getCounter() {
//     let counter = 0;
//     return function() {
//         return counter++;
//     }
// }
// let count = getCounter();
// console.log(count());  // 0
// console.log(count());  // 1
// console.log(count());  // 2

//EX. 3
// let name = "John";
//
// function sayHi() {
//     alert("Hi, " + name);
// }
//
// name = "Pete";
// sayHi(); // "Pete"

//EX. 4
// function makeWorker() {
//     let name = "Pete";
//
//     return function() {
//         alert(name);
//     };
// }
//
// let name = "John";
//
// // create a function
// let work = makeWorker();
//
// // call it
// work();//"Pete"

// EX. 5
// function initializeData() {
//     var myVar = 1;
//     return {
//         getVar: function() {
//             return myVar;
//         },
//         setVar: function(v) {
//             myVar = v;
//         }
//     };
// }
//
// obj = initializeData();
//
// console.log(obj.getVar()); // 1
//
// obj.setVar(2);
// console.log(obj.getVar()); // 2
//
// obj.setVar("string");
// console.log(obj.getVar()); // string


//PROTOTYPES

//inheritance by bind method
// let dragon = {
//     name: "Tanya",
//     fire: true,
//     fight() {
//         return 5
//     },
//     sing() {
//         if (this.fire) {
//             return `I am ${this.name}, the breather of fire`
//         }
//     }
// };
//
// let lizard = {
//     name: "Kite",
//     fight() {
//         return 1
//     },
// };
//
// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());

//inheritance by proto
// lizard.__proto____ = dragon;//we should never use this syntax
// lizard.fight();
//
//
// lizard.__proto__= dragon;
// for (let prop in lizard){
//     if (lizard.hasOwnProperty(prop)){
//         console.log(prop);
//     }
// }

// inheritance by prototype-----------
//Only functions have a prototype property and it references to an object,
// used to attach properties that will be inherited by objects for further down
//the prototype chain. The last object in the chain is this built-in Object.prototype
//Objects ia a function because it has a prototype. Object.prototype is a base object

//Object.create()
// let human = {
//   mortal: true
// };
// let socrates = Object.create(human);
// socrates.age = 45;
// console.log(socrates.age);
// console.log(human.isPrototypeOf(socrates));

//rules
// cost obj = {};//undefined
// obj.prototype// undefined
//
// arr = []; //undefined
// arr.prototype; //undefined
//
//'string'.prototype  //undefined
//String.prototype // works

//exercise 1
// Date.prototype.lastYear = function() {
//     return this.getFullYear() - 1;
// };
//
// new Date().lastYear();

//exercise 2
// Array.prototype.map = function(){
//     let arr = [];
//     for( let i =0; i < this.length; i++ ){
//         arr.push((this[i] + ""));
//     }
//     return arr;
// };

//exercise 3
// Function.prototype.bind = function(whoIsCallingMe){
//     const self = this;
//     return function(){
//         return self.apply(whoIsCallingMe, arguments);
//     };
// }

//CONSTRUCTOR FUNCTIONS
//only functions have access to prototypes
// function Elf(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
// }
//
// Elf.prototype.attack = function () { // we should not use lexical scoped arrow functions
//     return this.name + " attacks with " + this.weapon
// };
//
// Elf.prototype.build = function () {
//     const self = this;
//     function building() {
//         return self.name + " builds a house";
//     }
//     return building();
// };
//
// const elf1 = new Elf("Frodo", "fire");
// const elf2 = new Elf("Freddy", "sword");
//
// console.log(elf1.attack());
// console.log(elf1.build());
// console.log(elf2.attack());
// console.log(elf2.build());

// OBJECT.CREATE()

// var superHuman = {
//     usePower: function () {
//         console.log(this.superPower + "!");
//     }
// };
//
// var banshee = Object.create(superHuman, {
//     name: { value: "Silver Banshee" },
//     superPower: { value: "sonic wail" }
// });
//
// banshee.usePower(); // Outputs: "sonic wail!"

// var superHero = Object.create(superHuman, {
//     allegiance: { value: "Good" },
//     saveTheDay: {
//         value: function () {
//             console.log(this.name + " saved the day!");
//         }
//     }
// });
//
// var marvel = Object.create(superHero, {
//     name: { value: "Captain Marvel" },
//     superPower: { value: "magic" }
// });
//
// // Outputs: "Captain Marvel saved the day!"
// marvel.saveTheDay();


//ES 6 CLASSES
// class Elf {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return this.name + " attacks with " + this.weapon
//     }
// }
//
// const elf1 = new Elf("Frodo", "fire");
// const elf2 = new Elf("Freddy", "sword");
//
// console.log(elf1.attack());
// console.log(elf2.attack());

// class Character {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//
//     attack() {
//         return this.name + " attacks with " + this.weapon
//     }
// }
//
// class Elf extends Character {
//     constructor(name, weapon, type) {
//         super(name, weapon); // must always be inside the constructor
//         this.type = type;
//     }
// }
//
// class Ogre extends Character {
//     constructor(name, weapon, color) {
//         super(name, weapon);
//         this.color = color;
//     }
//
//     makeFort() {
//         return this.name + " builds the strongest fort in the world made";
//     }
// }
//
// const fiona = new Elf("Fiona", "a karate star", "house");
// console.log(fiona.attack());
//
//
// const shrek = new Ogre("Shrek", "club", "green");
// console.log(shrek.makeFort());
