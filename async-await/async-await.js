function data(dataid){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data is:", dataid)
        resolve("success")

        },3000)
        
    })
}


async function getdata(){
    await data(1)
    await data(2)
    await data(3)
    await data(4)

}
getdata();