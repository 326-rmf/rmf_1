/**
 * @param {number} n
 * @return {boolean}
 * 
 * 哈希表 快慢指针
   快乐数
 */
const getNext = (n) => {
    return n.toString().split('').map(a => a**2).reduce((a, b) => a + b)
}
const isHappy = function(n) {
    let slow = n
    let fast = getNext(n)
    while (fast !== slow && fast !== 1) {
        slow = getNext(slow)
        fast = getNext(getNext(fast))
    }
    return fast === 1
};