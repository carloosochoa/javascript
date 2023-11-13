const paddle = document.getElementById("paddle");
const ball = document.getElementById("ball");

const radio_balon = 20;

var velocidadX = 15; //pixeles
var velocidadY = 5;
intervalo = false;
alturaBody = window.innerHeight;
console.log(alturaBody);


document.addEventListener('keydown',function(event){
    if (!intervalo) {
        intervalo = setInterval(() =>{
            if(event.key === "w"){
                paddle.style.top = (paddle.offsetTop - velocidadY) + "px";
            } else if(event.key === "s") {
                paddle.style.top = (paddle.offsetTop + velocidadY) + "px";
            }
            },10);
    }
});

document.addEventListener('keyup',function(){
    clearInterval(intervalo);
    intervalo = false;
});

