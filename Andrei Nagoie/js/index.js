//es10
//
//flat()
//
// const array = [1,[2,3],4];
// array.flat(2);//destroys nested arrays
//
// const entries = ['bob', ,,,,,,, "cindy"];
// entries.flat()//cleans up the array of commas
//
//flatMap()
//
// const arr = [1,2,3,4,5,6];
// var newArr = arr.flatMap(el => el + " !");//adds ! to all el ans saves new array
// console.log(newArr);
//
//trimStart()/trimEnd()
//
// const user1 = '            Elena';
// const user2 = 'Ricardo          ';
// console.log(user1.trimStart());
// console.log(user2.trimEnd());
//
//fromEntries()
//
// userProfiles = [['commanderTom', 23], ['commanderDerek', 33],['commanderAlex', 43]];
// Object.fromEntries(userProfiles); // turns nested arrays into objects
//
//try{} catch(<no error parameter>){}
//
// try {
//     true + "hi"
// } catch {
//     console.log('you messed up' + error)
// }
//
//homework
//
// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// const array = [[1],[2],[3],[[[4]]],[[[5]]]];
// const newArray = array.flat(2);
// console.log(newArray);
//
// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting =
//     [
//         ["Hello", "young", "grasshopper!"],
//         ["you", "are"],
//         ["learning", "fast!"]
//     ];
// const newGreeting = greeting.flat();
// console.log(newGreeting);
//or
//console.log(greeting.flatMap(x => x.join(' ')))
//
//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
// const newGreeting1 = greeting.flat().join(" ");
// console.log(newGreeting1);
//or
//console.log(greeting.flatMap(x => x.join(' ')).join(' '))
//
//
//#4 Turn the trapped 3 number into: [3]
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
// const trappedArray = trapped.flat(Infinity);
// console.log(trappedArray);
//
//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   ';
// const newUserEmail13 = userEmail3.trimStart().trimEnd();
// console.log(newUserEmail13);
//
//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = {user1: 18273, user2: 92833, user3: 90315};
// const usersNew = Object.entries(users);// turned into an array
// console.log(usersNew);
//
//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// updatedUsersArray = usersNew.map((user) => [user[0], user[1] * 2]);
// console.log(updatedUsersArray);
//
//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
// const updatedObject = Object.assign({}, updatedUsersArray);
// const updatedObject = Object.fromEntries(updatedUsersArray);
// console.log(updatedObject);

//es8
//
//adding padding
// 'cat'.padStart(10);
// 'cat'.padEnd(10);
//
//// const first = () => {
// //     const greet = "Hi";
// //     const second = () => {
// //         const name = "Bobby";
// //         alert(greet);
// //     };
// //     return second;
// // };
// // const newFunc = first();
// // newFunc();
//homework
//
// #1) Line up the Turtle and the Rabbit at the start line:
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';
//
// console.log(startLine);
// console.log('🐢'.padStart(7));
// console.log('🐇'.padStart(7));
//
// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
// turtle = turtle.trim().padEnd(9, '=');//trim removes whitespace
//
//vertical expression
// const fun = (a,
//              b,
//              c,
//              d) => {
//     console.log(a)
// };
// fun(1,2,3,4);
//
//Object.values         - shows objects' properties' values
//Object.entries        - shows more details of the object
//Object.keys           - allows us to use an object as an array
//
// let obj = {
//     username: 'Santa',
//     username2: 'Rudi',
//     username3: 'Grinch'
// };
// Object.keys(obj).forEach((key, index) => {
//     console.log(key, obj[key]);
// });
// Object.values(obj).forEach(value => {
//     console.log(value);
// });
// Object.entries(obj).forEach(value => {
//     console.log(value);
// });
// Object.entries(obj).map(value => {
// return  value[1] + value[0].replace('username', '');
// });
//
//homework
// #3) Get the below object to go from:
// let obj = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
// };
// // to this:
// 'my name is Rudolf the raindeer'
//
//solution
//
// let obj = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
// };
// Object.entries(obj).map(value => value.join(" ")).join(" ");

//es7
//
// const pets = ['cat', 'dog', 'bird'];
// pets.includes('cat');
//
// const square = (x) => x**2;
// console.log(square(8));
//
//homework
//
// #1) Check if this array includes the name "John".
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// dragons.includes("John");
//
// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// dragons.filter(name => name.includes("John"));// ['Johnathan']
//
// #3) Create a function that calulates the power of 100 of a number entered as a parameter
// const hundred = (x) => x**100;
// console.log(hundred(2));
//
// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
// const hundred = (x) => x**10000;
// console.log(hundred(2));


//BY REFERENCE OR BY VALUE
//
//primitives are passed by value
//objects are passed by reference
// var a = 5;
// var b = a;
// b++;
// console.log(b);
// console.log(a);
//
// let obj1 = {
//     name: "Yao",
//     password: "123"
// };
// let obj2 = obj1;
//
// obj2.password = "easypeasy";
// console.log(obj1);
// console.log(obj2);
//
// var c = [1,2,3,4,5];
// var d = [].concat(c);//to make a copy
// d.push(7890);
// console.log("c "+ c);
// console.log("d " + d);
//
// let obj = {a: "a", b: "b", c: {deep: "try and copy me"}};
// let clone = Object.assign({}, obj);//clone an object
// let clone2 = {...obj};
// let superClone = JSON.parse(JSON.stringify(obj));// c will  not be affected
//
// obj.c.deep = 8;//clone & clone2 are not affected, only obj is affected
// console.log(obj);
// console.log(clone);
// console.log(clone2);
// console.log(superClone);
//
//homework
//#2 what is the value of property a for each object.
// const object1 = { a: 5 }; //4
// const object2 = object1; //4
// const object3 = object2; //4
// const object4 = { a: 5}; //5
// object1.a = 4;//4

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

//setTimeout
// console.log('1');
// setTimeout(() => {
//     console.log('2');
// }, 2000);
// console.log("3");







