/**
 * 01 背包问题
 *
 * 有 N 件物品和一个容量为 V 的背包。
 * 放入第 i 件物品耗费的费用是 Ci ，得到的 价值是 Wi。
 * 求解将哪些物品装入背包可使价值总和最大。
 *
 * F[i, v] = max{F[i − 1, v], F[i − 1, v − Ci ] + Wi }
 *
 * @param Cost
 * @param Worth
 * @param V
 * @returns {*}
 */
function pack(Cost, Worth, V) {
    var n = Cost.length;
    var dp = [];
    while (dp.push(new Array(V + 1).fill(0)) < n + 1);

    for (var i = 1; i < n + 1; i++) {
        for (var j = 1; j < V + 1; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j > Cost[i - 1]) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - Cost[i - 1]] + Worth[i - 1]);
            }

        }
    }

    for (var i = 1; i < dp.length; i++) {
        console.log(dp[i].slice(1))
    }

    return dp[n][V];
}

console.log(pack([5, 4, 7, 2, 6], [12, 3, 10, 3, 6], 15), 25);