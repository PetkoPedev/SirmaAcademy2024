function getFibonacci(){
    let num1 = 0, num2 = 1;

    return function(){
        let nextNum = num1;
        num1 = num2;
        num2 = nextNum + num1;
        return nextNum;
    }
}

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21
console.log(fibonacci()); // 21
console.log(fibonacci()); // 21
console.log(fibonacci()); // 21
console.log(fibonacci()); // 21
console.log(fibonacci()); // 21
console.log(fibonacci()); // 21