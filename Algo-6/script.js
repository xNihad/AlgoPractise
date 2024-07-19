let str = "yes"
let new_str = ""

function ReverseString(a){

    for(let i=str.length-1; i>=0;i--){
        new_str+=a[i]
    }
    return new_str
    
}
let res = ReverseString(str)
console.log(res);