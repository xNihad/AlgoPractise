function EndsWithZero(){
    let count=0
    for(let i=100; i<=999;i++){
        if(i%10==0){
            count++
        }
    }
    return count
}
let res = EndsWithZero()
console.log(res);