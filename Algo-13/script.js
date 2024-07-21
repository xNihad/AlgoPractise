//13.Bir funksiya yazın.Bu funksiya string tipində bir parametr qəbul etsin və
// onun palindrom olub-olmamasını tapsın.

let polindrom = (str)=>{
   let reverseString = ""
   for(let i=str.length-1;i>=0;i--){
        reverseString+=str[i]
        if(reverseString == str) return true;
   }

   return false
}
let plndrm = "salasass"
let res = polindrom(plndrm)
console.log(res);