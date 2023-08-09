function canPay(changeArray, totalDue) {
    if(changeArray.length === 0) {
        return 'the array is empty man, put some values.';
    }
    else {
        let sum = 0;
        for(let i = 0; i <changeArray.length; i++) {
            // const element = changeArray[i];
            sum = sum + changeArray[i]; 
        }
        // return sum;
    
        if(sum >= totalDue) {
            return true;
        }
        else {
            return false;
        }

    }
   
}

const ans = canPay([5,5,0],10);
console.log(ans);