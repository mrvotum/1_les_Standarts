function places(playersPointsAr){
	var str0 = "Первое место: ";
	var str1 = "Втрое: ";
	var str2 = "Третье: ";
	var str3 = "Средний балл: ";

	function compareNumbers(a, b) { //для сортировки
		return a - b;
	}

	playersPointsAr = playersPointsAr.sort(compareNumbers);
	//console.log(`Сортированный массив: ${playersPointsAr}`);

	playersPointsAr = playersPointsAr.slice(-3); 
	//Выбирает элементы под индексами 0, 1, 2 (= 1, 2, 3 места) --- если .slice(0, 3)
	//Выбирает последние 3 места (так как сортировка идёт по возрастанию)
	//console.log(`Призовые места: ${playersPointsAr}`);
	//первые три места

	var sum = 0
	var li = playersPointsAr.length;
	for(i = 0; i < li; i++){
		sum += playersPointsAr[i];
	}
	var averagePoints = Math.round(sum / 3); 
	//Средний балл; делим на 3, тк 3 элемента 
	//return averagePoints;

	return `${str0}${playersPointsAr[2]}
	${str1}${playersPointsAr[1]}
	${str2}${playersPointsAr[0]}
	${str3}${averagePoints}`;
}


var playersPointsAr = [74989, 74990, 74990, 62000, 58480, 61800]; //количество баллов
console.log(places(playersPointsAr));