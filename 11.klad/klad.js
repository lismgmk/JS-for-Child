//Получить случайное число от 0 до size-1 
var getRandomNumber = function (size){
    return Math.floor(Math.random() * size);
};

//вычислить расстояние от клика (event) до клада (target)
var getDisstance = function (event, target){
   var diffX = event.offsetX - target.x;
   var diffY = event.offsetY - target.y;
   return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

//Получить для расстояния строку подсказки
var getDistanceHint = function (distance) {
    if (distance < 10){
        return "Обожжешься!" + " Осталось кликов " + restClicks; 
    }
    else if (distance < 20){
        return "Очень горячо" + " Осталось кликов " + restClicks; 
    }
    else if (distance < 40){
        return "Горячо" + " Осталось кликов " + restClicks; 
        

    }
    else if (distance < 80){
        return "Тепло" + " Осталось кликов " + restClicks; 
    }
    else if (distance < 160){
        return "Холодно" + " Осталось кликов " + restClicks;  
    }
    else if (distance < 320){
        return "Очень холодно" + " Осталось кликов " + restClicks; 
    }
    else if (distance < 460){
        return "Дубак" + " Осталось кликов " + restClicks; 
    }
    else if (distance < 560){
        return "Просто жесть" + " Осталось кликов " + restClicks; 
    }
    else {
        return "Замерзнешь!" + " Осталось кликов " + restClicks; 
    }
};

//Создаем переменные
var width = 800;
var height = 800;
var clicks = 0;
var limitclics = 3;
var restClicks = limitclics - clicks;
//Случайная позиция клада
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
};

//Добавляем элементу img оработчик клика
$("#map").click(function (event){
    clicks++;
    if ( clicks > limitclics) {
        alert("Конец игры!");
        return;
    } 
    

    //Получаем расстояние от места клика до клада
    var distance = getDisstance(event, target);

    //Преобразуем расстояние в подсказку
    var distanceHint = getDistanceHint(distance);

    //Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHint);

    //Если клик был достаточно близко, поздравляем с победой
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }
    
  

});





