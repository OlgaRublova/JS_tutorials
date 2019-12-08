//Question 1:
// Clean the room function:
// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2]
// should return [[1,2], ["2", "3"]]

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const sortNumbers = array.sort(((a, b) => a - b)); //ascending order
console.log(sortNumbers);
const sortNumbers1 = sortNumbers.filter(el => el === 1);
const sortNumbers2 = sortNumbers.filter(el => el === 2);
const sortNumbers20 = sortNumbers.filter(el => el === 20);
console.log(sortNumbers1);
console.log(sortNumbers2);
console.log(sortNumbers20);

const ArrayFromAbove = [
    [sortNumbers1],
    [sortNumbers2],
    array[7],
    array[8],
    array[9],
    [sortNumbers20],
    array[12],
    array[13],
    array[14],
    array[15]
];
console.log(ArrayFromAbove);

