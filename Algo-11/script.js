// 11.Bir funksiya yazın.Bu funksiya ardıcıl ədədlərdən ibarət bir arrayi 
// parametr şəklində qəbul etsin və ardıcıllıqdakı çatışmayan ədədi return etsin.
// Məsələn: FindNumber([1,2,3,4,5,6,8,9,10]) => OutPut 7
let gather = (a)=>{
    for(let i = 0; i <=a.length; i++){
        if((a[i]+a[i+2])/2 != a[i+1]){
            return a[i+1]
        }
    }
    
}
let arr = [1,2,3,4,5,6,8,9,10]
let res = gather(arr)
console.log(res);
