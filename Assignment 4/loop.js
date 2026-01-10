// 1. Counting from 1 to 20
function Q1() {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}
// Q1()


// 2. Sum of First 10 Numbers
let Q2 = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum = sum + i;
    }
    console.log(sum)
}
// Q2()


// 3. Multiplication Table of 5
let Q3 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i * 5);
    }
}
// Q3()


// 4. Print Numbers from 1 to 100
let Q4 = () => {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
// Q4()


// 5. Sum of Odd Numbers
let Q5 = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}
// Q5()


// 6. Count Down from 20 to 1
let Q6 = () => {
    for (let i = 20; i >= 1; i--) {
        console.log(i);
    }
}
// Q6()


// 7. Print Multiples of 3
let Q7 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i * 3);
    }
}
// Q7()


// 8. Print Squares of Numbers
let Q8 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i ** 2);
    }
}
// Q8()


// 9. Sum of First 100 Numbers
let Q9 = () => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum = sum + i;
    }
    console.log(sum)
}
// Q9()


// 10. Print Cube of Numbers
let Q10 = () => {
    for (let i = 1; i <= 5; i++) {
        console.log(i ** 3);
    }
}
// Q10()


// 11. Print Numbers in Reverse Order
let Q11 = () => {
    for (let i = 50; i >= 1; i--) {
        console.log(i);
    }
}
// Q11()


// 12. Count Down Odd Numbers
let Q12 = () => {
    for (let i = 20; i >= 1; i--) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
// Q12()


// 13. Sum of First 5 Odd Numbers
let Q13 = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    console.log(sum);
}
// Q13()


// 14. Print the First 10 Positive Integers
let Q14 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
// Q14()


// 15. Print Powers of 2
let Q15 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(2 ** i);
    }
}
// Q15()


// 16. Sum of First 10 Even Numbers
let Q16 = () => {
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += (i * 2);
    }
    console.log(sum)
}
// Q16()


// 17. Print Multiples of 4
let Q17 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i * 4);
    }
}
// Q17()


// 18. Print First 5 Prime Numbers
let Q18 = () => {
    let count = 0;
    let num = 2;
    while (count < 5) {
        let Prime = true;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                Prime = false;
                break;
            }
        }
        if (Prime == true) {
            count++;
            console.log(num);
        }
        num++;
    }
}
// Q18()


// 19. Reverse Counting Even Numbers
let Q19 = () => {
    for (let i = 30; i >= 10; i--) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
// Q19()