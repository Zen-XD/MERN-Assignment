// 1. Print 1 to 10
function Q1() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
// Q1();


// 2. Sum of First 'n' Natural Numbers
let Q2 = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
// let sum = Q2(100);
// console.log(sum);


// 3. Even numbers between 1 and 20
let Q3 = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
// Q3();


// 4. Odd numbers between 1 and 20
let Q4 = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
// Q4();


// 5. Factorial of a given number `n`
let Q5 = (n) => {
    let fct = 1;
    for (let i = 1; i <= n; i++) {
        fct *= i;
    }
    return fct;
}
// let fct = Q5(5);
// console.log(fct);


// 6. Multiplication table of 5
let Q6 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i * 5);
    }
}
// Q6();


// 7. 10 to 1 in reverse order
let Q7 = () => {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}
// Q7();


// 8. Print Squares of Numbers
let Q8 = () => {
    for (let i = 1; i <= 30; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
// Q8();


// 9. Sum of all even numbers between 1 and 50
let Q9 = () => {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}
// sum = Q9();
// console.log(sum);


// 10. Sum of all odd numbers between 1 and 50
let Q10 = () => {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}
// sum = Q10();
// console.log(sum);


// 11. Numbers between 1 and 100 that are divisible by 5
let Q11 = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
}
// Q11();


// 12. First 10 numbers in the Fibonacci sequence
let Q12 = () => {
    console.log(1);
    console.log(1);
    let n1 = 1;
    let n2 = 1;
    for (let i = 1; i <= 8; i++) {
        let n3 = n1 + n2;
        console.log(n3);
        n1 = n2;
        n2 = n3;
    }
}
// Q12();


// 13. Number of digits in a given positive integer
let Q13 = (n) => {
    let digit = 0;
    for (; ;) {
        n = Math.trunc(n / 10);
        digit += 1;
        if (n == 0) {
            break;
        }
    }
    return digit;
}
// let digit = Q13(29435);
// console.log(digit)


// 14. Square of each number from 1 to 10
let Q14 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i ** 2);
    }
}
// Q14();


// 15. Sum of the squares of the first 'n' natural numbers
let Q15 = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += (i ** 2);
    }
    return sum;
}
// let sum = Q15(37);
// console.log(sum)


// 16. Cube of each number from 1 to 10
let Q16 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i ** 3);
    }
}
// Q16();


// 17. Smallest number greater than 0 that is divisible by both 3 and 4
let Q17 = () => {
    for (let i = 1; ; i++) {
        if (i % 3 == 0 && i % 4 == 0) {
            return i;
        }
    }
}
// let num = Q17();
// console.log(num);


// 18. First 10 even numbers
let Q18 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i * 2);
    }
}
// Q18();


// 19. Numbers from 1 to 100 that are divisible by both 2 and 5
let Q19 = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0 && i % 5 == 0) {
            console.log(i);
        }
    }
}
// Q19();


// 20. Sum of all multiples of 3 or 5 below 100
let Q20 = () => {
    let sum = 0;
    for (let i = 1; i < 100; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}
// let sum = Q20();
// console.log(sum);