// 16. Divisibility Check

let number = 234;

if (number % 3 == 0) {
    console.log("Divisible by 3");
}
else {
    console.log("Not divisible by 3");
}


// 17. Morning or Afternoon

let time = "6 AM";

if (time < "12 PM") {
    console.log("Afternoon");
}
else {
    console.log("Morning");
}


// 18. Teenager Check

let age = 15;

if (age >= 13 && age <= 19) {
    console.log("Teenager");
}
else {
    console.log("Not a Teenager");
}


// 19. String Content Check

let str = "akbs";

if (str.includes('a')) {
    console.log("Contains 'a'");
} else {
    console.log("Does not contain 'a'");
}


// 20. Leap Year Check

let year = 2066;

if (year % 4 == 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}