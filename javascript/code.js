let rabbit = document.querySelector(".rabbit");
let moon = document.querySelector(".moon");
let arrRabbit = Array.from(rabbit.querySelectorAll("div"));
let arrMoon = Array.from(moon.querySelectorAll("div"));
arrRabbit = arrRabbit.filter(e => e.style.backgroundColor);
arrMoon = arrMoon.filter(e => e.style.backgroundColor);

function removeBorders(){
    let randomNumber = Math.floor(Math.random()* arrMoon.length);
    if(arrMoon.length){
        arrMoon[randomNumber].classList.add("border-none");
       arrMoon.splice(randomNumber, 1);
    }
    
    else if(arrRabbit.length){
        randomNumber = Math.floor(Math.random()* arrRabbit.length);
        arrRabbit[randomNumber].classList.add("border-none");
       arrRabbit.splice(randomNumber, 1);
    }  
}

document.addEventListener("click", removeBorders);
