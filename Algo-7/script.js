let str = "LawbinOp"
let vowels = ["a", "e", "i", "o" , "u", "A" ,"E", "I", "O", "U"]

function ReverseString(a){
    count=0
    for(let i=0; i<str.length;i++){
        for(let j=0;j<vowels.length;j++){
            if(str[i]==vowels[j]){
                count++
            }
        }
    }
    return count
    
}
let res = ReverseString(str)
console.log(res);