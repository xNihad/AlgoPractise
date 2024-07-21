// 10.Bir funksiya yazın.Bu funksiya number tipində 2 parametr qəbul etsin.
// Biri başlanğıcı digəri isə sonu bildirsin.Sizin funksiyanız onlar arasında 
// qalan ədədləri tamamlayaraq bir array içində return etsin.
// Məsələn: Complete(1,5) => OutPut [1,2,3,4,5]

let gather = (num1, num2)=>{
    let arr = []
    for(let i = num1; i <=num2; i++){
        arr.push(i)
    }
    return arr
}
let res = gather(1,5)
console.log(res);
