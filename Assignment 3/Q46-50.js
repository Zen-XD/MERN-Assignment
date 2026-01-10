// 46. Check for Digit
let digit = 5;

if (typeof (digit) == "number") {
    console.log("Digit");
}
else {
    console.log("Not a digit");
}


// 47. Check for Exclamation
let str = "yo!!";

if (str.endsWith("!") == true) {
    console.log("Exclamation mark");
}
else {
    console.log("No exclamation mark");
}


// 48. Day Check
let day = "Wednesday";

if (day == "Saturday" || day == "Sunday") {
    console.log("Weekend");
}
else {
    console.log("Weekday");
}


// 49. Check Square Number
let num = 121;
let p_square = false;

for (let i = 0; i * i <= num; i++) {
    if ((i ** 2) == num) {
        p_square = true;
    }
    else {
        continue;
    }
}
if (p_square == true) {
    console.log("Perfect Square");
}
else {
    console.log("Not a perfect square");
}


// 50. Temperature Range Check
let temp = 22;

if (temp >= 15 && temp <= 25) {
    console.log("Comfortable");
}
else {
    console.log("Uncomfortable");
}