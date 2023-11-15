const paddle = document.getElementById("paddle");
const ball = document.getElementById("ball");

const radio_balon = 20;

var velocidadX = 5; //pixeles
var velocidadY = 5;

var velocidad_palaY = 5;
intervalo = false;
alturaBody = window.innerHeight;


const moverBalon = () =>{
    
    //paredes
    if(ball.offsetTop <= 6){
        //colision superior
        velocidadY = -velocidadY;
    }
    if(ball.offsetTop + (radio_balon*2) >= window.innerHeight - 6){
        //colision abajo
        velocidadY = -velocidadY;
    }

    if (ball.offsetLeft + (radio_balon*2) >= window.innerWidth - 6) {
        //colision derecha
        velocidadX = -velocidadX;
    }

    if(ball.offsetLeft - radio_balon <= 6){
        //colision izquierda
        clearInterval(balonMovimiento);
        alert("Has perdido");
        location.reload();
    }

    //palas
    if(ball.offsetLeft - (radio_balon*2) <= paddle.offsetLeft ){
        velocidadY = -velocidadY;
    }

    ball.style.top = (ball.offsetTop + velocidadY) + "px";
    ball.style.left = (ball.offsetLeft + velocidadX) + "px";
}

var balonMovimiento = setInterval(moverBalon, 10);

document.addEventListener('keydown',function(event){
    if (!intervalo) {
        intervalo = setInterval(() =>{
            if(event.key === "w"){
                moverPaddle(-velocidad_palaY);
            } else if(event.key === "s") {
                moverPaddle(velocidad_palaY);
            }
            },10);
    }
});

document.addEventListener('keyup',function(){
    clearInterval(intervalo);
    intervalo = false;
});

const moverPaddle = (coorY) => {
    const nuevoTop = paddle.offsetTop + coorY;

    if(nuevoTop >= 6 && nuevoTop <= (alturaBody - 6) - paddle.offsetHeight){
        paddle.style.top = nuevoTop + "px";
    }
}
