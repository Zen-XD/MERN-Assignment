// 36. Empty String Check
let str1 = "qwertyuiop";
let length = str1.length

if (length == 0) {
    console.log("Empty");
}
else {
    console.log("Not Empty");
}


// 37. Multiple of 4
let num = 68;

if (num % 4 == 0) {
    console.log("Multiple of 4");
}
else {
    console.log("Not a multiple of 4");
}


// 38. Day of the Week
let day = "Sunday";

if (day == "Sunday") {
    console.log("Sunday");
}
else {
    console.log("Not Sunday");
}


// 39. String Starts with A
let str2 = "Aidfd";

if (str2.startsWith("A") == true || str2.startsWith("a") == true) {
    console.log("Starts with A");
}
else {
    console.log("Does not start with A");
}


// 40. Check for Space
let str3 = "dhsd lsdkj"

if (str3.includes(" ")) {
    console.log("Contains space");
}
else {
    console.log("No space");
}