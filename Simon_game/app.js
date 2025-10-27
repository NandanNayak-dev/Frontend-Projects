let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let score=-1 ;
let highScore=0;

let h2=document.querySelector("h2")
let hs=document.querySelector(".hs")

document.addEventListener("keypress",function(){
    
    if(started==false){
        started=true;
        levelup();
    }
})

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },100)

}
////
function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },100)

}


function levelup(){
    userSeq=[];
    level++;
    score++;
    

    h2.innerHTML=`Level ${level} and your score is <b>${score}</b> `;
   


    let randIdx=Math.floor(Math.random()*4)
    let randColor=btns[randIdx]
    let randBtn=document.querySelector(`.${randColor}`)

    // console.log(randIdx)
    // console.log(randBtn)
    // console.log(randColor)

    gameSeq.push(randColor)
    console.log(gameSeq)
    gameFlash(randBtn)
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelup,1000)
        }
    }
    else{
        h2.innerText="Game Over, Press Any Key to Restart"
        h2.innerHTML=`<br>Your Final Score is ${score}`
        
        let entire=document.querySelector("body")
        entire.classList.add("game-over")

        setTimeout(function(){
            entire.classList.remove("game-over")
        },200)
        reset()
    }
}



function btnPress(){
    console.log(this)
    let btn=this;
    userFlash(btn)

    userColor=btn.getAttribute("id")
    userSeq.push(userColor)

    checkAns(userSeq.length-1)

}
let allBtns=document.querySelectorAll(".btn")
for( let btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    if(score>highScore){
        highScore=score;
    }
    hs.innerHTML=`<br>Your High Score is ${highScore}`
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
    score=-1 ;
    entire=document.querySelector("body")
    
}
