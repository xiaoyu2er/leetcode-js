/**
 * Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

 Example 1:
 Input: [5, 4, 3, 2, 1]
 Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
 Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal".
 For the left two athletes, you just need to output their relative ranks according to their scores.
 Note:
 N is a positive integer and won't exceed 10,000.
 All the scores of athletes are guaranteed to be unique.
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {

    var medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    var ranks = [];
    Array.prototype.push.apply(ranks, nums);
    ranks.sort(function (a, b) {
        return b - a;
    });

    return nums.map((n) => {
        var rank = ranks.indexOf(n);
        return medals[rank] || (rank + 1) + '';
    });
};

// ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
console.log(findRelativeRanks([10, 3, 8, 9, 4]));

console.log(findRelativeRanks([5, 4, 1, 2, 3]));