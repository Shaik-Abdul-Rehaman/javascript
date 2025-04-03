let promise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise")
        resolve("success")

    })
}



let getPromise1=promise();
getPromise1.then((res)=>{
    console.log("succesfully executed the promise",res)
})



let promise2=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise")
        reject("failed")

    })
}

let getPromise2=promise2();

getPromise2.catch((err)=>{
    console.log("failed execution of the promise",err)
})
















// let promise_x = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//     });
// };

// let promise_y = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         reject("failed");
//     });
// };

// // Chain them to maintain order
// promise_x()
//     .then((res) => {
//         console.log("Successfully executed the promise", res);
//         return promise2(); // Ensures second promise starts only after the first completes
//     })
// promise_y.catch((err) => {
//     console.log("Failed execution of the promise", err);
// });
