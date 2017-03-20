/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 * Difficulty:Easy
 *
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * For example,
 * Given 1->1->2, return 1->2.
 * Given 1->1->2->3->3, return 1->2->3.
 *
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {

    var p = head;
    if (!p) return p;
    var all = [p.val];
    var t = p.next;

    while (t) {

        if (all.indexOf(t.val) == -1) {
            all.push(t.val);
            p = t;
            t = p.next;
        } else {
            t = t.next;
            p.next = t;
        }
    }
    return head;

};

/**
 * 改进方案
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates2 = function (head) {

    var p = head;
    while (p && p.next) {
        if (p.val == p.next.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;

};



