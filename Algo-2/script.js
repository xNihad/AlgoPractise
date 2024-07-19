function EndsWithZero(){
    let count=0
    for(let i=1; i<=999;i++){
        if(i%100==0){
            count++
        }
    }
    return count
}
let res = EndsWithZero()
console.log(res);