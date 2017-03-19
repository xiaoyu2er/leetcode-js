/**
 * Given two arrays, write a function to compute their intersection.

 Example:
 Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

 Note:
 Each element in the result must be unique.
 The result can be in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

    var ret = [];
    var map1 = nums1.reduce((map, n) => {
        if (!map[n]) map[n] = 1;
        return map;
    }, {});

    var map2 = nums2.reduce((map, n) => {
        if (map1[n] && !map[n]) {
            ret.push(n);
            map[n] = 1;
        }
        return map;
    }, {});

    return ret;
};
console.log(intersection([1, 2, 2, 1], [2, 2]));