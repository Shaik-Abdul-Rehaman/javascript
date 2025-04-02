let btn1=document.querySelector(".mode1")
let currMode="light"
btn1.addEventListener("click",()=>{
    if(currMode ==="light"){
        currMode="dark"
        document.querySelector("body").classList.add("dark")
        document.querySelector("body").classList.remove("light")



    }else{
        currMode="light"
        document.querySelector("body").classList.add("light")
        document.querySelector("body").classList.remove("dark")

    }
    console.log(currMode)

});