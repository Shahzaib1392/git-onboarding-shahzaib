function add(nums) {
    try {
        return nums.reduce((acc, cur) => {
            if (!/^\d+$/.test(cur)) throw new Error(`${cur} is not a number`)
            return acc + cur
        }, 0)
    } catch (e) {
        return e.message
    }
}

function subtract(nums) {
    try {
        return nums.reduce((acc, cur) => {
            if (!/^\d+$/.test(cur)) throw new Error(`${cur} is not a number`)
            return acc - cur
        })
    } catch (e) {
        return e.message
    }
}

function divide(nums) {
    try {
        return nums.reduce((acc, cur) => {
            if (Number.isFinite(acc) && Number.isFinite(cur) && cur !== 0)
                return acc / cur
            else
                throw new Error(`Invalid number`)
        })
    } catch (e) {
        return e.message
    }
}

console.log(add([123, 456]))
console.log(subtract([1231, 456]))
console.log(divide([10, 46]))