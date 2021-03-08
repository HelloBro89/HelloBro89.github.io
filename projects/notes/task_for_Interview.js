// № 30

let findSubstring = function (s, words) {

    // let str = '';
    // let output = [];
    let num = words.length;
    let length = words.length;
    let n = 0;
    let point = 0;

    for (let i = words.length - 1; i > 1; i--) {
        num *= i;
    }

    for (let i = 1; i < length + 1; i++) {

        // console.log(words.join(''));
        console.log(point++)
        for (let j = 1, w = 1; j < length + 1; j++, w++) {
            console.log(point++)
            if (point === num) {
                console.log("tut 1");
                return
            }
            if (w === length - 1) {
                w = 1;
                console.log(point++);
                if (point === num) {
                    console.log("tut 2")
                    return
                }
            }
            console.log(point++);
            // [words[j], words[j + 1]] = [words[j + 1], words[j]];
            // console.log(words.join(''));

            if (point === num) {
                console.log("tut 3")
                return
            }
        }

        // [words[0], words[i]] = [words[i], words[0]];
    }
}

let s = "barfoothefoobarduckman";
let words = ["1", "2", "3", '4'];

findSubstring(s, words);



// for array HARD

let findMedianSortedArrays = function (nums1, nums2) {

    if (nums1.length === 0 && nums2.length === 1) {
        return nums2[0]
    } else if (nums2.length === 0 && nums1.length === 1) {
        return nums1[0]
    }
    let array = nums1.concat(nums2);
    let num = 0;
    for (let sort of array) {
        if (sort !== 0) {
            break;
        } else {
            num++;
        }
        if (num === array.length) return 0;
    }

    array = array.sort((a, b) => a - b);
    let ind = Math.floor(array.length / 2);

    let median = (array.length % 2 === 1) ? array[ind] :
        (array[ind] + array[ind - 1]) / 2;
    return median;
};

let nums1 = [0, 0];
let nums2 = [0, 0];

console.log(findMedianSortedArrays(nums1, nums2));

/////////////////////////////////////////////

function reverse(x) {
    let r = '';
    if (x === 0) {
        r = 0
    } else {
        x = String(x);
        x = (x % 10 === 0) ? x.slice(0, x.length - 1) : x;
        x = x.split('').reverse();

        if (x[x.length - 1] === '-') {
            x.splice(x.length - x.length, 0, x[x.length - 1]);
            x.splice(x.length - 1);

        }
        r = Number(x.join(''));
    }

    r = (r >= (-2) ** 31 && r <= 2 ** 31) ? r : 0;
    return (r);

}

reverse(-1230)

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