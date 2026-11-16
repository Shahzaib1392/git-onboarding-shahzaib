export function add(nums) {
    try {
        return nums.reduce((acc, cur) => {
            if (!Number.isFinite(cur)) throw new Error(`${cur} is not a number`)
            return acc + cur
        }, 0)
    } catch (e) {
        return e.message
    }
}

export function subtract(nums) {
    try {
        return nums.reduce((acc, cur, index) => {
            if (!Number.isFinite(cur)) throw new Error(`${cur} is not a number`)
            return index === 0 ? cur : acc - cur
        }, 0)
    } catch (e) {
        return e.message
    }
}

export function multiply(nums) {
    try {
        return nums.reduce((acc, cur) => {
            if (!Number.isFinite(cur)) throw new Error(`${cur} is not a number`)
            return acc * cur
        }, 1)
    } catch (e) {
        return e.message
    }
}

export function divide(nums) {
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
console.log(multiply([11, 46]))
console.log(divide([10, 46]))