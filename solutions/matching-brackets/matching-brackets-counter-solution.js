function matchingBrackets(str) {
    const charArr = str.split("");
    let counter = 0;
    for (let char of charArr) {
        if (char === '[') {
            ++counter;
        } else if (char === ']') {
            if (counter <= 0){
                return false
            } else {
                --counter;
            }           
        }
    }
    return counter === 0;
}

console.log(`${matchingBrackets("[hello][world]")} should be true`); // true
console.log(`${matchingBrackets("[hello]][world]")} should be false`); // false
console.log(`${matchingBrackets("[hello][world][]")} should be true`); // true
console.log(`${matchingBrackets("]hello]][world]")} should be false`); // false
console.log(`${matchingBrackets("[[[as;dfi")} should be false`); // false


