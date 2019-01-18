const numberOfPlace = { //Здесь хранятся данные о призовых местах (пока пустые)
	theFirst: 0,
	theSecond: 0,
	theThird: 0,
};

for (var i = 0; i < 3; i++) { //прогоняется три раза, что бы не пропускать нужное число
	for (const playersPointsAr of [74989, 74990, 74990, 62000, 58480, 61800]) { //набранные баллы за очки в игре

		if (playersPointsAr > numberOfPlace.theFirst){ //находим 1-е место
			numberOfPlace.theFirst = playersPointsAr;
		} else if (playersPointsAr > numberOfPlace.theSecond && playersPointsAr != numberOfPlace.theFirst){ //находим 2-е место
			numberOfPlace.theSecond = playersPointsAr;
		} else if (playersPointsAr > numberOfPlace.theThird && playersPointsAr != numberOfPlace.theSecond
		&& playersPointsAr != numberOfPlace.theFirst){ //находим 3-е место
			numberOfPlace.theThird = playersPointsAr;
		}
	}
}
	

let averagePoints = Math.round((numberOfPlace.theFirst + numberOfPlace.theSecond + numberOfPlace.theThird) / 3);

console.log(`Первое место: ${numberOfPlace.theFirst};`);
console.log(`Второе место: ${numberOfPlace.theSecond};`);
console.log(`Третье место: ${numberOfPlace.theThird}.`);
console.log(`Средний балл: ${averagePoints}`);