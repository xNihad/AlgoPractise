// 15.Bir funksiya yazın. Bu funksiya ədədlərdən ibarət bir arrayi parametr şəklində qəbul etsin və 
// arraydəki bütün ədədlər təkdirsə true, 1 dənəsi belə çütdürsə false qaytarsın.
let fun = (arr)=>{
    let count = 0
    for(let i =0;i<arr.length;i++){
        if(arr[i]%2==1){
            count++;
        }
    }
    if(count!=arr.length){
        return false;
    }else {
        return true;
    }

}
let arrayx = [1,2,3,4,5,6,7,8,9,10]
let res = fun(arrayx)
console.log(res);