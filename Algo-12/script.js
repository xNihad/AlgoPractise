// 12.Bir funksiya yazın.Bu funksiya number tipində bir parametr qəbul etsin və 
// onun vurma cədvəlini qaytarsın.

let mutiplicationTable = (num)=>{
    for(let i = 1;i<=10;i++ ){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}
mutiplicationTable(7)

// let multiplicationTable = (num) => {
//     let table = [];
//     for (let i = 1; i <= 10; i++) {
//         table.push(`${num} x ${i} = ${num * i}`);
//     }
//     return table;
// }

// let res = multiplicationTable(7);
// res.forEach(line => console.log(line));
