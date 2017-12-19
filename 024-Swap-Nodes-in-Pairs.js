/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 * Difficulty:Medium
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * For example,
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
 *
 */

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    var t = new ListNode(0);
    t.next = head;

    var a = t;

    while (true) {
        if (!a) break;
        var b = a.next;
        if (!b) break;
        var c = b.next;
        if (!c) break;

        b.next = c.next;
        c.next = b;
        a.next = c;
        a = b;

    }
    return t.next;
};

console.log(swapPairs({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4
            }
        }
    }
}))