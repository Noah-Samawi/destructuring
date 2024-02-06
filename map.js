/**
 * To run this file in Gitpod, use the 
 * commend node map.js in the terminal
 */


// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];

for (let num of nums) {
    results.push(num * 2);
}

console.log(results);

// Using map()
const multByTwo = function (num) {
    results = num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()

const simplified = nums.map(function (num) { return num * 2; });
console.log(simplified);

// with arrow functions
const arrow = nums.map(num => num * 2);
console.log(arrow);

//with  object:
const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skill: 'Javascript',
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skill: 'HTML',
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Developer',
        skill: 'CSS',
    },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);
