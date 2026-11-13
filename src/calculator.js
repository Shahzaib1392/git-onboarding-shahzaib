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
        return nums.reduce((acc, cur, index) => {
            if (!/^\d+$/.test(cur)) throw new Error(`${cur} is not a number`)
            return index === 0 ? cur : acc - cur
        }, 0)
    } catch (e) {
        return e.message
    }
}

function multiply(nums) {
    try {
        return nums.reduce((acc, cur) => {
            if (!/^\d+$/.test(cur)) throw new Error(`${cur} is not a number`)
            return acc * cur
        }, 1)
    } catch (e) {
        return e.message
    }
}

console.log(add([123, 456]))
console.log(subtract([1231, 456]))
console.log(multiply([11, 46]))