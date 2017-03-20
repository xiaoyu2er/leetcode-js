/**
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 * Difficulty:Easy
 *
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 */


// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 *
 * non-recursion
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    var n = new ListNode(0);
    var t = n;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            n.next = l1;
            l1 = l1.next;
        } else {
            n.next = l2;
            l2 = l2.next;
        }
        n = n.next;
    }
    if (l1) n.next = l1;
    if (l2) n.next = l2;

    return t.next;
};

/**
 *
 * recursion
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

