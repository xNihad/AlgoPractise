let arr = [2, 4, 5, 6, 5, 3, 5, 24, 4, 3 ]
let duplicates = []

function dulicateNumbers(array){
    for (let i = 0; i < array.length; i++) {
        for(let j= 0; j<array.length;j++){
            if(array[i]==array[j] && i!=j){
                let alreadyAdded = false
                for(let k = 0; k<duplicates.length;k++){
                    if(duplicates[k]==array[i]){
                        alreadyAdded=true
                    }
                }
                if(!alreadyAdded){
                    duplicates.push(array[i])
                }
            } 
        } 
    }
    return duplicates
}
dulicateNumbers(arr)
console.log(duplicates);


