const formatBalance = (strings, points, ending) => {
	let str0 = strings[0]; // "У вас на счету"
	let str1 = strings[1]; // "балл"

	let lastNumber = points.toString().slice(-1);
	//Преобразуем число в строку + забираем последний символ

	if (lastNumber == 1){
		ending = '';
	} else if (lastNumber == 2 || lastNumber == 3 || lastNumber == 4) {
		ending = 'а';
	} else {
		ending = 'ов';
	}
	return `${str0}${points}${str1}${ending}`;
}

const points = 637; //количество баллов
const output = formatBalance`У вас на счету ${points} балл`;
console.log(output); // У вас на счету N балл*