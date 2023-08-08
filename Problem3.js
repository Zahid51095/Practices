function sortMaker(arr) {
    if(arr[0] === arr[1]) {
        return 'equal';
    }
    else if(arr[0] < arr[1]){
        return 'arr[1], arr[0]';
    }
    else if(arr[0] > 0 && arr[1] > 0) {
        return arr;
    }
    else if(arr[0] < 0 || arr[1] < 0){
        return 'Invalid input';
    }
}

const ans = sortMaker([2,4]);
console.log(ans);