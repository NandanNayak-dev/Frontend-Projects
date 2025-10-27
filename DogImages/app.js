let url="https://dog.ceo/api/breeds/image/random"
let btn=document.querySelector("button")

btn.addEventListener("click",()=>{
    getCatFact()
})

async function getCatFact(){    
try{
        let response=await axios.get(url)
        let img=document.querySelector("img")
        img.setAttribute("src",response.data.message)
        console.log(response.data.message)
        
    }
    catch(err){
        console.log(err)

    }
}
getCatFact()