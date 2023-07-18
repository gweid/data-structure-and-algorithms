/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const l3 = new ListNode(0) // 用来保存结果的链表
  let carry = 0 // 记录每次相加之后的进位值
  let p3 = l3 // 定义两个指针，指向结果链表，避免 l3 被改

  while(l1 || l2) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0
    const val = val1 + val2 + carry
    carry = Math.floor(val / 10) // 计算进位的值
    p3.next = new ListNode(val % 10) // 将个位的值作为当前位的结果
    if (l1) l1 = l1.next // 指针指向下一个节点
    if (l2) l2 = l2.next
    p3 = p3.next
  }

  // 如果进位还有值，直接放到结果链表
  if (carry) {
    p3.next = new ListNode(carry)
  }

  return l3.next
}
