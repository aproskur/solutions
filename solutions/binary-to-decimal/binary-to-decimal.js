/*
//this soultion doesrequeire someiterion through binary string
function binaryToDecimal(binary) {
    const binaryRegex = new RegExp(/[01]+$/)
    if (!binaryRegex.test(binary)){
        return `${binary} is not a valid binary string`;
    }

    const reversedBinaryArr = binary.split("").reverse();
    let decimalTotal = 0;

    for (let power = 0; power < reversedBinaryArr.length; ++power ){
        if(reversedBinaryArr[power] === '1'){
            decimalTotal += Math.pow(2, power);
        }
    }
    return decimalTotal
} */

//use pointers on the tring instead of turning it into an array
function binaryToDecimal(binary) {
    const binaryRegex = new RegExp(/[01]+$/)
    if (!binaryRegex.test(binary)){
        return `${binary} is not a valid binary string`;
    }
  
    let decimalTotal = 0;
    let power = binary.length - 1;
    let index = 0;

    while(power >= 0){
        let char = binary.charAt(index);
            if (char === '1') {
                decimalTotal += Math.pow(2, power);
            }
            
            --power;
            ++index;
    }
    return decimalTotal
}



console.log(binaryToDecimal("101010")); // 42
console.log(binaryToDecimal("101100000")); // 352
console.log(binaryToDecimal("1")); // 1
console.log(binaryToDecimal("13298436")); // "13298436 is not a valid binary string"
console.log(binaryToDecimal("abc")); // "abc is not a valid binary string"