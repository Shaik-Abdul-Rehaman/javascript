function asyncpromise1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1")
            resolve("success")
        },3000)
    })
}




function asynchpromise2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2")
            resolve("success")
        },3000)
    })
}

console.log("fetching for data 1")
let getasynch=asyncpromise1();
getasynch.then((res)=>{
    console.log("fetching for data2")
    let getasynch2=asynchpromise2();
    getasynch2.then((res)=>{
})
    
})


// console.log("fetching for data2")
// let getasynch2=asynchpromise2();
// getasynch2.then((res)=>{
//     console.log(res)
// })






