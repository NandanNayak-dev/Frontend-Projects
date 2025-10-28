let startbutton=document.querySelector(".startbtn");
let startdiv=document.querySelector(".start");
let container=document.querySelector(".container");
let restart=document.querySelector(".restart");
let res=document.querySelector(".res");
res.style.display="none";
container.style.display="none";
restart.style.display="none";


startbutton.addEventListener("click",function(){
    setTimeout(function(){
        startdiv.style.display="none";
        container.style.display="flex";

    },500)
})


let box=document.querySelectorAll(".box");
let isX=true;
let isO=false;
let count=0;

for(let i=0;i<box.length;i++){
    box[i].addEventListener("click",function(){
       restart.style.display="block";
        if(box[i].innerText==""){
            if(isX){
            count++;
            console.log(count);
            box[i].innerText="X";
            box[i].style.color="blue";
            isX=false;
            isO=true;
            if(xWins()){
                
                setTimeout(function(){
                    container.style.display="none";
                    res.style.display="block";
                    res.style.backgroundColor="blue";
                    res.innerText="X Wins";
                },100)
            }
        }
        
        else if(isO){
            count++;
            console.log(count);
            box[i].innerText="O";
            box[i].style.color="red";
            isX=true;
            isO=false;
            if(oWins()){
                
                setTimeout(function(){
                    container.style.display="none";
                    res.style.display="block";
                    res.style.backgroundColor="red";
                    res.innerText="O Wins";
                },100)
            }
            
        }
        if(count==9&&xWins()==false&&oWins()==false){
            
            setTimeout(function(){
                container.style.display="none";
                res.style.display="block";
                res.style.backgroundColor="green";
                res.innerText="Draw";
            },100)
        }
        restart.addEventListener("click",function(){
            for(let i=0;i<box.length;i++){
                box[i].innerText="";
                container.style.display="flex";
            }
            count=0;
        })
        }
        
    })
}
function xWins(){
    if(box[0].innerText=="X" && box[1].innerText=="X" && box[2].innerText=="X"){
        return true;
    }
    else if(box[3].innerText=="X" && box[4].innerText=="X" && box[5].innerText=="X"){
        return true;
    }
    else if(box[6].innerText=="X" && box[7].innerText=="X" && box[8].innerText=="X"){
        return true;
    }
    else if(box[0].innerText=="X" && box[3].innerText=="X" && box[6].innerText=="X"){
        return true;
    }
    else if(box[1].innerText=="X" && box[4].innerText=="X" && box[7].innerText=="X"){
        return true;
    }
    else if(box[2].innerText=="X" && box[5].innerText=="X" && box[8].innerText=="X"){
        return true;
    }
    else if(box[0].innerText=="X" && box[4].innerText=="X" && box[8].innerText=="X"){
        return true;
    }
    else if(box[2].innerText=="X" && box[4].innerText=="X" && box[6].innerText=="X"){
        return true;
    }
    else{
        return false;
    }
}

function oWins(){
    if(box[0].innerText=="O" && box[1].innerText=="O" && box[2].innerText=="O"){
        return true;
    }
    else if(box[3].innerText=="O" && box[4].innerText=="O" && box[5].innerText=="O"){
        return true;
    }
    else if(box[6].innerText=="O" && box[7].innerText=="O" && box[8].innerText=="O"){
        return true;
    }
    else if(box[0].innerText=="O" && box[3].innerText=="O" && box[6].innerText=="O"){
        return true;
    }
    else if(box[1].innerText=="O" && box[4].innerText=="O" && box[7].innerText=="O"){
        return true;
    }
    else if(box[2].innerText=="O" && box[5].innerText=="O" && box[8].innerText=="O"){
        return true;
    }
    else if(box[0].innerText=="O" && box[4].innerText=="O" && box[8].innerText=="O"){
        return true;
    }
    else if(box[2].innerText=="O" && box[4].innerText=="O" && box[6].innerText=="O"){
        return true;
    }
    else{
        return false;
    }
}


