//my age as a variable
let myAge = 18;
//early years variable set to 2
let earlyYears = 2;

earlyYears *= 10.5;
//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
let laterYears = myAge - 2;
//later years in dog years
laterYears *= 4;
//calculates total dog age
myAgeInDogYears = earlyYears + laterYears;

let name = 'Abu'.toLowerCase();
console.log(`My name is ${name}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
