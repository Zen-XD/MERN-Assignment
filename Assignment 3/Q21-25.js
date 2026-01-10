// 21. Check Negative
let num = -30;

if (num < 0) {
    console.log("Negative");
}
else {
    console.log("Positive");
}


// 22. Password Match
let pw = "qwertyuiop"

if (pw == "qwertyuiop") {
    console.log("Access Granted");
}
else {
    console.log("Access Denied");
}


// 23. Greater Number
let num1st = 23;
let num2nd = 89;

if (num1st > num2nd) {
    console.log("First is greater")
}
else {
    console.log("Second is greater or equal")
}


// 24. Prime Check
let primenum = 37;
let primecheck = 0;

for (let i = 2; i < primenum; i++) {
    if (primenum % i == 0) {
        primecheck += 1;
    }
    else {
        continue;
    }
}

if (primecheck == 0) {
    console.log("Prime");
}
else {
    console.log("Not Prime");
}


// 25. Eligible for Discount
let age = 89;

if (age >= 65) {
    console.log("Eligible for senior discount")
}
else {
    console.log("Not eligible")
}