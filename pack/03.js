/**
 * 3 多重背包问题
 * 有 N 种物品和一个容量为 V 的背包。
 * 第 i 种物品最多有 Mi 件可用，每件耗费的 空间是 Ci ，价值是 Wi 。
 * 求解将哪些物品装入背包可使这些物品的耗费的空间总和不超 过背包容量，且价值总和最大。
 *
 * F[i，v] = max{F[i − 1, v − k∗Ci ] + k∗Wi | 0 ≤ k ≤ Mi }
 *
 * @param Cost
 * @param Worth
 * @param Much
 * @param V
 */
function pack(Cost, Worth, Much, V) {
    var n = Cost.length;
    var dp = [];
    while (dp.push(new Array(V + 1).fill(0)) < n + 1);

    for (var i = 1; i < n + 1; i++) {
        for (var v = 1; v < V + 1; v++) {
            var c = Cost[i - 1];
            var w = Worth[i - 1];
            var count = Math.min(Math.floor(v / c), Much[i - 1]);
            var max = 0;
            for (var t = 0; t <= count; t++) {
                var newV = dp[i - 1][v - t * c] + t * w;
                if (newV > max) max = newV;
            }
            dp[i][v] = max;

        }
    }

    for (var i = 1; i < dp.length; i++) {
        console.log(dp[i].slice(1))
    }

    return dp[n][V];
}

console.log(pack([5, 4, 7, 2, 6], [12, 3, 10, 3, 6], [2, 2, 1, 2, 7], 15));
console.log(pack([5, 4, 7, 2, 6], [12, 3, 10, 3, 6], [3, 2, 1, 2, 7], 15));
console.log(pack([5, 4, 7, 2, 6], [12, 3, 10, 3, 6], [3, 2, 1, 2, 7], 17));