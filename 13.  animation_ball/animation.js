var Ball = function(){
    this.x = 100;
    this.y = 100;
    this.xSpeed = (Math.random() * 10) -5;
    this.ySpeed = (Math.random() * 10) -5;
    var colors = ["Red", "Orange", "Yellow", "Green", "Blue",  "Purple"];
    this.color = pickRandomWord(colors);
}



var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
  };




var circle = function(x, y, radius, fillCircle){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle){
        ctx.fill();
    } else {
        ctx.stroke();
    }
};





Ball.prototype.draw = function(){
    circle(this.x, this.y, 3, true);
ctx.fillStyle = this.color;
};

Ball.prototype.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function(){
    if(this.x < 0 || this.x > width){
        this.xSpeed = -this.xSpeed;
    }
    if(this.y < 0 || this.y > height){
        this.ySpeed = -this.ySpeed;
    }
};



var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;


var tenBalls = [];
for( var i = 0; i < 10; i++){
    tenBalls[i] = new Ball();
};

var ball = new Ball();

setInterval(function(){
    ctx.clearRect(0, 0, width, height);

    for (var i = 0; i < tenBalls.length; i++){
        tenBalls[i].draw();
        tenBalls[i].move();
        tenBalls[i].checkCollision();  
    }
    ctx.strokeRect(0, 0, width, height);
}, 30);

