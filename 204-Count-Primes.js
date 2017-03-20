/**
 * https://leetcode.com/problems/count-primes/description/
 * Difficulty:Easy
 *
 * Description:
 * Count the number of prime numbers less than a non-negative number, n.
 */


/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n < 3) return 0;
    var cnt = 0;
    var p = new Array(n + 1).fill(1);
    p[1] = 0;
    for (var i = 2; i < n; i++) {
        if (p[i]) {
            cnt++;
            for (var j = i * 2; j <= n; j += i) {
                p[j] = 0;
            }
        }
    }
    // console.log(p);
    return cnt;
};

console.log(countPrimes(3));
console.log(countPrimes(4));
console.log(countPrimes(21));
console.log(countPrimes(27));
console.log(countPrimes(31));