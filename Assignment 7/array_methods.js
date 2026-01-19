const Q1 = () => {
    const arr = [1, 2, 3, 4, 5]
    arr.forEach(function (value) {
        console.log(value);
    })
}
// Q1();



const Q2 = () => {
    const nums = [10, 20, 30];
    let arr = nums.map((value) => {
        return value + 5;
    })
    console.log(arr);
}
// Q2();



const Q3 = () => {
    const arr = [5, 12, 18, 25, 40];
    let newArr = arr.filter((value) => {
        return value > 20;
    })
    console.log(newArr);
}
// Q3();



const Q4 = () => {
    const values = [2, 4, 6, 8];
    let sum = values.reduce((prev, current) => {
        return prev + current;
    })
    console.log(sum);
}
// Q4();



const Q5 = () => {
    const data = [3, -1, 7, 0]
    let check = data.some((value) => {
        return value < 0;
    })
    console.log(check);
}
// Q5();



const Q6 = () => {
    const arr = [5, 10, 15];
    let check = arr.some((value) => {
        return value > 0;
    })
    console.log(check);
}
// Q6();



const Q7 = () => {
    const arr = [12, 19, 25, 40];
    let find = arr.find((value) => {
        return value > 20;
    })
    console.log(find);
}
// Q7();



// const Q8 = () => {
//     const arr = [7, 14, 21, 28];
//     let find = arr.find((value, index) => {
//         if (value % 7 == 0) {
//             console.log(index);
//             return index;
//         }
//     })
//     console.log(find);
// }
// Q8();



const Q9 = () => {
    const colors = ["red", "blue", "green"];
    console.log(colors.includes("blue"));
}
// Q9();



const Q10 = () => {
    const a = [1, 2];
    const b = [3, 4];
    let arr = [...a, ...b];
    console.log(arr)
}
// Q10();



const Q11 = () => {
    const arr = [100, 200, 300];
    const [num1, num2] = arr;
    console.log(num1);
    console.log(num2);
}
// Q11();



const Q12 = () => {
    const nums = [9, 8, 7];
    let arr = [...nums];
    console.log(arr)
}
// Q12();



// const Q13 = () => {
//     const arr = [1, 2, 2, 3, 4, 4];
//     const newArr = arr.filter((value, index) => {
//         return arr.indexOf(value) === index
//     });
//     console.log(newArr);
// }
// Q13();



const Q14 = () => {
    const arr = [45, 12, 78, 34];
    arr.sort((a, b) => {
        return a - b;
    });
    console.log(arr);
}
// Q14();



const Q15 = () => {
    const arr = [1, 2, 3, 4];
    let newArr = [...arr];
    newArr.reverse();
    console.log(newArr);
}
// Q15();



// const Q16 = () => {
//     const arr = [10, 15, 20, 25];
//     let sum = arr.reduce((prev, current) => {
//         return current % 2 === 0 ? prev + 1 : prev;
//     }, 0);
//     console.log(sum);
// }
// Q16();



const Q17 = () => {
    const fruits = ["apple", "banana", "mango"];
    // let str = fruits.toString();
    // let upper = str.toUpperCase();
    // let arr1 = upper.split(',')
    // console.log(arr1);

    let arr2 = fruits.map((value) => {
        return value.toUpperCase();
    })
    console.log(arr2);
}
// Q17();



const Q18 = () => {
    const words = ["cat", "elephant", "dog"];
    let arr = words.filter((value) => {
        return value.length <= 3;
    })
    console.log(arr);
}
// Q18();



const Q19 = () => {
    const arr = [12, 45, 7, 89];
    let comp = arr.reduce((prev, current) => {
        return prev > current ? prev : current;
    });
    console.log(comp);
}
// Q19();



const Q20 = () => {
    const arr = [10, 20, 30, 40];
    arr.splice(2, 1);
    console.log(arr);
}
// Q20();



const Q21 = () => {
    const arr = [1, [2, 3], [4, 5]];
    let str = arr.toString();
    let upper = str.toUpperCase();
    let arr1 = upper.split(',')
    console.log(arr1);
}
// Q21();



const Q22 = () => {
    const arr = [5, 10, 15, 20];
    let sum = arr.reduce((prev, current) => {
        return (prev + current);
    })
    let avg = sum / arr.length;
    console.log(avg);
}
// Q22();



const Q23 = () => {
    const arr = [3, 6, 9, 12];
    let sortArr = arr.sort((a, b) => {
        return a - b;
    })
    check = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == sortArr[i]) {
            continue;
        }
        else {
            check = false;
            break;
        }
    }
    console.log(check);
}
// Q23();



const Q24 = () => {
    const arr = [1, 2, 3, 4, 5];
    arr.unshift(arr.pop());
    console.log(arr);
}
// Q24();



const Q25 = () => {
    const arr = [4, 8, 12, 16];
    let newArr = arr.map((value) => {
        return value / 2;
    })
    console.log(newArr);
}
// Q25();



const Q26 = () => {
    const arr = [1, 0, false, 5, "", 10];
    let newArr = arr.filter((value) => {
        if (value != 0) {
            return value;
        }
    })
    console.log(newArr);
}
// Q26();



const Q27 = () => {
    const arr = ["a", "b", "c"];
    let str = arr.join("");
    let newArr = str.split(',');
    console.log(newArr);
}
// Q27();



const Q28 = () => {
    let arr = [10, 20, 30];
    arr.splice(2, 0, 25);
    console.log(arr);
}
// Q28();



const Q29 = () => {
    const arr = [2, 4, 6, 8];
    let check = arr.every((value) => {
        return value % 2 == 0;
    })
    console.log(check)
}
// Q29();



const Q30 = () => {
    const arr = [1, 3, 5, 8];
    let check = arr.some((value) => {
        return value % 2 == 0;
    })
    console.log(check)
}
// Q30();



const Q31 = () => {
    const arr = [1, 2, 3, 4, 5];
    let sqr = arr.map((value) => {
        return value ** 2;
    })
    console.log(sqr);
}
// Q31();



// const Q32 = () => {
//     const arr = ["ram", "shyam", "hari"];
//     const result = arr.map((value) => {
//         return value.charAt(0).toUpperCase() + value.slice(1)
//     });
//     console.log(result);
// }
// Q32();



const Q33 = () => {
    const arr = [5, 15, 25, 35];
    let newArr = arr.filter((value) => {
        return value > 10 && value < 30;
    })
    console.log(newArr);
}
// Q33();



// const Q34 = () => {
//     const arr = [10, 20, 20, 30, 30];
//     const newArr = arr.filter((value, index) => {
//         return arr.indexOf(value) === index
//     });
//     console.log(newArr);
// }
// Q34();



const Q35 = () => {
    const arr = [1, 2, 3, 4];
    let sum = arr.reduce((sum, value) => {
        return sum + value;
    })
    console.log(sum);
}
Q35();