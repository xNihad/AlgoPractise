// 14.Bir funksiya yazın iki parametr qəbul etsin. Birinci parametr rəqəmlərdən ibarət array, 
// ikinici parametr isə rəqəm olsun. Arraydəki bütün  rəqəmlər daxil edilən ikinci 
// parametrin bölənləridirsə, funksiya true return etsin, yox bir dənəsi belə böləni 
// deyilsə false return etsin.

let confuse = (arr, num)=>{
    let count=0;
    for(let i=0; i<arr.length;i++){
        if(num%arr[i]==0) {
            count++;
        }else {
            continue;
        }
    }
    if(count==arr.length) {
        return true;
    }else{
       return false;
    } 
}
let arrayx = [1,2,3,4,5,6,7,8,9,10]
let numberx = 5040
let res = confuse(arrayx, numberx)
console.log(res);
