// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var width = canvas.width;
// var height = canvas.height;

// var circle = function(x, y, radius, fillCircle){
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle){
//         ctx.fill();
//     } else {
//         ctx.stroke();
//     }
// };

// //конструктор Ball
// var Ball = function(){
//     this.x = width / 2;
//     this.y = height / 2;
//     this.speed = 5;
//     this.xSpeed = 1;
//     this.ySpeed = 0;
// };

// //Обновляем позицию мяча соответственно его скорости
// Ball.prototype.move = function(){
//     this.x += this.xSpeed * this.speed;
//     this.y += this.ySpeed * this.speed;

//     if (this.x < 0 || this.x > width){
//         this.xSpeed = -this.xSpeed;
//     }
//     else if (this.y < 0 || this.y > height){
//         this.ySpeed = -this.ySpeed;
//     }
// };


// //Рисуем мяч в его текущей позиции
// Ball.prototype.draw = function(){
//     circle(this.x, this.y, 10, true);
// };


// //Задаем направление движения по строке с названием действия
// Ball.prototype.setDirection = function(direction, speed){
//     if (direction === "up"){
//         this.xSpeed = 0;
//         this.ySpeed = -5;
//     } else if(direction === "down"){
//         this.xSpeed = 0;
//         this.ySpeed = 5;
//     } else if(direction === "left"){
//         this.xSpeed = -5;
//         this.ySpeed = 0;
//     } else if(direction === "right"){
//         this.xSpeed = 5;
//         this.ySpeed = 0;
//     } else if(direction === "stop"){
//         this.xSpeed = 0;
//         this.ySpeed = 0;
//     }
// };

// //Задаем новую скорость мяча

// Ball.prototype.setSpeed = function(newSpeed){
//     if (newSpeed !== undefined){
//         this.speed = newSpeed;
//     }
// }


// //Создаем объект мяч
// var ball = new Ball();

// //Объект для перевода коджа клавиш в название действий
// var keyAction = {
//     32: "stop",
//     37: "left",
//     38: "up",
//     39: "right",
//     40: "down",
// };


// var speeds = {
//     49: "1",
//     50: "2",
//     51: "3",
//     52: "4",
//     53: "5",
//     54: "6",
//     55: "7",
//     56: "8",
//     57: "9",
// };


// //Обработка событий Keydown, будет вызвана при каждом нажатии клавиши
// $("body").keydown(function(event){
//     var direction = keyAction[event.keyCode];
//     var speed = speeds[event.keyCode];
//     ball.setDirection(direction);
//     ball.setSpeed(speed);
// });





// //Функия анимации, вызывается раз в 30 мс
// setInterval(function(){
//     ctx.clearRect(0, 0, width, height);
//     ball.draw();
//     ball.move();
//     ctx.strokeRect(0, 0, width, height);
// }, 30);


//Регулировка размера и скорости

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

var circle = function(x, y, radius, fillCircle){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle){
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

//конструктор Ball
var Ball = function(){
    this.x = width / 2;
    this.y = height / 2;
    this.speed = 5;
    this.size = 10;
    this.xSpeed = 1;
    this.ySpeed = 0;
};

//Обновляем позицию мяча соответственно его скорости
Ball.prototype.move = function(){
    this.x += this.xSpeed * this.speed;
    this.y += this.ySpeed * this.speed;

    if (this.x < 0 || this.x > width){
        this.xSpeed = -this.xSpeed;
    }
    else if (this.y < 0 || this.y > height){
        this.ySpeed = -this.ySpeed;
    }
};


//Рисуем мяч в его текущей позиции
Ball.prototype.draw = function(){
    circle(this.x, this.y, this.size, true);
};


//Задаем направление движения по строке с названием действия
Ball.prototype.doAction = function(action){
    if (action === "up"){
        this.xSpeed = 0;
        this.ySpeed = -1;
    } else if(action === "down"){
        this.xSpeed = 0;
        this.ySpeed = 1;
    } else if(action === "left"){
        this.xSpeed = -1;
        this.ySpeed = 0;
    } else if(action === "right"){
        this.xSpeed = 1;
        this.ySpeed = 0;
    } else if(action === "stop"){
        this.xSpeed = 0;
        this.ySpeed = 0;
    } else if(action === "быстрее"){
        this.speed++;
    } else if(action === "медленнее"){
        if(this.speed > 0){
            this.speed--;
        }
    } else if(action === "меньше"){
        if(this.size > 0){
            this.size--;
        }
    } else if(action === "больше"){
        this.size++;
    } 
};

//Создаем объект мяч
var ball = new Ball();

//Объект для перевода коджа клавиш в название действий
var keyAction = {
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    49: "быстрее",
    50: "медленнее",
    51: "меньше",
    52: "больше"
};


//Обработка событий Keydown, будет вызвана при каждом нажатии клавиши
$("body").keydown(function(event){
    var action = keyAction[event.keyCode];
    ball.doAction(action);
});

//Функия анимации, вызывается раз в 30 мс
setInterval(function(){
    ctx.clearRect(0, 0, width, height);
    ball.draw();
    ball.move();
    ctx.strokeRect(0, 0, width, height);
}, 30);