/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    let res = []
    while (1) {
        let temp = 0 
        n.toString().split('').forEach(val => {
            temp += Number(val) ** 2
        })
        if (temp == 1)
            return true
        if (res.includes(temp))
            return false
        res.push(temp)
        n = temp
    }

};