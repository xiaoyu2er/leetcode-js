/**
 * https://leetcode.com/problems/unique-binary-search-trees/description/
 * Difficulty:Medium
 *
 * Given n, how many structurally unique BST's (binary search trees) that store values 1...n?
 * For example,
 * Given n = 3, there are a total of 5 unique BST's.
 *
 *   1         3     3      2      1
 *    \       /     /      / \      \
 *    3      2     1      1   3      2
 *   /      /       \                 \
 *  2      1         2                 3
 *
 */


/**
 * G(n): the number of unique BST for a sequence of length n.
 * F(i, n), 1 <= i <= n: the number of unique BST, where the number i is the root of BST, and the sequence ranges from 1 to n.
 *
 * G(n) = F(1, n) + F(2, n) + ... + F(n, n).
 * G(0)=1, G(1)=1.
 *
 * F(i, n) = G(i-1) * G(n-i)    1 <= i <= n
 * G(n) = G(0) * G(n-1) + G(1) * G(n-2) + … + G(n-1) * G(0)
 *
 *
 *
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    var dp = [1, 1];

    for (var i = 2; i <= n; i++) {
        dp[i] = 0;
        for (var j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - j - 1];
        }
    }
    return dp[n];
};

console.log(numTrees(1));
console.log(numTrees(2));
console.log(numTrees(3));