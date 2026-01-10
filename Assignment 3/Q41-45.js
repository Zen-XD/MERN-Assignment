// 41. String Length Even
let str1 = "qwertyuiop";
let length = str1.length

if (length % 2 == 0) {
    console.log("Even length");
}
else {
    console.log("Odd length");
}


// 42. Temperature Conversion
let temp = 45;

if (temp > 100) {
    console.log("Above boiling point");
}
else {
    console.log("Below boiling point");
}


// 43. Work Hours Check
let time = "8PM";

if ((time >= "9AM" && time <= "11AM") || (time == "12PM") || (time >= "1PM" && time <= "5PM")) {
    console.log("Working hours");
}
else {
    console.log("Off hours");
}


// 45. Check Odd Number
let num = 45;

if (num % 2 != 0) {
    console.log("Odd");
}
else {
    console.log("Even");
}