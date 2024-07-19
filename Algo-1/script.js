function SumOfEven(){
    let sum=0
    for(let i=1; i<=99;i++){
        if(i%2==1){
            sum+=i
        }
    }
    return sum
}
let res = SumOfEven()
console.log(res);