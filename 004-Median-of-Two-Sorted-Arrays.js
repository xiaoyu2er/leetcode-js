/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 * Difficulty:Hard
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 *
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 * *
 */


function kth(arr1, s1, n1, arr2, s2, n2, k) {
    // console.log(arr1, s1, n1, arr2, s2, n2, k);
    // console.log('-----------');
    if (k < 1 || k > n1 + n2) return -1;

    if (n1 > n2) {
        return kth(arr2, s2, n2, arr1, s1, n1, k);
    }

    if (n1 === 0) {
        return arr2[s2 + k - 1];
    }

    if (k === 1) {
        return arr1[s1] < arr2[s2] ? arr1[s1] : arr2[s2];
    }

    var newK = k >> 1;

    if (n1 < newK) {
        newK = n1;
    }

    if (arr1[s1 + newK - 1] < arr2[s2 + newK - 1]) {
        return kth(arr1, s1 + newK, n1 - newK, arr2, s2, n2, k - newK);
    } else {
        return kth(arr1, s1, n1, arr2, s2 + newK, n2 - newK, k - newK);
    }

}

// var arr1 = [2, 3, 6, 7, 9];
// var arr2 = [1, 4, 8, 10];
// console.log([...arr1, ...arr2].sort(function (a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// }));
//
// console.log('=======');
// console.log(kth(arr1, 0, 5, arr2, 0, 4, 1), 1);
// console.log(kth(arr1, 0, 5, arr2, 0, 4, 2), 2);
// console.log(kth(arr1, 0, 5, arr2, 0, 4, 3), 3);
// console.log(kth(arr1, 0, 5, arr2, 0, 4, 4), 4);
// console.log(kth(arr1, 0, 5, arr2, 0, 4, 5), 6);
// console.log(kth(arr1, 0, 5, arr2, 0, 4, 6), 7);
// console.log(kth(arr1, 0, 5, arr2, 0, 4, 7), 8);
// console.log(kth(arr1, 0, 5, arr2, 0, 4, 8), 9);
// console.log(kth(arr1, 0, 5, arr2, 0, 4, 9), 10);

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    var n1 = nums1.length;
    var n2 = nums2.length;

    var mid = Math.floor((n1 + n2) / 2);
    if ((n1 + n2) % 2 === 0) {
        return (kth(nums1, 0, n1, nums2, 0, n2, mid) + kth(nums1, 0, n1, nums2, 0, n2, mid + 1)) / 2;
    } else {
        return kth(nums1, 0, n1, nums2, 0, n2, mid + 1);
    }
};

console.log(findMedianSortedArrays([1, 3, 4], [2, 5]));
console.log(findMedianSortedArrays([1, 3, 4], [2, 5, 6]));