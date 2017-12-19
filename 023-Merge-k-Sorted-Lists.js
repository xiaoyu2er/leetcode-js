/**
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 * Difficulty:Hard
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 */


//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    return lists.reduce((a, b) => merge2lists(a, b), null)
};

function merge2lists(a, b) {
    if (!a && !b) return null;
    if (!a) return b;
    if (!b) return a;
    var h;
    if (a.val < b.val) {
        h = a;
        a = a.next;
    } else {
        h = b;
        b = b.next;
    }
    var t = h;

    while (a && b) {
        if (a.val < b.val) {
            t.next = a;
            t = t.next;
            a = a.next;
        } else {
            t.next = b;
            t = t.next;
            b = b.next;
        }
    }
    if (a) t.next = a;
    if (b) t.next = b;
    return h;

}

var a = {
    val: 1,
    next: {
        val: 4,
        next: {
            val: 7,
            next: null
        }
    }
}
var b = {
    val: 2,
    next: {
        val: 8,
        next: {
            val: 9,
            next: null
        }
    }
}

var c = {
    val: 3,
    next: {
        val: 10,
        next: null
    }
}

// console.log(merge2lists(a, b));
console.log(mergeKLists([a, b, c]))