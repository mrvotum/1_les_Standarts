const formatBalance = (strings, points, ending) => {
	let str0 = strings[0]; // "У вас на счету"
	let str1 = strings[1]; // "балл"

	let lastTwoNumbers = points.toString().slice(-2); //2 цифры
	let lastNumber = points.toString().slice(-1);
	//Преобразуем число в строку + забираем последний символ

	if (lastTwoNumbers == 11 || lastTwoNumbers == 12 || lastTwoNumbers == 13
		|| lastTwoNumbers == 14 || lastTwoNumbers == 15 || lastTwoNumbers == 16
		|| lastTwoNumbers == 17 || lastTwoNumbers == 18 || lastTwoNumbers == 19){
		ending = 'ов';
	} else {
		if (lastNumber == 1){
			ending = '';
		} else if (lastNumber == 2 || lastNumber == 3 || lastNumber == 4) {
			ending = 'а';
		} else {
			ending = 'ов';
		}
	}
	return `${str0}${points}${str1}${ending}`;
}

const points = 2323; //количество баллов
const output = formatBalance`У вас на счету ${points} балл`;
console.log(output); // У вас на счету N балл*