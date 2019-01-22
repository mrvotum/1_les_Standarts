let sum = 0;
let storeAr = [200, 550, 4000, 23, 58, 5000, 485, 711]; //данные о закупке

function showDiscountPrice(storeAr) {
	for (storeAr of storeAr) { //Показано на какую сууму закупился пользователь
		sum = sum + storeAr; //Сумма закупки
	}
	console.log(`Вы закупились на сумму: ${sum}`);
	if (sum >= 10000) {
		let discount = (sum - 10000) * 0.05;
		discount = Math.round(discount); //Округляем до целого
		let newPrice = sum - discount;
		console.log(`Скидка составляет: ${discount}, к оплате: ${newPrice}`);
	} else {
		console.log(`Никакой скидки`);
	}
}

console.log(showDiscountPrice(storeAr));