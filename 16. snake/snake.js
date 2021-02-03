

//Настройка холста
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//Получаем ширину и высоту элемента canvas
var width = canvas.width;
var height = canvas.height;

//Вычисляем ширину и высоту в ячейках
var blockSize = 10;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;

//Устанавливаем счет 0
var score = 0;

//Рисуем рамку
var drawBorder = function(){
    ctx.fillStyle = "Gray";
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
};


//Выводим счет игры в левом верхнем углу
var drawScore = function(){
    ctx.font = "20px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("счет: " + score, blockSize, blockSize);
};

//Отменяем действие SetInterval и печатаем сообщение "Конец игры"
var gameOver = function(){
    playing = false;
    ctx.font = "60px Courier";
    ctx.fillStyle = "Black";
    ctx.fillAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Конец игры", width / 20, height / 2);
};

//Рисуем окружность
var circle = function(x, y, radius, fillCircle){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle){
        ctx.fill();
    } else{
        ctx.stroke();
    }
};

//Задаем конструктор Block
var Block = function(col, row){
    this.col = col;
    this.row = row;
};

//Рисуем квадрат в позиции ячейки
Block.prototype.drawSquare = function(color){
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
};

//Рисуем круг в позиции ячейки
Block.prototype.drawCircle = function(color){
    var centerX = this.col * blockSize + blockSize / 2;
    var centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);
};

//Проверяем, нахродится ли эта ячейка в той же позиции, что и ячейка otherBlock
Block.prototype.equal = function(otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
};

//Задаем конструктор Snake
var Snake = function(){
    this.segments = [
        new Block(7, 5),
        new Block(6, 5),
        new Block(5, 5)
    ];
    this.direction = "right";
    this.nextDirection = "right";
};


//Рисуем квадратик для каждого сегмента тела змейки
Snake.prototype.draw = function(){
    this.segments[0].drawSquare("red");
    var isEvenSegment = false;

    for (var i = 0; i < this.segments.length; i++){
       if (isEvenSegment){
           this.segments[i].drawSquare("Blue");
       } else {
        this.segments[i].drawSquare("Yellow");
       }

       isEvenSegment = !isEvenSegment; //Следующий сегмент будет нечетным
    }
};



// Создаем новую голову и добавляем ее к началу змейки
// чтобы передвинуть змейку в текущем направлении
Snake.prototype.move = function(){
    var head = this.segments[0];
    var newHead;

    this.direction = this.nextDirection;

    if (this.direction === "right"){
        newHead = new Block(head.col + 1, head.row);
    } else if (this.direction === "down"){
        newHead = new Block(head.col, head.row + 1);
    } else if (this.direction === "left"){
        newHead = new Block(head.col - 1, head.row);
    } else if (this.direction === "up"){
        newHead = new Block(head.col, head.row - 1);
    }

    if (this.checkCollision(newHead)){
        gameOver();
        return;
    }

    this.segments.unshift(newHead);

    if (newHead.equal(apple.position)){
        score++;
        animationTime -= 10;
        apple.move(this.segments);
    }   else {
        this.segments.pop();
    }
    
};

// Проверяем не столкнулась ли змейка со стеной или с собственным телом
Snake.prototype.checkCollision = function(head){
    var leftCollision = (head.col === 0);
    var topCollision = (head.row === 0);
    var rightCollision = (head.col === widthInBlocks - 1);
    var bottomCollision = (head.row === heightInBlocks - 1);

    var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

    var selfCollision = false;

    for (var i = 0; i < this.segments.length; i++){
        if(head.equal(this.segments[i])){
            selfCollision = true;
        }
    }
    return wallCollision || selfCollision;
};

//Задаем следующее направление змейки на основе нажатой клавиши
Snake.prototype.setDirection = function(newDirection){
    if (this.direction === "up" && newDirection === "down"){
        return;
    }
    if (this.direction === "righr" && newDirection === "left"){
        return;
    }
    if (this.direction === "down" && newDirection === "up"){
        return;
    }
    if (this.direction === "left" && newDirection === "right"){
        return;
    }

    this.nextDirection = newDirection;
};

//Задаем конструктор Apple
var Apple = function(){
    this.position = new Block(10, 10);
};

//Рисуем кружок в позиции яблока
Apple.prototype.draw = function(){
    this.position.drawCircle("LimeGreen");
};

//Перемещаем яблоко в случайную позицию
Apple.prototype.move = function(occupiedBlocks){
    var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) +1;
    var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) +1;
    this.position = new Block(randomCol, randomRow);


//ДЗ №4 Проверяем не передвинули  ли мы яблоко в ячейку занятую змейкой
 var index = occupiedBlocks.length -1;
 while(index >= 0){
     if (this.position.equal(occupiedBlocks[index])){
         this.move(occupiedBlocks); //Вызываем метод move повторно
         return;
     }
     index--;
 }
};

//Создаем объект-змейку и объект-яблоко
var snake = new Snake();
var apple = new Apple();

//Запускаем функцию анимации через setInterval
// var intervalId = setInterval(function(){
//     ctx.clearRect(0, 0, width, height);
//     drawScore();
//     snake.move();
//     snake.draw();
//     apple.draw();
//     drawBorder();
// }, 100);

//ДЗ №3

//Запускаем функцию анимации 
var animationTime = 100;
var playing = true;

//Создаем функцию игрового цикла, вызывающую саму себя использую setTimeout
var gameLoop = function(){
    ctx.clearRect(0, 0, width, height);
    drawScore();
    snake.move();
    snake.draw();
    apple.draw();
    drawBorder();

//Устанавливается в false функцией в gameOver
if(playing){
    setTimeout(gameLoop, animationTime);
    }
};

//Начинаем игровой цикл
gameLoop();


//Преобразуем коды клавиш в направления
var directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
};

//Задаем обработчик события keydown
$("body").keydown(function(event){
    var newDirection = directions[event.keyCode];
    if (newDirection !== undefined){
        snake.setDirection(newDirection);
    }
});
