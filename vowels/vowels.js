let string1="Abcdefghijklnopqrstuvwxyz"
const vow=["a","e","i","o","u"]
function vowels(string1){
    for (let v of string1.toLowerCase()){
        if (vow.includes(v)){
            console.log(v)


        }
    }
}
vowels(string1)


vowels_arrow=(string1)=>{
    for (let v in string1){
        if (vow.includes(string1[v])){
            console.log(string1[v])
        }

    }
}
vowels_arrow(string1)


let arr=[1,2,3,4,5,6,7,8,9]
arr.forEach((val)=>{
    console.log(val*val)
})

let newArr=arr.map((val)=>{
    return val*val
})
console.log(newArr)