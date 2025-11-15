let url="https://opentdb.com/api.php?amount=10&category=17&difficulty=easy";
let mainbox=document.querySelector(".mainquiz");
mainbox.style.display="none";
let btnsmodes=document.querySelectorAll("button");
let questionbox=document.querySelector(".questionbox");
let selectmode=document.querySelector(".selectmodes");
let arrans=[0,0,0,0];


for(let i=0;i<btnsmodes.length;i++){
    btnsmodes[i].addEventListener("click",function(){
        selectmode.style.display="none";
        mainbox.style.display="block";
        console.log(btnsmodes[i].id);
        if(btnsmodes[i].id==="easy"){
            url="https://opentdb.com/api.php?amount=10&category=17&difficulty=easy";
        }
        else if(btnsmodes[i].id==="medium"){
            url="https://opentdb.com/api.php?amount=10&category=17&difficulty=medium";
        }
        else{
            url="https://opentdb.com/api.php?amount=10&category=17&difficulty=hard";
        }
        
        console.log(url);
    });
}

async function getquestions(){
    try{
        let response=await axios.get(url)
        console.log(response.data.results[0].question);
        questionbox.innerHTML=`<h2>${response.data.results[0].question}</h2>`
        console.log(response.data.results[0].correct_answer);
        

        let anspositions=Math.floor(Math.random()*4);
        console.log(anspositions);
        arrans[anspositions]=response.data.results[0].correct_answer;
        console.log(arrans);

        let wrongans=[];
        for(let i=0;i<4;i++){
            if(i!==anspositions){
                wrongans.push(response.data.results[0].incorrect_answers.pop());
            }
        }
        console.log(wrongans);
        
        for(let i=0;i<4;i++){
            if(arrans[i]===0){
                arrans[i]=wrongans.pop();
            }
        }
        console.log(arrans);

        let optionbtns=document.querySelectorAll(".optionbtn");
        for(let i=0;i<optionbtns.length;i++){
            optionbtns[i].innerText=arrans[i];
        }

        for(let i=0;i<optionbtns.length;i++){
            optionbtns[i].addEventListener("click",function(){
                if(optionbtns[i].innerText===response.data.results[0].correct_answer){
                    console.log("Correct Answer");
                    optionbtns[i].style.backgroundColor="green";
                }
                else{
                    console.log("Wrong Answer");
                    optionbtns[i].style.backgroundColor="red";
                    
                }
            });
        }
  
    }
    catch(err){
        console.log(err)
    }
}
getquestions();


