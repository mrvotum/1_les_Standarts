// let storeAr = [200, 550, 4000, 23, 58, 5000, 485, 711];
// console.log(`Товары в магазине ${storeAr}`);

var sum = 0;

for (let storeAr of [200, 550, 4000, 23, 58, 5000, 485, 711]) { //Показано на какую сууму закупился пользователь
	sum = sum + storeAr; //Сумма закупки
	//console.log(sum);
}
console.log(`Вы закупились на сумму: ${sum}`);

if (sum >= 10000) {
	let discount = sum * 0.05;
	discount = Math.round(discount); //Округляем до целого
	let newPrice = sum - discount;
	console.log(`Скидка составляет: ${discount}, к оплате: ${newPrice}`);
} else {
	console.log(`Никакой скидки`);
}
