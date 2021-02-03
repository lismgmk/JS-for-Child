// var timeUp = function(){
//     alert("Время вышло!");
// };
// setTimeout(timeUp, 3000);

// var doHomeWorkAlarm = function(){
//     alert("Время вышло!");
// };
// var timeOutId = setTimeout(doHomeWorkAlarm, 60000);
// clearTimeout(timeOutId);


var counter = 5;
var printMessage = function (event){
    console.log("Ты смотришь в консоль уже " + counter + "сек");
    counter += 5;
};
var intervalId = setInterval(printMessage, 5000);
clearInterval(intervalId);