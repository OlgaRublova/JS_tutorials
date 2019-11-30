//-----Objects-----
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
//Advanced objects

//reference type
// var object1 = {value: 10};
// var object2 = object1;
// var object3 = {value: 10};
//

// context
// const object4 = {
//     a: function () {
//         console.log(this)
//     }
// };
//

// instantiation(!!!!)
//making multiple copies of an object
// class Player {
//     constructor(name, type){
//         this.name = name;
//         this.type = type;
//     }
//     introduce() {
//         console.log(`Hi, I'm ${this.name}, I'm a ${this.type}`);
//     }
// }
//
// class Wizard extends Player {
//     constructor(name, type){
//         super(name, type);//use super(<shows what you want to add>) whenever you want to extend a class
//     }
//     play(){
//         console.log(`Eweeeeeeee I'm a ${this.type}`);
//     }
// }
// const wizard1 = new Wizard("Shelly", "Healer");
// const wizard2 = new Wizard("Bob", "Magic");
//

//homework
//
//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
//
// class Animal {
//     constructor(name, type, color) {
//         this.name = name;
//         this.type = type;
//         this.color = color;
//     }
// }
//
// class Mamal extends Animal {
//     constructor(name, type, color) {
//         super(name, type, color)
//     }
//
//     sound() {
//         console.log(`moooo, my name is ${this.name}, I belong to ${this.type} and I'm perfectly ${this.color}`);
//     }
// }
//
// var cow = new Mamal("Elisa", "beauty", "white");
// cow.sound();