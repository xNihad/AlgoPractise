function SumOfNumbers(){
    let sum=0
    for(let i=100; i<=999;i++){
        if(i%7==0 && i%8==0){
            sum+=i
        }
    }
    return sum
}
let res = SumOfNumbers()
console.log(res);