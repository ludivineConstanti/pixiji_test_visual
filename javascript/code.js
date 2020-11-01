let rabbit = document.querySelector(".rabbit");
let arrayRabbit = Array.from(rabbit.querySelectorAll("div"));
arrayRabbit = arrayRabbit.filter(e => e.style.backgroundColor);

function removeBorders(){
    let randomNumber = Math.floor(Math.random()* arrayRabbit.length);
    if(arrayRabbit.length){
       arrayRabbit[randomNumber].classList.add("border-none");
      // arrayRabbit[randomNumber].style.removeProperty('border');
       //arrayRabbit[randomNumber].style.border = '0px';
        arrayRabbit.splice(randomNumber, 1);
    }  
}

document.addEventListener("click", removeBorders);
