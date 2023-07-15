let counter = (min, max) => {
    if (min <= max) {
        console.log(min)
        counter(min + 1, max)
    }
    else {
        return ""
    }
}

counter(2, 5)

let anagram = (strOne, strTwo) => {
    for (let i = 0; i < strOne.trim().length; i++) {
        if (strTwo.includes(strOne[i]) && strOne.trim().length == strTwo.trim().length) {
            return (true)
        }
        return (false)
    }
}

console.log(anagram("eleven plus two", "twelve plus two"))

