/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/description/
 * Difficulty:Medium
 *
 * A linked list is given such that each node contains an additional random pointer
 * which could point to any node in the list or null.
 *
 * Return a deep copy of the list.
 *
 */


// Definition for singly-linked list with a random pointer.
function RandomListNode(label) {
    this.label = label;
    this.next = this.random = null;
}

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function (head) {

    print(head);

    var p = head;
    // A->B->C
    // A->A'->B->B'->C->C'
    while (p) {
        var copy = new RandomListNode(p.label + "'");
        copy.next = p.next;
        p.next = copy;
        p = copy.next;
    }

    print(head);

    // 构造 A' B' C'.random
    p = head;
    while (p) {
        p.next.random = p.random ? p.random.next : null;
        p = p.next.next;
    }

    print(head);
    // 构造 copy
    var pp = new RandomListNode(0);
    var copy = pp;
    p = head;
    while (p) {
        pp.next = p.next;
        pp = pp.next;

        p.next = pp.next;
        p = p.next;

    }

    print(head);
    print(copy.next);

    return copy.next;
};

var a = new RandomListNode('A');
var b = new RandomListNode('B');
var c = new RandomListNode('C');

a.next = b;
b.next = c;
a.random = c;
b.random = c;
c.random = a;

function print(h) {
    var ls = [];
    var rs = [];
    while (h) {
        ls.push(h.label);
        rs.push(h.random ? h.random.label : 'nil');
        h = h.next;
    }
    console.log(ls.join('->'));
    console.log(rs.join(' '));
    console.log('-------------');
}

console.log(copyRandomList(a));