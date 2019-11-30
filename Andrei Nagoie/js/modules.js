
//IIFY
// //js1 first loaded
// var myApp = {};
// //js2
// (function () {
//     myApp.add = function (a, b) {
//         return a + b;
//     }
// })();

//Module Bundle
// //js1
// module.exports = function add(a,b) {
//     return a+b;
// };
// //js2
// var add = require("./add");

//ES6 + Webpack2
//js1
// export const add = (a,b) => a + b;
// //or
// export default function add() {
//     return a + b;
// }
//
// //js2
// import {add} from './add';
// //or
// import add from './add';

//webpack
// module.exports = {
//     entry: './app/main.js',
//     output: {
//         path: './dist',
//         filename: 'bundle.js'
//     }
// };