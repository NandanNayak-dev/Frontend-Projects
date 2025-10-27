let itm=document.querySelectorAll('.items');
let info=document.querySelector('.info');
let infoinside=document.querySelector('.infoinside');
let bill=document.querySelector('.bill');
info.style.display='none';
let total=document.querySelector('.total');
total.style.display='none';
let genbill=document.querySelector('.genbill');
let afterbill=document.querySelector('.afterbill');


let samosa={
    name:'Samosa',
    price:20,
    calories:100,
    ratings: 4.5

}

let idli={
    name:'Idli',
    price:30,
    calories:200,
    ratings: 4.3
}

let pulav={
    name:'Pulav',
    price:45,
    calories:300,
    ratings: 4
}

let burger={
    name:'Burger',
    price:40,
    calories:400,
    ratings: 4
}

let pizza={
    name:'Pizza',
    price:50,
    calories:500,
    ratings: 4.5
}

let paneer={
    name:'Paneer',
    price:55,
    calories:550,
    ratings: 4.7
}

let chapathi={
    name:'Chapathi',
    price:35,
    calories:350,
    ratings: 4.6
}

let friedrice={
    name:'Fried Rice',
    price:45,
    calories:650,
    ratings: 4.9
}   

let gobi={
    name:'Gobi',
    price:50,
    calories:700,
    ratings: 4.8
}


let noodles={
    name:'Noodles',
    price:60,
    calories:600,
    ratings: 4.8
}

let panipuri={
    name:'Panipuri',
    price:40,
    calories:750,
    ratings: 4.9
}

let poori={
    name:'Poori',
    price:50,
    calories:800,
    ratings: 4.8
}

let coldcoffee={
    name:'Cold Coffee',
    price:30,
    calories:900,
    ratings: 4.9
}

let tea={
    name:'Tea',
    price:15,
    calories:700,
    ratings: 4.8
}

let limesoda={
    name:'Lime Soda',
    price:50,
    calories:800,
    ratings: 4.9
}

const menu = {
    samosa: samosa,
    idli: idli,
    pulav: pulav,
    burger:burger,
    pizza:pizza,
    paneer:paneer,
    chapathi:chapathi,
    friedrice:friedrice,
    gobi:gobi,
    noodles:noodles,
    panipuri:panipuri,
    poori:poori,
    coldcoffee:coldcoffee,
    tea:tea,
    limesoda:limesoda
};

for(let i=0;i<itm.length;i++){
    itm[i].addEventListener('mouseover', function(){
        info.style.display='block';
        const key = this.id ;
        infoinside.innerText = `  ${menu[key].name}\n\nPrice ₹${menu[key].price} \n\nCalories ${menu[key].calories} cal \n\nRatings ${menu[key].ratings}/5`;
        
    });
}

let ul=document.querySelector('ul');


let billtotal=0;
for(let i=0;i<itm.length;i++){
    itm[i].addEventListener('click',function(){
        total.style.display='flex';
        billtotal+=menu[this.id].price;
        let li=document.createElement('li');
        let delbtn=document.createElement('button');
        delbtn.style.backgroundColor='red';
        delbtn.style.color='white';
        delbtn.style.border='none';
        delbtn.style.borderRadius='5px';
        delbtn.style.padding='5px';
        const key = this.id ;
        delbtn.innerText='Remove';
        delbtn.addEventListener('click',function(){
            billtotal-=menu[key].price;
            li.remove();
        })

        const nameSpan = document.createElement('span');
        nameSpan.textContent = menu[key].name;

        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        delbtn.style.marginRight = '8px';

       
        li.style.marginBottom = '10px'; 

        li.appendChild(nameSpan);
        li.appendChild(delbtn);

        ul.appendChild(li);

    })
}

genbill.addEventListener('click',function(){
    afterbill.innerHTML='₹'+billtotal;
})