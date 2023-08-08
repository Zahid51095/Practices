function cubeNumber(number) {
    if(typeof number !== 'number'){
        return 'please enter a number';
    }
    const cube = number * number * number;
    return cube;
}

const ans = cubeNumber('hello');
console.log(ans);