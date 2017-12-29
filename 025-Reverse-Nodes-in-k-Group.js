/**
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 * Difficulty:Hard
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 * k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 * You may not alter the values in the nodes, only nodes itself may be changed.
 * Only constant memory is allowed.
 * For example,
 * Given this linked list: 1->2->3->4->5
 * For k = 2, you should return: 2->1->4->3->5
 * For k = 3, you should return: 3->2->1->4->5
 *
 */

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    // if (k === 1)
    //     return head;
    var t = new ListNode(0);
    t.next = head;
    var s = t;

    while (true) {
        var cnt = 0;
        var f = t;
        while (cnt++ < k && f) {
            f = f.next;
        }
        // console.log(p(t), p(f));

        if (!f || cnt !== k + 1) break;
        cnt = 0;
        var a = t.next;

        while (++cnt < k) {
            var b = a.next;
            a.next = b.next;
            b.next = t.next;
            t.next = b;
            // console.log(p(t), p(a), p(b));
        }
        t = a;
    }

    return s.next;
};

function p(n) {
    var t = n;
    var s = '';
    while (t) {
        s = s + t.val + '->';
        t = t.next;
    }
    s += 'null';
    return s;
}
//
console.log(p(reverseKGroup({
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
}, 2)))

console.log(p(reverseKGroup({val: 1}, 2)));

console.log(p(reverseKGroup({
    val: 1,
    next: {
        val: 2
    }
}, 2)))

console.log(p(reverseKGroup({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: {
                            val: 7
                        }
                    }
                }
            }
        }
    }
}, 3)))
//

console.log(p(reverseKGroup({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}, 2)));

