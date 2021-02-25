
//3333333333333333


function reverse(x) {
    let ret = "";
    if (x === 0) {
        ret = 0
    } else {
        x = String(x);
        for (let i = x.length - 1; i >= 0; i--) {
            ret = (x[i] === "-") ? "-" + ret :
                (x[x.length] === "0") ? ret : ret + x[i];
        }
        ret = Number(ret)
        ret = (ret >= (-2) ** 31 && ret <= 2 ** 31) ? ret : 0
    }
    return ret;
}
console.log(reverse(-102));


//3333333333333333

// function reverse(x) {
//     let ret = "";
//     (x === 0) ? ret = 0 :
//         x = String(x);
//     for (let i = x.length - 1; i >= 0; i--) {
//         ret = (x[i] === "-") ? "-" + ret :
//             (x[i] === "0") ? ret : ret + x[i];
//     }
//     return ret;
// }
// console.log(reverse(-123));


// 22222222222222222222

// function reverse(x) {
//     x = String(x);
//     let ret = "";
//     for (let i = x.length - 1; i >= 0; i--) {
//         ret = x[i] === "-" ? "-" + ret : ret + x[i];
//     }
//     return ret;
// }
// console.log(reverse(-123));


// 2222222222222222

// function reverse(x) {
//     x = String(x);
//     let ret = "";
//     for (let i = x.length - 1; i >= 0; i--) {
//         if (x[i] === "-") {
//             ret = "-" + ret;
//             continue;
//         }
//         ret += x[i];
//     }
//     console.log(ret);
// }
// reverse(-1234567890);


// 111111111111

// function reverse(x) {
//     x = String(x);
//     let ret = "";

//     for (let i = 2; i >= 0; i--) {
//         ret += x[i]
//     }
//     console.log(x)
// }


// reverse(456)