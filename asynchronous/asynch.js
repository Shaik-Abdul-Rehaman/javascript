

//instruction to wait until it get completed to give output of first instruction to the second instruction ,like html should be render after the background program runs.

function data(dataid,dataNext){
    setTimeout(()=>{
        console.log(dataid)
        if(dataNext){
            dataNext();
        }
    },2000)
}

data(1,()=>{
    data(2,()=>{
        data(3,()=>{
            data(4);
        });
    });
});





function synchdata(dataid){
    setTimeout(()=>{
        console.log("data:",dataid)

    },2000)
}


synchdata(2)
synchdata(3)
synchdata(4)
synchdata(1)