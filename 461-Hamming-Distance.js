/**
 * https://leetcode.com/problems/hamming-distance/description/
 * Difficulty:Easy
 *
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * Given two integers x and y, calculate the Hamming distance.
 * Note:
 * 0 ≤ x, y < 231.
 * Example:
 * Input: x = 1, y = 4
 * Output: 2
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ↑   ↑
 * The above arrows point to positions where the corresponding bits are different.
 *
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {

    var z = x ^ y;
    var ret = 0;
    while (z) {
        ret += z % 2;
        z = Math.floor(z / 2);
    }
    return ret;

};

console.log(hammingDistance(1, 4));