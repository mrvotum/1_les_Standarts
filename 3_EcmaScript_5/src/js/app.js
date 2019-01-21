function places(strings, playersPointsAr){
	let str0 = strings[0];
	let str1 = strings[1];
	let str2 = strings[2];
	let str3 = strings[3];

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

	let sum = 0
	let li = playersPointsAr.length;
	for(i = 0; i < li; i++){
		sum += playersPointsAr[i];
	}
	let averagePoints = Math.round(sum / 3); 
	//Средний балл; делим на 3, тк 3 элемента 
	//return averagePoints;

	return `${str0}${playersPointsAr[2]}
	${str1}${playersPointsAr[1]}
	${str2}${playersPointsAr[0]}
	${str3}${averagePoints}`;
}


let playersPointsAr = [74989, 74990, 74990, 62000, 58480, 61800]; //количество баллов
let just = 0; //Идёт как заглушка (не сильно разобрался как это работает)

const output = places`Первое место: ${playersPointsAr} Втрое: ${just} Третье: ${just} Средний балл:  ${just}`;
//Через playersPointsAr передаются данные в функцию, а выводится всё так, как прописано в return
console.log(output); // Склейка output и return'а из функции