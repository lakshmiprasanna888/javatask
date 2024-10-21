function fibonacci(num) {
    let num1 = 0, num2 = 1, sum;
    console.log(num1);
    console.log(num2);

    for (let i = 3; i <= num; i++) {
        sum = num1 + num2;
        console.log(sum);
        num1 = num2;
        num2 = sum;

    }
}

fibonacci(5);