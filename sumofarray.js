function getSumOfAnArray(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const elements = numbers[i];
        sum = sum + elements;
        console.log(sum);

    }
    return sum;
}

const myNumber = [12, 65, 45, 78, 32, 45, 91];
getSumOfAnArray(myNumber);