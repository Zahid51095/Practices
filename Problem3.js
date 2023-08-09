function sortMaker(arr) {
    if(arr[0] === arr[1]) {
        return 'equal';
    }
    else if(arr[0] > 0 && arr[1] > 0 && arr[0] > arr[1]) {
        return arr;
    }
    else if(arr[0] < 0 || arr[1] < 0){
        return 'Invalid Input';
    }
    else if(arr[0] < arr[1]){
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
        
      }
      return arr;
}

const ans = sortMaker([4,-2]);
console.log(ans);