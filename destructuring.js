/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30,26, 27];
// let john = ages[0];
// let mary = ages [1];
//let jeo = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, jeo);
// Destructuring objects
let jobs = {
   mike: "programmer",
   jill: "designer",
   alicia: "engineer",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);


// Destructuring subsets
let languages = ["en", "fr ", "sp", "jp"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "spanish",
    fourthLanguage: "japanese",
};
let { firstLanguage, secondLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);


// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", cherry];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let  favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let { brian, anna, sarah, andrea } = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(sarah);

