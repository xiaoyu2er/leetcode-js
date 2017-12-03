/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 * Difficulty:Medium
 *
 * Given a linked list, remove the nth node from the end of list and return its head.
 *
 * For example,
 *  Given linked list: 1->2->3->4->5, and n = 2.
 *  After removing the second node from the end, the linked list becomes 1->2->3->5.
 *
 * Note:
 *  Given n will always be valid.
 *  Try to do this in one pass.
 *
 */


// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (!head) return head;
    var len = 0;
    var tail = head;
    while (tail) {
        tail = tail.next;
        len++;
    }
    if (len === n) {
        return head.next;
    }

    len = len - n - 1;
    tail = head;
    while (len) {
        tail = tail.next;
        len--;
    }
    tail.next = tail.next.next;
    return head;
};

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
// var e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
// d.next = e;

console.log(removeNthFromEnd(a, 2));
