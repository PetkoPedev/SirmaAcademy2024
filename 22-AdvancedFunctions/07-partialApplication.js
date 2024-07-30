function sumFour(num1, num2, num3, num4){
    return num1 + num2 + num3 + num4;
}

function partialSum(num){
    return function(a, b, c){
        return sumFour(num, a, b, c);
    }
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11
