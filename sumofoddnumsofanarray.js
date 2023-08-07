function getSumOfAnArray(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const elements = numbers[i];
        sum = sum + elements;
        console.log(sum);

    }
    return sum;
}


function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element % 2 === 1) {
            oddNumbers.push(element);

        }
    }

    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const bijorNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(bijorNumbers);



const sum = getSumOfAnArray(bijorNumbers);
