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



//PROTOTYPES
