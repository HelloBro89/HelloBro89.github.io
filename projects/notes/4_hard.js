var findMedianSortedArrays = function (nums1, nums2) {
    let sum = nums1.length + nums2.length;
    let mid = Math.floor(len / 2 + 1);
    let i = 0;
    let j = 0;
    let k = 0;
    let last;
    let beforeLast;

    while (i++ < mid) {
        beforeLast = last;
        last = nums1[j] < (nums2[k] ?? Infinity) ? nums1[j++] : nums2[k++];
    }
    return sum % 2 === 1 ? last : (last + beforeLast) / 2;
};

let nums1 = [2, 4, 5];
let nums2 = [3, 6];

console.log(findMedianSortedArrays(nums1, nums2));



//                   first way 


// let findMedianSortedArrays = function (nums1, nums2) {

//     let array = nums1.concat(nums2).sort((a, b) => a - b);

//     let ind = Math.floor(array.length / 2);

//     let median = (array.length % 2 === 1) ? array[ind] :
//         (array[ind] + array[ind - 1]) / 2;
//     return median;
// };

// let nums1 = [1, 3];
// let nums2 = [2];

// console.log(findMedianSortedArrays(nums1, nums2));