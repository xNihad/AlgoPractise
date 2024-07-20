let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isPrime(num){
    if (num <= 1) return false;
    for(let i=2; i<num;i++){
       if(num%i === 0 ) return false;  
    }
    return true;
}
function sumOfPrime(arr){
    let sum=0
    for (let i = 0; i < arr.length; i++) {
        if(isPrime(arr[i])){
            sum+=arr[i]
        }   
    }
    return sum
}

let res = sumOfPrime(numbers)
console.log(res);

