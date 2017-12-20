/**
 * https://leetcode.com/problems/roman-to-integer/description/
 * Difficulty:Easy
 *
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * @see https://baike.baidu.com/item/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97
 *
 * 基本字符
 * I V  X  L  C   D   M
 * 1 5 10 50 100 500 1000
 * 相应的阿拉伯数字表示
 *
 * 计数方法
 * 相同的数字连写、所表示的数等于这些数字相加得到的数、如：Ⅲ=3；
 * 小的数字在大的数字的右边、所表示的数等于这些数字相加得到的数、 如：Ⅷ=8、Ⅻ=12；
 * 小的数字（限于 I、X 和 C）在大的数字的左边、所表示的数等于大数减小数得到的数、如：Ⅳ=4、Ⅸ=9；
 * 正常使用时、连写的数字重复不得超过三次；
 *
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    if (!s) return 0;

    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    var sum = map[s[s.length - 1]];
    for (var i = s.length - 2; i >= 0; i--) {
        if (map[s[i]] < map[s[i + 1]]) sum -= map[s[i]];
        else sum += map[s[i]];
    }
    return sum;
};

console.log(romanToInt('III'), 3);
console.log(romanToInt('VI'), 6);
console.log(romanToInt('IV'), 4);