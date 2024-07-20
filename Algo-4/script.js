let arr = [1,2,3,4,5]

function SumOfNumbers(a){
    let sum=0
    for(let i=0; i<a.length;i++){
        sum=sum+a[i]
    }
    return sum
}
let res = SumOfNumbers(arr)
console.log(res);