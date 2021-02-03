// /* var dog = {
//     name: "Оладушек",
//     legs: 4,
//     isAwesome: true
// }
// dog.age = 6;

// dog.bark = function() {
//     console.log("Гав-гав! Меня зовут " + this.name + "!");
// };

// dog.bark();
//  */

// var speak = function (){
//     console.log(this.sound + " ! Меня зовут " + this.name + "!");
// };

// var cat = {
//     sound: "Мяу",
//     name: "Варежка",
//     speak: speak
// };
// cat.speak();

// var pig = {
//     sound: "Хрю",
//     name: "Чарли",
//     speak: speak
// }

// var horse = {
//     sound: "И-го-го",
//     name: "Мэри",
//     speak: speak
// }
// pig.speak();
// horse.speak();

//Машинки

// var Car = function (x, y) {
//     this.x = x;
//     this.y = y;
// };

// var drawCar = function (car) {
//     var carHtml = ' <img src="http://nostarch.com/images/car.png">';
//     var carElement = $(carHtml);
//     carElement.css({
//         position: "absolute",
//         left: car.x,
//         top: car.y
//     });
//     $("body").append(carElement);
// }; 
// var tesla = new Car(20, 20);
// var nissan = new Car(100, 200);
// drawCar(tesla);
// drawCar(nissan);

//Машинки + prototype

var Car = function (x, y) {
        this.x = x;
        this.y = y;
        this.draw();
        
};



Car.prototype.draw = function(){
    var carHtml = ' <img src="http://nostarch.com/images/car.png">';
    this.carElement = $(carHtml);

        this.carElement.css({
            position: "absolute",
            left: this.x,
            top: this.y
        });

        $("body").append(this.carElement);
};



Car.prototype.moveRight = function(speed) {
    this.x += speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
    // this.moved = setInterval(this.moveRight(), 30);
};
Car.prototype.moveLeft = function(speed) {
    this.x -= speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};
Car.prototype.moveUp = function(speed) {
    this.y -= speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};
Car.prototype.moveDown = function(speed) {
    this.y += speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};


var tesla = new Car(20, 20);
var nissan = new Car(100, 200);

setInterval(function(){
    tesla.moveRight(Math.random() * 5);
    nissan.moveRight(Math.random() * 5);
}, 30);

