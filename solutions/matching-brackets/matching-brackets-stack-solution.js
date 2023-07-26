function matchingBrackets(str){
    const charArr = str.split("");
    const stack = [];

    for (let char of charArr) {
        if (char === '[') {
            stack.push(char);
        } else if (char === ']') {
            if (stack.length > 0){
                stack.pop();
            } else {
                return false
            }
        }
    }
    return stack.length === 0;
}

console.log(`${matchingBrackets("[hello][world]")} should be true`); // true
console.log(`${matchingBrackets("[hello]][world]")} should be false`); // false
console.log(`${matchingBrackets("[hello][world][]")} should be true`); // true
console.log(`${matchingBrackets("]hello]][world]")} should be false`); // false
console.log(`${matchingBrackets("[[[as;dfi")} should be false`); // false