/**
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 * Difficulty:Medium
 *
 * Given a non-empty array of integers, return the k most frequent elements.
 *
 * For example,
 * Given [1,1,1,2,2,3] and k = 2, return [1,2].
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 *
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
    }

    var keys = Object.keys(map);
    keys.sort((a, b) => {
        if (map[a] > map[b]) return -1;
        if (map[a] < map[b]) return 1;
        return 0;
    });
    // console.log(map, keys);
    return keys.slice(0, k).map(a => parseInt(a));
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 4], 2));