let str = "LawbinOp"
let vowels = ["a", "e", "i", "o" , "u", "A" ,"E", "I", "O", "U"]

function ReverseString(a,b){
    count=0
    for(let i=0; i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]==b[j]){
                count++
            }
        }
    }
    return count
    
}
let res = ReverseString(str,vowels)
console.log(res);