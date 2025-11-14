let url="https://opentdb.com/api.php?amount=10&category=17&difficulty=easy";

let btnsmodes=document.querySelectorAll("button");
let questionbox=document.querySelector(".questionbox");


for(let i=0;i<btnsmodes.length;i++){
    btnsmodes[i].addEventListener("click",function(){
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
        console.log(response.data.results[0].incorrect_answers[1]);
        console.log(response.data.results[0].incorrect_answers[0]);
    }
    catch(err){
        console.log(err)
    }
}
getquestions();











// async function getQuestions(){
//     try{
//         let response=await axios.get(url);
//         console.log(response.data.results[0].question)

//         console.log(response.data.results[0].correct_answer);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// getQuestions();

