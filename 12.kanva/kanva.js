// var canvas = document.getElementById("canvas");
// var ctx1 = canvas.getContext("2d");
// var ctx2 = canvas.getContext("2d");
// var ctx3 = canvas.getContext("2d");
// var ctx4 = canvas.getContext("2d");
// var ctx5 = canvas.getContext("2d");
// var ctx6 = canvas.getContext("2d");
// ctx.fillRect(0, 0, 10, 10);

// for (var i = 0; i < 8; i++){
//     ctx.fillRect(i * 10, i * 10, 10, 10);
// }

// ctx1.fillStyle = "Red";

// ctx1.fillRect(100, 0, 50, 50);
// ctx2.fillStyle = "Yellow";
// ctx2.fillRect(120, 50, 10, 30);
// ctx3.fillRect(50, 80, 150, 10);
// ctx4.fillRect(90, 90, 70, 60);
// ctx5.fillRect(90, 150, 10, 50);
// ctx6.fillRect(150, 150, 10, 50);


// ctx1.fillStyle = "Red";
// ctx1.fillRect(0, 0, 50, 50);
// ctx2.fillStyle = "Yellow";
// ctx2.fillRect(50, 0, 50, 50);
// ctx3.fillStyle = "Pink";
// ctx3.fillRect(100, 0, 50, 50);

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// ctx.strokeStyle = "Turquoise";
// ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.moveTo(10, 10);
// ctx.lineTo(60, 60);
// ctx.moveTo(60, 10);
// ctx.lineTo(10, 60);
// ctx.stroke();


// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// ctx.strokeStyle = "Red";
// ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.strokeRect(100, 10, 20, 20);
// ctx.moveTo(110, 30);
// ctx.lineTo(110, 80);
// ctx.moveTo(110, 80);
// ctx.lineTo(80, 150);
// ctx.moveTo(110, 80);
// ctx.lineTo(140, 150);
// ctx.moveTo(110, 70);
// ctx.lineTo(80, 20);
// ctx.moveTo(110, 70);
// ctx.lineTo(140, 20);
// ctx.stroke();

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// ctx.fillStyle = "Blue";
// ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(100, 60);
// ctx.lineTo(130, 30);
// ctx.lineTo(160, 60);
// ctx.lineTo(160, 100);
// ctx.lineTo(100, 100);
// ctx.fill();


// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// ctx.strokeStyle = "Пкуут";
// ctx.lineWidth = 2;

// ctx.beginPath();
// ctx.arc(50, 50, 20, 0, Math.PI / 2, false);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(100, 50, 20, 0, Math.PI, false);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(150, 50, 20, 0, Math.PI * 2, false);
// ctx.stroke();


// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// ctx.lineWidth = 2;

// var circle = function (x, y, radius) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     ctx.fill();
// };

// ctx.lineWidth = 4;
// ctx.fillStyle = "Red";
// circle(100, 100, 10);
// ctx.fillStyle = "Purple";
// circle(100, 100, 60);
// ctx.fillStyle = "Blue";
// circle(100, 100, 50);
// ctx.fillStyle = "Green";
// circle(100, 100, 40);
// ctx.fillStyle = "Yellow";
// circle(100, 100, 30);
// ctx.fillStyle = "Orange";
// circle(100, 100, 20);


// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// ctx.lineWidth = 2;




// var circle = function (x, y, radius) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     ctx.fill();
// };
// var circle2 = function (x, y, radius) {
//     ctx.beginPath();
//     ctx.lineWidth = 4;
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     ctx.stroke();
// };

// circle2(150, 30, 30);
// circle2(150, 110, 50);

// circle(140, 20, 5);
// circle(160, 20, 5);
// circle(150, 80, 5);
// circle(150, 100, 5);
// circle(150, 120, 5);
// ctx.fillStyle = "Orange";
// circle(150, 30, 5);

//ДЗ №1

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// ctx.lineWidth = 2;

// var circle = function(x, y, radius, fillCicle){
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCicle){
//         ctx.fill();
//     } else {
//         ctx.stroke();
//     }
// };

// var drawSnowman = function(x, y){
//     ctx.fillStyle = "Black";
//     ctx.lineWidth = 4;

//     circle(x + 50, y +110, 40, false);
//     circle(x + 50, y +40, 30, false);
//     circle(x + 40, y +35, 5, true);
//     circle(x + 60, y +35, 5, true);
    
//     circle(x + 50, y +90, 5, true);
//     circle(x + 50, y +110, 5, true);
//     circle(x + 50, y +130, 5, true);

//     ctx.fillStyle = "Orange"
//     circle(x + 50, y +45, 5, true);
// };

// drawSnowman(500, 500)


//ДЗ №2


// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");


// var drawPoints = function(points){
//     ctx.beginPath();
//     ctx.moveTo(points[0][0], points[0][1]);
//     for(var i=1; i < points.length; i++){
//         ctx.lineTo(points[i][0], points[i][1]);    
//     }
//     ctx.stroke();
// };

// // var points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]];
// // drawPoints(points);
// var mysteryPoints = [[50, 50], [50, 100], [25, 120], [100, 50], [70, 90], [100, 90], [70, 120]];
// drawPoints(mysteryPoints);


//ДЗ №3
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

// var circle = function (x, y, radius) {
//         ctx.fillStyle = "Pink";
//         ctx.beginPath();
//         ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//         ctx.fill();
//     };

// $("#canvas").mousemove(function(event){
//     circle(event.offsetX, event.offsetY, 10);
// });
    
//ДЗ №4

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "Red";
ctx.lineWidth = 4;
ctx.beginPath();
ctx.strokeRect(100, 10, 20, 20);
ctx.moveTo(110, 30);
ctx.lineTo(110, 80);
ctx.moveTo(110, 80);
ctx.lineTo(80, 150);
ctx.moveTo(110, 80);
ctx.lineTo(140, 150);
ctx.moveTo(110, 70);
ctx.lineTo(80, 20);
ctx.moveTo(110, 70);
ctx.lineTo(140, 20);
ctx.stroke();









