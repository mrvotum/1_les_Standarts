const points = 6001; //Сколько баллов вводить сюда
let pointsStr = String(points); //Преобразуем число в строку, чтобы узнать последний символ
console.log(`Баланс: ${pointsStr}`);

for (let points of pointsStr) { //Тут определяется последнее число
	var lastNumber = points;
}


if (lastNumber == 1){
	ending = '';
} else if (lastNumber == 2 || lastNumber == 3 || lastNumber == 4) {
	ending = 'а';
} else {
	ending = 'ов';
}


console.log(`Ваш баланс составляет: ${points} балл${ending}`);