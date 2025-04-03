function data(dataid,dataNext){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataid)
            resolve("success")
            if (dataNext){
                dataNext();
            }
        },5000)
    });
}


data(1,()=>{
    data(2,()=>{
        data(3,()=>{
            data(4)
        })
    })
})





function data2(dataid,dataNext){
    return new Promise((resolve,reject)=>{
        console.log(dataid)
        reject("failed")
        if (dataNext){
            dataNext();
        }
    })
}


data2(1,()=>{
    data2(2,()=>{
        data2(3,()=>{
            data2(4)
        })
    })
})
