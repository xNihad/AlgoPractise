let arr = [0,1,2,3,4,5,67,3,23]

function SumOfNumbers(a){
    let max=1
    for(let i=0; i<arr.length;i++){
        if(a[i]>max){
            max=a[i]   
        }else{
            continue
        }
    }
    return max
    
}
let res = SumOfNumbers(arr)
console.log(res);